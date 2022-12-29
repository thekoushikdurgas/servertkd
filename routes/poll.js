const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const fetchcontact = require('../middleware/fetchcontact');
const fetchroom = require('../middleware/fetchroom');
const Poll = require('../models/Poll');
const social = require('../models/social');
const licensecertification = require('../models/licensecertification');
const internship = require('../models/internship');
const detail = require('../models/detail');
const service = require('../models/service');
const skills = require('../models/skills');
const contact = require('../models/contact');
const tkdlanguage = require('../models/tkdlanguage');
const education = require('../models/education');
const knowleges = require('../models/knowleges');
const projects = require('../models/projects');
const friends = require('../models/friends');
const icons = require('../models/icons');
const music = require('../models/music');
const Room = require('../models/Room');
const language = require('../models/language');
const currentacy = require('../models/currentacy');
const continent = require('../models/continent');
const states = require('../models/state');
const country = require('../models/country');
const User = require('../models/User');
const task = require('../models/task');
const tkdchat = require('../models/tkdchat');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require('bcryptjs');

router.get('/allpoll', async (req, res) => {
    try { const temp = await poll.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('poll');
});
router.post('/createpoll', fetchuser, async (req, res) => {
    try {
        const { question, options } = req.body;
        var poll = [];
        options.forEach(() => { poll.push(0) });
        const user = await Poll.create({ user: req.user.id, question, answers: options, poll, result: 0 });
        var temp1 = {};
        temp1.question = user.question;
        temp1.answers = user.answers;
        temp1.poll = user.poll;
        temp1.result = user.result;
        res.json({ success: true, task: temp1 });
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('poll');
});

module.exports = router