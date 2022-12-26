const bcrypt = require("bcrypt");
const Joi = require("joi");
const { User } = require("./models/UsersModel");
const genAuthToken = require("../utils/genAuthToken");
import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(8).required(),
    adress: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already exist");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    adress: req.body.adress,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  user = await user.save();

  const token = genAuthToken(user);

  res.send(token);
});

module.exports = router;
