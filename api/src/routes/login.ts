const bcrypt = require("bcrypt");
const Joi = require("joi");
const { User } = require("../models/users");
const genAuthToken = require("../utils/genAuthToken");
import { Router } from "express";

const router = Router();

router.post("/", async (req: any, res: any) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let user: any = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send("User or password is inorrect");

  const isValid: boolean = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isValid) return res.status(400).send("User or password is inorrect");

  const token = genAuthToken(user);

  res.send(token);
});

module.exports = router;
