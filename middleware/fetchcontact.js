var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const fetchuser = (req, res, next) => {
  const token = req.header("contacttoken");
  if (!token) {res.status(401).send({ error: "Please authenticate using a valid token" });}
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.usercontact = data;
    next();
  } catch (error) {res.status(401).send({ success: false,error: "Please authenticate using a valid token" });}
};
module.exports = fetchuser;