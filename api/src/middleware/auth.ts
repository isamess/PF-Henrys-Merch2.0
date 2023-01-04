const jwt = require("jsonwebtoken");

const auth = (req: any, res: any, next: any) => {
  const token: any = req.header("x-auth-token");

  if (!token)
    return res.status(401).send("No puede entrar, no está autenticado");
  try {
    const secretKey: any = process.env.JWT_SECRET_KEY;
    const user: any = jwt.verify(token, secretKey);

    req.user = user;

    next();
  } catch (ex: any) {
    res.status(400).send("No puede entrar, token inválido");
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

export { auth, isAdmin };
