const dropdowns = document.querySelectorAll(".dropdown");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const moonshadow = document.querySelector("#moonshadow");
const moonlight = document.querySelector("#moonlight");
// const tkddarklightcheckbox = document.querySelector("#tkddarklightcheckbox");
const csslistjson = [
  { topcsslist: 70, leftcsslist: -10, rotatecsslist: 315 },
  { topcsslist: 60, leftcsslist: -1, rotatecsslist: 322.5 },
  { topcsslist: 50, leftcsslist: 8.2, rotatecsslist: 330 },
  { topcsslist: 40, leftcsslist: 17.3, rotatecsslist: 337.5 },
  { topcsslist: 30, leftcsslist: 26.4, rotatecsslist: 345 },
  { topcsslist: 20, leftcsslist: 35.5, rotatecsslist: 352.5 },
  { topcsslist: 10, leftcsslist: 44.6, rotatecsslist: 360 },
  { topcsslist: 20, leftcsslist: 53.7, rotatecsslist: 7.5 },
  { topcsslist: 30, leftcsslist: 62.8, rotatecsslist: 15 },
  { topcsslist: 40, leftcsslist: 71.9, rotatecsslist: 22.5 },
  { topcsslist: 50, leftcsslist: 81, rotatecsslist: 30 },
  { topcsslist: 60, leftcsslist: 90.1, rotatecsslist: 37.5 },
];
var fullscreen = false;
const setFullscreen = (e) => {
  fullscreen = e;
};
const body = document.body;
var daynight = !1;
const setdaynight = (e) => {
  daynight = e;
};
var cssposition = 0;
const setcssposition = (e) => {
  cssposition = e;
};
var lsborderradius = "";
const setlsborderradius = (e) => {
  lsborderradius = e;
};
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdowns.forEach((c) => c.classList.remove("is-active"));
    dropdown.classList.add("is-active");
  });
});
$(".search-bar input")
  .focus(function () {
    $(".header").addClass("wide");
  })
  .blur(function () {
    $(".header").removeClass("wide");
  });
$(document).click(function (e) {
  var container = $(".status-button");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});
$(".dropdown").on("click", function (e) {
  $(".content-wrapper").addClass("overlay");
  e.stopPropagation();
});
$(document).on("click", function (e) {
  if ($(e.target).is(".dropdown") === false) {
    $(".content-wrapper").removeClass("overlay");
  }
});
$(".status-button:not(.open)").on("click", function (e) {
  $(".overlay-app").addClass("is-active");
});
$(".pop-up .close").click(function () {
  $(".overlay-app").removeClass("is-active");
});
$(".status-button:not(.open)").click(function () {
  $(".pop-up").addClass("visible");
});
$(".pop-up .close").click(function () {
  $(".pop-up").removeClass("visible");
});
const showfullscreen = () => {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    fullscreenicon.classList.remove("full");
    setFullscreen(false);
  } else {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
    fullscreenicon.classList.add("full");
    setFullscreen(true);
  }
};
const changedaynight = (e) => {
  setdaynight(e);
  // tkddarklightcheckbox.checked = e;
  moonPhase(new Date());
  // if (e) {
  //   body.classList.remove("bodylight");
  //   body.classList.add("bodydark");
  // } else {
  //   body.classList.add("bodylight");
  //   body.classList.remove("bodydark");
  // }
};
const darklight = (t) => {
  changedaynight(!daynight);
};
const positionsunmoon = () => {
  var e = new Date().getHours(),
    t = !0;
  e <= 5 ? (e += 6) : e >= 6 && e <= 17 ? ((t = !1), (e -= 6)) : (e -= 18);
  changedaynight(t);
  setcssposition(e);
  sun.style.left = csslistjson[e].leftcsslist + "%";
  sun.style.top = csslistjson[e].topcsslist + "%";
  sun.style.transform = "rotate(" + csslistjson[e].rotatecsslist + "deg)";
  moon.style.left = csslistjson[e].leftcsslist + "%";
  moon.style.top = csslistjson[e].topcsslist + "%";
  moon.style.transform = "rotate(" + csslistjson[e].rotatecsslist + "deg)";
};
const moonPhase = (e) => {
  var t = SunCalc.getMoonIllumination(e);
  var n = t.fraction;
  var shadowRadius = Math.abs(50 - 100 * n);
  setlsborderradius(shadowRadius + "%/50%");
  moonlight.style.borderRadius = shadowRadius + "%/50%";
  moonshadow.style.borderRadius = shadowRadius + "%/50%";
  body.classList.add("sky-gradient-" + e.getHours());
  body.classList.remove("sky-gradient-" + (e.getHours() - 1));
};
var toggled = false;
const settoggled = (e) => {
  toggled = e;
  if (e) {
    pagetoggled.classList.add("toggled");
    overlayopen.classList.add("open");
  } else {
    pagetoggled.classList.remove("toggled");
    overlayopen.classList.remove("open");
  }
};
const options = [
  {
    head: "Porfolio",
    body: [
      {
        link: "api/social/",
        icon: "tkd11-social-media-marketing",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Social Media",
      },
      {
        link: "api/detail/",
        icon: "tkd10-personal-details",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Detail",
      },
      {
        link: "api/education/",
        icon: "tkd8-conference-education",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Education",
      },
      {
        link: "api/service/",
        icon: "tkd1-carService_icons-05",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Service",
      },
      {
        link: "api/skills/",
        icon: "tkd11-skills",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Skills",
      },
      {
        link: "api/internship/",
        icon: "tkd8-computer-internet-man",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Internship",
      },
      {
        link: "api/licensecertification/",
        icon: "tkd2-seo-reward-license-certificate-contract",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "LicenseCertification",
      },
      {
        link: "api/tkdlanguage/",
        icon: "tkd4-iconmonstr-language-11",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Language",
      },
      {
        link: "api/knowleges/",
        icon: "tkd9-knowledge",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Knowleges",
      },
      {
        link: "api/projects/",
        icon: "tkd10-project-work",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Projects",
      },
      {
        link: "api/friends/",
        icon: "tkd6-three-friends",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Friends",
      },
      {
        link: "api/icons/",
        icon: "tkd3-retro_icons-13",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Icons",
      },
      {
        link: "api/music/",
        icon: "tkd10-music-note",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Music",
      },
      {
        link: "api/language/",
        icon: "tkd9-language-translator",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Language",
      },
      {
        link: "api/currentacy/",
        icon: "tkd8-currency-exchange",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Currentacy",
      },
      {
        link: "api/continent/",
        icon: "tkd6-earth-asia-oceania",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Continent",
      },
      {
        link: "api/country/",
        icon: "tkd3-earth",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Country",
      },
      {
        link: "api/state/",
        icon: "tkd6-earth-africa-europe",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "State",
      },
      {
        link: "api/passwordjson/",
        icon: "tkd6-earth-africa-europe",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Password Json",
      },
      {
        link: "api/addprojects/",
        icon: "tkd10-project-work",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "addprojects",
      },
      {
        link: "api/addservice/",
        icon: "tkd1-carService_icons-05",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "addservice",
      },
      {
        link: "api/addskills/",
        icon: "tkd11-skills",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "addskills",
      },
    ],
  },
  {
    head: "Password",
    body: [
      {
        link: "public/api/password.html",
        icon: "tkd11-social-media-marketing",
        title: "Use this CSS3 box shadow generator to quickly generate box shadow CSS for your project.",
        head: "Password",
      },
    ],
  },
];
const setProject = async () => {
  let response = await fetch("api/projects/", { method: "GET", });
  let data = await response.json();
  var temp = [];
  for (var i = 0; i < data.length; i++) {
    var tempdata = {};
    tempdata.link = data[i].link;
    tempdata.img = data[i].myprojectpic;
    tempdata.title = data[i].desc;
    tempdata.head = data[i].name;
    tempdata.type = data[i].category;
    temp.push(tempdata);
  }
  options.push({head: "Project",body: temp.filter(function (x) {if (x.type == 'project'){return x;}}),})
  options.push({head: "Software",body: temp.filter(function (x) {if (x.type == 'software'){return x;}}),})
  options.push({head: "Game",body: temp.filter(function (x) {if (x.type == 'game'){return x;}}),})
  options.push({head: "Website",body: temp.filter(function (x) {if (x.type == 'website'){return x;}}),})
};
const setState = async () => {
  let response = await fetch("api/country/", { method: "GET", });
  let data = await response.json();
  var temp = [];
  for (var i = 0; i < data.length; i++) {
    var tempdata = {};
    tempdata.link = `api/state/${data[i].name}`;
    tempdata.img = `//koushikchandrasaha.thekoushikdurgas.in/svg/coreui_icons/flag/cif-${data[i].value.toLowerCase()}.svg`;
    tempdata.title = data[i].desc;
    tempdata.head = data[i].name;
    temp.push(tempdata);
  }
  options.push({head: "State",body: temp})
};
const Initialization = async () => {
  await setProject();
  await setState();
  var temp = "";
  for (var i = 0; i < options.length; i++) {
    temp += `<div class="content-section-title">${options[i].head}</div><ul>`;
    for (var j = 0; j < options[i].body.length; j++) {
      if (options[i].body[j].icon) {
        temp += `<li class="adobe-product"><div class="products"><i class="${options[i].body[j].icon}"></i><span>${options[i].body[j].head}</span></div><span class="status"><span class="status-circle green"></span><span>online</span></span><div class="button-wrapper"><button class="content-button status-button open" onclick="location.assign('${options[i].body[j].link}');">Open</button></div></li>`;
      } else {
        temp += `<li class="adobe-product"><div class="products"><img src="${options[i].body[j].img}"/><span>${options[i].body[j].head}</span></div><span class="status"><span class="status-circle green"></span><span>online</span></span><div class="button-wrapper"><button class="content-button status-button open" onclick="location.assign('${options[i].body[j].link}');">Open</button></div></li>`;
      }
    }
    temp += "</ul>";
  }
  document.getElementById("contentsection1").innerHTML = temp;
};
// frist  run

setTimeout(() => {
  positionsunmoon();
}, 6e4);
positionsunmoon();
if (
  document.fullscreenElement ||
  document.webkitFullscreenElement ||
  document.mozFullScreenElement ||
  document.msFullscreenElement
) {
  fullscreenicon.classList.add("full");
  setFullscreen(true);
} else {
  fullscreenicon.classList.remove("full");
  setFullscreen(false);
}
const Initializationfrist = () => {
  // var keypassword = false;
  // let sign = prompt("password");
  // if (sign === "1234567890") {
  //   keypassword = true;
  // }
  // if(!keypassword){
  //   location.reload();
  // }
}