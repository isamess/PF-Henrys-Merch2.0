import { Router } from "express";

const { User } = require("../models/users");
const { auth, isUser, isAdmin } = require("../middleware/auth");
const moment = require("moment");

const router = Router();

router.get("/stats", isAdmin, async (req: any, res: any) => {
  const previousMonth: any = moment()
    .month(moment().month() - 1)
    .set("date", 1)
    .format("YYYY-MM-DD HH:mm:ss");

  try {
    const users: any = await User.aggregate([
      {
        $match: { createdAt: { $gte: new Date(previousMonth) } },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).send(users);
  } catch (err: any) {
    res.status(500).send(err);
  }
});

router.get("/find", async (req: any, res: any) => {
  try {
    const user: any = await User.find();
    res.status(200).send(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/find/:id", isAdmin, async (req: any, res: any) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({
        message: "Usuario doesn't exist",
      });
    return res.json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.delete("delete/:id"),
  isAdmin,
  async (req: any, res: any) => {
    try {
      console.log("works");
      const user: any = await User.findById(req.params.id);

      if (user) {
        const deleteProduct: any = await user.findByIdAndDelete(req.params.id);

        res.status(200).send(deleteProduct);
      } else {
        console.log("Acción terminada. Falla al eliminar el producto");
      }
    } catch (err: any) {
      res.status(500).send(err);
    }
  };

router.put("/:id", isAdmin, async (req, res) => {
  try {
    const updatedResponse: any = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ...req.body,
        },
      },
      { new: true }
    );
    console.log(updatedResponse);
    res.status(200).send(updatedResponse);
  } catch (err: any) {
    res.status(500).send(err);
  }
});

module.exports = router;
