var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const fetchroom = (req, res, next) => {
  const token = req.header("roomauthtoken");
  if (!token) {res.status(401).send({ error: "Please authenticate using a valid token" });}
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.room = data;
    next();
  } catch (error) {res.status(401).send({ error: "Please authenticate using a valid token" });}
};
module.exports = fetchroom;