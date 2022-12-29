const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = process.env.JWT_SECRET;
const fetchroom = require('../middleware/fetchroom');
const Room = require('../models/Room');

// const option = {
//   maxAge: 3600000,
//   httpOnly: true,
// };
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('username', 'Enter a valid username').isLength({ min: 3 }),
  body('phone', 'Enter a valid phone').isLength({ min: 3 }),
  body('picimg', 'Enter a valid picimg').isLength({ min: 10 }),
  body('country', 'Enter a valid country').isLength({ min: 3 }),
  body('dof', 'Enter a valid dof').isLength({ min: 3 }),
  body('gender', 'Enter a valid gender').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) { return res.json({ success: false, errors: errors.array() }); }
  try {
    const { name, email, password, username, phone, country, dof, picimg, gender } = req.body;
    var user = await User.findOne({ email: email });
    if (user) { return res.json({ success: false, errors: "Sorry a user with this email already exists" }) }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);
    user = await User.create({ name: name, password: secPass, email: email, username: username, phone: phone, country: country, contacts: [], blockcontacts: [], rooms: [], blockrooms: [], status: 'offline', dof: dof, picimg: picimg, gender: gender, });
    const data = { id: user.id }
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ success: true, authtoken, email });
  } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  var success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) { return res.json({ errors: errors.array() }); }
  const { email, password } = req.body;
  try {
    var user = await User.findOne({ email });
    if (!user) { success = false; return res.json({ success: false, errors: "Please try to login with correct credentials" }); }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) { success = false; return res.json({ success, errors: "Please try to login with correct credentials" }); }
    const data = { id: user.id };
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken, email: user.email });
  } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
router.post('/getusers', fetchuser, async (req, res) => {
  try {
    const user = await User.find();
    const temp3 = await User.findById(req.user.id);
    const temp4 = temp3.contacts;
    // console.log(temp4);
    var temp2 = [];
    for (var i = 0; i < user.length; i++) {
      if (!temp4.includes(user[i].id) && user[i].id != req.user.id) {
        const temp3 = await User.findById(user[i].id);
        var temp1 = {};
        const data = { id: temp3.id }
        const authtoken = jwt.sign(data, JWT_SECRET);
        temp1.authtoken = authtoken;
        temp1.name = temp3.name;
        temp1.username = temp3.username;
        temp1.email = temp3.email;
        temp1.picimg = temp3.picimg;
        temp1.phone = temp3.phone;
        temp1.status = temp3.status;
        temp1.country = temp3.country;
        temp1.gender = temp3.gender;
        temp2.push(temp1);
      }
    }
    res.send(temp2);
  } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
router.post('/getroomusers', fetchuser, fetchroom, async (req, res) => {
  try {
    const user = await User.find();
    const temp3 = await Room.findById(req.room.id);
    const temp4 = temp3.members;
    var temp2 = [];
    for (var i = 0; i < user.length; i++) {
      if (!temp4.includes(user[i].id) && user[i].id != req.user.id) {
        const temp3 = await User.findById(user[i].id);
        var temp1 = {};
        const data = { id: temp3.id }
        const authtoken = jwt.sign(data, JWT_SECRET);
        temp1.authtoken = authtoken;
        temp1.name = temp3.name;
        temp1.username = temp3.username;
        temp1.email = temp3.email;
        temp1.picimg = temp3.picimg;
        temp1.phone = temp3.phone;
        temp1.status = temp3.status;
        temp1.country = temp3.country;
        temp1.gender = temp3.gender;
        temp2.push(temp1);
      }
    }
    res.send(temp2);
  } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
module.exports = router;