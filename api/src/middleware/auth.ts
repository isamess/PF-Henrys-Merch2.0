import { RequestHandler, Request } from "express";
const jwt = require("jsonwebtoken");

const auth = (req: any, res: any, next: any) => {
  const token: any = req.get("x-auth-token");

  if (!token)
    return res.status(401).send("No puede entras, no está autenticado");
  try {
    const secretKey: any = `${process.env.JWT_SECRET_KEY}`;
    const user: any = jwt.verify(token, secretKey);

    req.user = user;

    next();
  } catch (err: any) {
    res.status(400).send("No puede entras, token inválido");
  }
};

const isAdmin = (req: any, res: any, next: any) => {
  auth(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("No puede entras, no está autorizado");
    }
  });
};

module.exports = { auth, isAdmin };
