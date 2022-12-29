const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const fetchcontact = require('../middleware/fetchcontact');
const fetchroom = require('../middleware/fetchroom');
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

router.get('/social', async (req, res) => {
    try { const temp = await social.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('social');
});
router.get('/detail', async (req, res) => {
    try { const temp = await detail.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('detail');
});
router.get('/education', async (req, res) => {
    try { const temp = await education.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('education');
});
router.get('/service', async (req, res) => {
    try { const temp = await service.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('service');
});
router.post("/addservice", async (req, res) => {
    try {
        const { icon, name, desc } = req.body;
        const temp = new service({ icon, name, desc });
        await temp.save();
        res.json({ success: true, temp });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
router.get('/skills', async (req, res) => {
    try { const temp = await skills.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('skills');
});
router.post("/addskills", async (req, res) => {
    try {
        const { title, icon, value, type } = req.body;
        const temp = new skills({ title, icon, value, type });
        await temp.save();
        res.json({ success: true, temp });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
router.get('/internship', async (req, res) => {
    try { const temp = await internship.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('internship');
});
router.get('/licensecertification', async (req, res) => {
    try { const temp = await licensecertification.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('licensecertification');
});
router.get('/tkdlanguage', async (req, res) => {
    try { const temp = await tkdlanguage.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('tkdlanguage');
});
router.get('/knowleges', async (req, res) => {
    try { const temp = await knowleges.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('knowleges');
});
router.get('/projects', async (req, res) => {
    try { const temp = await projects.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('projects');
});
router.get('/projects/:id', async (req, res) => {
    try { const temp = await projects.findById(req.params.id); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('projects ' + req.params.id);
});
router.post("/addprojects", async (req, res) => {
    try {
        const { link, myprojectpic, name, category, desc } = req.body;
        const temp = new projects({ user: req.user.id, link, myprojectpic, name, category, desc });
        await temp.save();
        res.json({ success: true, temp });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
router.get('/friends', async (req, res) => {
    try { const temp = await friends.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('friends');
});
router.get('/icons', async (req, res) => {
    try { const temp = await icons.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('icons');
});
router.get('/music', async (req, res) => {
    try { const temp = await music.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('music');
});
router.get('/language', async (req, res) => {
    try { const temp = await language.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('language');
});
router.get('/currentacy', async (req, res) => {
    try { const temp = await currentacy.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('currentacy');
});
router.get('/continent', async (req, res) => {
    try { const temp = await continent.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('continent');
});
router.get('/state', async (req, res) => {
    try { const temp = await states.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('state');
});
router.get('/state/:country', async (req, res) => {
    console.log(req.params.country);
    try { const temp = await states.find({ countrys: req.params.country }); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('state ' + req.params.country);
});
router.get('/country', async (req, res) => {
    try { const temp = await country.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('country');
});

// message

const findcontactid = async (user, contact) => {
    var temp3 = await User.findById(user);
    var temp2 = temp3.contacts;
    if (!temp2.includes(contact)) {
        temp2.push(contact);
        temp3.contacts = temp2;
        await temp3.save();
    }
}
const messagediv = async (userid, contactid, user, message, star1, star2, date) => {
    const temp3 = await User.findById(userid);
    // console.log(temp3.email);
    var temp1 = {};
    // temp1.type = temp3.id === user ? 'replies' : 'sent';
    temp1.name = temp3.name;
    temp1.email = temp3.email;
    temp1.message = message;
    // temp1.contactid = temp3.id === user ? contactid : temp3.id;
    temp1.star1 = star1;
    temp1.star2 = star1;
    temp1.date = formatDate(date, "d/MMM/yyyy");
    temp1.time = formatDate(date, "h:mmtt");
    return temp1;
}
const userdeatails = async (userid, contactid) => {
    const temp3 = await User.findById(userid);
    const templastchat = await tkdchat.find().and([{ $or: [{ user: contactid, contactid: userid }, { user: userid, contactid: contactid }] },]);
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
    temp1.last = templastchat[templastchat.length - 1] === undefined ? '' : templastchat[templastchat.length - 1].message;
    return temp1;
}
router.get('/contact', fetchuser, async (req, res) => {
    try {
        const temp3 = await User.findById(req.user.id);
        var temp = temp3.contacts;
        // console.log(temp);
        var temp2 = [];
        for (var i = 0; i < temp.length; i++) {
            var userdeatailsjson = await userdeatails(temp[i], req.user.id);
            temp2.push(userdeatailsjson);
        }
        res.json(temp2);
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('contact');
});
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json({ success: true, user });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
})
router.post('/getusermess', fetchuser, fetchcontact, async (req, res) => {
    try {
        const temp = await tkdchat.find().and([{ $or: [{ user: req.user.id, contactid: req.usercontact.id }, { user: req.usercontact.id, contactid: req.user.id }] },]);
        var temp2 = [];
        for (var i = 0; i < temp.length; i++) {
            var messagejson = await messagediv(temp[i].user, temp[i].contactid, req.user.id, temp[i].message, temp[i].star1, temp[i].star2, temp[i].updated_at);
            temp2.push(messagejson);
        }
        res.json({ success: true, messagelist: temp2 });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
})
router.post("/addcontact", fetchuser, fetchcontact, async (req, res) => {
    try {
        await findcontactid(req.user.id, req.usercontact.id);
        await findcontactid(req.usercontact.id, req.user.id);
        res.json({ success: true, contactemail: req.usercontact.email });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('addcontact');
});
router.post("/tkdchat", fetchuser, fetchcontact, async (req, res) => {
    try {
        const message = req.header("message");
        const errors = validationResult(req);
        if (!errors.isEmpty()) { return res.json({ errors: errors.array() }); }
        const temp = new tkdchat({ user: req.user.id, contactid: req.usercontact.id, message });
        const savedtemp = await temp.save();
        const messagejson = await messagediv(req.user.id, req.usercontact.id, req.user.id, message, false, false, savedtemp.updated_at);
        res.json({ success: true, message: messagejson });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('tkdchat');
});
router.post('/createroom', fetchuser, [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('picimg', 'Enter a valid picimg').isLength({ min: 10 }),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.json({ success: false, errors: errors.array() }); }
    try {
        const { name, password, picimg, mode } = req.body;
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
        const Roomdeatail = await Room.create({ name, ownerid: req.user.id, password: secPass, picimg, mode, members: [req.user.id] });
        const data = { id: Roomdeatail.id }
        const authtoken = jwt.sign(data, JWT_SECRET);
        Roomdeatail.authtoken = authtoken;
        await Roomdeatail.save();
        res.json({ success: true, authtoken, ower: Roomdeatail.id === req.user.id });
    } catch (error) { console.error(error.message); res.status(500).json({ success: false, error: "500" }); }
});
router.post('/getrooms', fetchuser, async (req, res) => {
    try {
        const room = await Room.find();
        const Usertemp = await User.findById(req.user.id);
        var temp2 = [];
        for (i = 0; i < room.length; i++) {
            if (room[i].members.includes(req.user.id)) {
                const templastchat = await tkdchat.find({ contactid: room[i].id });
                var temp1 = {};
                temp1.authtoken = room[i].authtoken;
                temp1.name = room[i].name;
                temp1.username = room[i].username;
                temp1.email = Usertemp.email;
                temp1.picimg = room[i].picimg;
                temp1.phone = room[i].phone;
                temp1.status = room[i].status;
                temp1.country = room[i].country;
                temp1.last = templastchat[templastchat.length - 1] === undefined ? '' : templastchat[templastchat.length - 1].message;
                temp2.push(temp1);
            }
        }
        res.json(temp2);
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
})
router.post('/roomsdetails', fetchuser, fetchroom, async (req, res) => {
    try {
        const Roomtemp = await Room.findById(req.room.id);
        const Usertemp = await User.findById(req.user.id);
        var success = false;
        if (!Roomtemp) { return res.json({ success, error: "Room id is invalid" }); }
        if (!Usertemp) { return res.json({ success, error: "User id is invalid" }); }
        var temp = {};
        temp.success = true;
        temp.authtoken = Roomtemp.authtoken;
        temp.roomimg = Roomtemp.picimg;
        temp.roomname = Roomtemp.name;
        temp.userimg = Usertemp.picimg;
        temp.useremail = Usertemp.email;
        let tempmess1 = [];
        for (var i = 0; i < Roomtemp.members.length; i++) {
            var userdeatailsjson = await userdeatails(Roomtemp.members[i], req.room.id);
            tempmess1.push(userdeatailsjson);
        }
        temp.roommembers = tempmess1;
        temp.ower = (String(Roomtemp.ownerid) === String(req.user.id));
        const tempmess = await tkdchat.find({ contactid: req.room.id });
        tempmess1 = [];
        for (var i = 0; i < tempmess.length; i++) {
            var messagejson = await messagediv(tempmess[i].user, tempmess[i].contactid, req.user.id, tempmess[i].message, tempmess[i].star1, tempmess[i].star2, tempmess[i].updated_at);
            tempmess1.push(messagejson);
        }
        temp.messagelist = tempmess1;
        res.json({ success: true, room: temp });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
router.post("/sentroommessage", fetchuser, fetchroom, async (req, res) => {
    try {
        const temp = await tkdchat.create({ user: req.user.id, contactid: req.room.id, message: req.header("message") });
        const savedtemp = await temp.save();
        const messagejson = await messagediv(req.user.id, req.room.id, req.user.id, req.header("message"), false, false, savedtemp.updated_at);
        res.json({ success: true, message: messagejson });
    } catch (error) { console.error(error.message); res.status(500).json({ success: false }); }
    console.log('tkdchat');
});
router.post("/addroommember", fetchuser, fetchroom, fetchcontact, async (req, res) => {
    try {
        // await findcontactid(req.user.id, req.room.id);
        // await findcontactid(req.room.id, req.user.id);
        const temp3 = await Room.findById(req.room.id);
        var temp = temp3.members;
        if (temp3.members[0] === req.user.id) {
            temp.push(req.usercontact.id);
            temp3.members = temp;
            await temp3.save();
            res.json({ success: true });
        }
        else {
            res.json({ success: false, errors: `You are not ower of the Room` });
        }
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('addcontact');
});
router.get('/roommember', fetchuser, fetchroom, async (req, res) => {
    try {
        const temp3 = await Room.findById(req.room.id);
        var temp = temp3.members;
        var temp2 = [];
        for (var i = 0; i < temp.length; i++) {
            var userdeatailsjson = await userdeatails(temp[i], req.user.id);
            temp2.push(userdeatailsjson);
        }
        res.json(temp2);
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('contact');
});
router.get('/bloodlocation', fetchuser, async (req, res) => {
    try {
        ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-',]
        res.json(temp2);
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('contact');
});
router.get("/createtask", fetchuser, async (req, res) => {
    try {
        const contactid = req.header("contactid");
        const { name, source, description, date } = req.body;
        const d1 = new Date(date);
        const user = await task.create({ user: req.user.id, contactid, name, source, description, completeStatus: 0, lastdate: d1 });
        console.log(user);
        var temp1 = {};
        temp1.id = user.id;
        temp1.name = user.name;
        temp1.username = user.username;
        temp1.source = user.source;
        temp1.description = user.description;
        temp1.completeStatus = user.completeStatus;
        temp1.last = formatDate(user.lastdate, "d/MMM/yyyy");
        temp1.date = formatDate(user.updated_at, "d/MMM/yyyy");
        temp1.time = formatDate(user.updated_at, "h:mmtt");
        res.json({ success: true, task: temp1 });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('createtask');
});
router.get('/task', fetchuser, async (req, res) => {
    try {
        const temp = await task.find().and([{ $or: [{ user: req.user.id }, { contactid: req.user.id }] },]);
        var temp2 = [];
        for (var i = 0; i < temp.length; i++) {
            var temp1 = {};
            temp1.id = temp[i].id;
            temp1.name = temp[i].name;
            temp1.username = temp[i].username;
            temp1.source = temp[i].source;
            temp1.description = temp[i].description;
            temp1.completeStatus = temp[i].completeStatus;
            temp1.last = formatDate(temp[i].lastdate, "d/MMM/yyyy");
            temp1.date = formatDate(temp[i].updated_at, "d/MMM/yyyy");
            console.log(temp[i].lastdate - temp[i].updated_at);
            temp2.push(temp1);
        }
        res.json({ success: true, task: temp2 });
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('task');
});
router.get('/passwordjson', async (req, res) => {
    try {
        var temp = {};
        for (var i = 6; i < 129; i++) {
            temp[i] = strongpassword(i);
        }
        temp[256] = strongpassword(256);
        temp[512] = strongpassword(512);
        temp[1024] = strongpassword(1024);
        temp[2048] = strongpassword(2048);
        res.json(temp);
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('passwordjson');
});
router.get('/password/:len', async (req, res) => {
    try {
        var temp = {};
        temp[req.params.len] = strongpassword(req.params.len);
        res.json(temp);
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('password ' + req.params.len);
});
// router.post("/setbrowserhistory", async (req, res) => {
// try {
// const link = req.header("link");
// if (req.cookies.history) {
//     res.cookie('history', [link], {});
// } else {
//     res.cookie('history', [...req.cookies.history, link], {});
// }
// } catch (error) { console.error(error.message); res.json({ success: false,errors:error.message }); }
// });
// router.get("/browserhistroy", async (req, res) => {
// try {
// if (req.cookies.success) {
//     res.json(req.cookies.history);
// } else {
//     res.json({ success: false });
// }
// } catch (error) { console.error(error.message); res.json({ success: false,errors:error.message }); }
// });

// router.post("/contact",async (req, res) => {
//     try {
//         const { name, email, message, phone, subject,choose } = req.body;
//         const temp = new contact({ name, email, message, phone, subject,choose });
//         await temp.save();
//         res.json({ success: true, temp });
//     } catch (error) { console.error(error.message); res.json({ success: false,errors:error.message }); }
// });
// router.post("/add", fetchuser, async (req, res) => {
//     try {
//         for (let i = 0; i < ko.length; i++) {
//             const element = ko[i];
//             // const temp = await icons.find({name:element.name});
//             // console.log(temp.length);
//             // if(temp.length != 0){
//             //     temp1 = await icons.findByIdAndDelete(temp[0].id);
//             // }
//             const temp = new icons({
//                 link: element.link,
//                 name: element.name,
//                 title: element.title,
//                 csscontentcode: element.csscontentcode,
//                 svglink: element.svglink,
//                 icontype: element.icontype,
//             });
//             await temp.save();
//             console.log(element.name);
//         }
//         res.json({ success: true });
//     } catch (error) { console.error(error.message); res.json({ success: false,errors:error.message }); }
// });
// router.post("/update", fetchuser, async (req, res) => {
//     try { 
//         const temp = await music.find(); 
//         for (var i = 0; i < temp.length; i++) {
//             music.findById(temp[i].id, function(err, p) {
//                 if (!p)
//                   return next(new Error('Could not load Document'));
//                 else {
//                     p.image=p.image.replace("http://koushikchandrasaha.thekoushikdurgas.in/music/","http://koushikchandrasaha.thekoushikdurgas.in/music/")
//                     p.audio_file=p.audio_file.replace("http://koushikchandrasaha.thekoushikdurgas.in/music/","http://koushikchandrasaha.thekoushikdurgas.in/music/")
//                     p.save(function(err) {
//                         if (err)
//                         console.log('error')
//                         else
//                         console.log('success')
//                     });
//                 }
//             });
//         }
//     }
//     catch (error) { console.error(error.message); res.json({ success: false,errors:error.message }); }
//     console.log('update');
// });
// router.post("/social",fetchuser,[
//     body("title", "Enter a valid title").isLength({ min: 3 }),
//     body("title1", "Enter a valid title1").isLength({ min: 3 }),
//     body("icon", "Enter a valid icon").isLength({ min: 3 }),
//     body("link", "Enter a valid link").isLength({ min: 3 }),
//   ],async (req, res) => {
//     try {
//       const { title, title1, icon,link } = req.body;
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {return res.json({ errors: errors.array() });}
//       const temp = new social({user: req.user.id,title,title1,icon,link,});
//       const savedsocial = await temp.save();
//       res.json(savedsocial);
//     } catch (error) {console.error(error.message);res.send("Internal Server Error");}
//   }
// );

// router.put("/social/:id",fetchuser,async (req, res) => {
//   const { title, title1, icon,link } = req.body;
//   try {
//     const newtemp = {};
//     if (title) { newtemp.title = title };
//     if (title1) { newtemp.title1 = title1 };
//     if (icon) { newtemp.icon = icon };
//     if (link) { newtemp.link = link };
//     var temp = await social.findById(req.params.id);
//     if (!temp) { return res.status(404).send("Not Found") }
//     if (temp.user.toString() !== req.user.id) {return res.status(401).send("Not Allowed");}
//     temp = await social.findByIdAndUpdate(req.params.id, { $set: newtemp }, { new: true })
//     res.json({temp});
//   } catch (error) {console.error(error.message);res.send("Internal Server Error");}
//   }
// );

// router.delete('/social/:id', fetchuser, async (req, res) => {
//   try {
//       var temp = await social.findById(req.params.id);
//       if (!temp) { return res.status(404).send("Not Found") }
//       if (temp.user.toString() !== req.user.id) {return res.status(401).send("Not Allowed");}
//       temp = await social.findByIdAndDelete(req.params.id)
//       res.json({ "Success": "deleted Successfully", note: note });
//     } catch (error) {console.error(error.message);res.send("Internal Server Error");}
// })

function strongpassword(len) {
    var length = (len) ? (len) : (10);
    var string = "abcdefghijklmnopqrstuvwxyz";
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var character = "";
    while (password.length < length) {
        entity1 = Math.ceil(string.length * Math.random() * Math.random());
        entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
        hold = string.charAt(entity1);
        hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
        character += hold;
        character += numeric.charAt(entity2);
        character += punctuation.charAt(entity3);
        password = character;
    }
    password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
    return password.substring(0, len);
}
function formatDate(date, format, utc) {
    var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    function ii(i, len) {
        var s = i + "";
        len = len || 2;
        while (s.length < len) s = "0" + s;
        return s;
    }
    var y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);
    var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])M/g, "$1" + M);
    var d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);
    var H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);
    var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);
    var m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])m/g, "$1" + m);
    var s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);
    var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);
    var T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));
    var t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));
    var tz = -date.getTimezoneOffset();
    var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
        tz = Math.abs(tz);
        var tzHrs = Math.floor(tz / 60);
        var tzMin = tz % 60;
        K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);
    var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);
    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);
    format = format.replace(/\\(.)/g, "$1");
    return format;
}
module.exports = router