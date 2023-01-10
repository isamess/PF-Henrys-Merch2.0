import { Router } from "express";

const { Order } = require("../models/order");
const { auth, isUser, isAdmin } = require("../middleware/auth");
const moment = require("moment");
const mongoose = require("mongoose");

const router = Router();

router.get("/stats", isAdmin, async (req: any, res: any) => {
  const previousMonth: any = moment()
    .month(moment().month() - 1)
    .set("date", 1)
    .format("YYYY-MM-DD HH:mm:ss");

  try {
    const orders: any = await Order.aggregate([
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

    res.status(200).send(orders);
  } catch (err: any) {
    res.status(500).send(err);
  }
});

router.get("/total-income", isAdmin, async (req: any, res: any) => {
  try {
    const income: any = await Order.aggregate([
      {
        $project: {
          sales: "$total",
        },
      },
    ]);

    res.status(200).send(income);
  } catch (err: any) {
    res.status(500).send(err);
  }
});

router.get("/income/stats", isAdmin, async (req: any, res: any) => {
  const previousMonth: any = moment()
    .month(moment().month() - 1)
    .set("date", 1)
    .format("YYYY-MM-DD HH:mm:ss");

  try {
    const income: any = await Order.aggregate([
      {
        $match: { createdAt: { $gte: new Date(previousMonth) } },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$total",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).send(income);
  } catch (err: any) {
    res.status(500).send(err);
  }
});

router.get("/week-sales", isAdmin, async (req: any, res: any) => {
  const last7Days: any = moment()
    .day(moment().day() - 7)
    .format("YYYY-MM-DD HH:mm:ss");

  try {
    const income: any = await Order.aggregate([
      {
        $match: { createdAt: { $gte: new Date(last7Days) } },
      },
      {
        $project: {
          day: { $dayOfWeek: "$createdAt" },
          sales: "$total",
        },
      },
      {
        $group: {
          _id: "$day",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).send(income);
  } catch (err: any) {
    res.status(500).send(err);
  }
});

router.get("/", isAdmin, async (req: any, res: any) => {
  const query: boolean = req.query.new;

  try {
    const orders: any = query
      ? await Order.find().sort({ _id: -1 }).limit(4)
      : await Order.find().sort({ _id: -1 });

    res.status(200).send(orders);
  } catch (err: any) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:id", isAdmin, async (req: any, res: any) => {
  try {
    const updatedOrder: any = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updatedOrder);
  } catch (err: any) {
    res.status(500).send(err);
  }
});

module.exports = router;
