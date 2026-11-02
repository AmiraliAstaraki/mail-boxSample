// ___________header________________

let header = "Mailpage";
let heading = document.getElementById("heading");
heading.innerText = header;

// ________________main____________________

// ______!!____aside_______!!_________

// _______picture___________

let picw3s = (document.getElementById("picw3s").src = "images/w3schools.png");
picw3s.src = "images/w3schools.png";
picw3s.alt = "W3schools";
// picw3s.title="W3schools";


// ________________modal__________________

document.getElementById("modal").innerHTML = "New Message" + "<i class='bi bi-pen-fill'></i>";

// _____________acordionname_________________

let accordname = (document.querySelector("#accordn").innerHTML =
  "<i class='bi bi-inbox-fill me-2'></i>" + "Inbox (3)");

// _____________accordian members box_____________

// ____________inbox_________________

let mailboxone = [
  {
    pic: "../images/borge.png",
    name: "Borge Refsnes",
    subject: "Subject: Remember Me",
    para: "Hello, I just wanted to let you know that I'll be home at...",
  },
];

for (let i = 0; i < mailboxone.length; i++) {
  document.getElementById("picone").src = mailboxone[i].pic;
  document.getElementById("nameone").innerText = mailboxone[i].name;
  document.getElementById("subjectone").innerText = mailboxone[i].subject;
  document.getElementById("paraone").innerText = mailboxone[i].para;
}

let mailboxtwo = [
  {
    pic: "../images/jane.png",
    name: "Jane Doe",
    para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
  },
];

for (let i = 0; i < mailboxtwo.length; i++) {
  document.getElementById("pictwo").src = mailboxtwo[i].pic;
  document.getElementById("nametwo").innerText = mailboxtwo[i].name;
  document.getElementById("paratwo").innerText = mailboxtwo[i].para;
}

let mailboxthree = [
  {
    pic: "../images/john.png",
    name: "John Doe",
    para: "Welcome!",
  },
];

for (let i = 0; i < mailboxthree.length; i++) {
  document.getElementById("picthree").src = mailboxthree[i].pic;
  document.getElementById("namethree").innerText = mailboxthree[i].name;
  document.getElementById("parathree").innerText = mailboxthree[i].para;
}

// ______________sent______________

let mailboxfour = [
  {
    pic: "../images/borge.png",
    name: "Borge Refsnes",
    subject: "Subject: Remember Me",
    para: "Hello, I just wanted to let you know that I'll be home at...",
  },
];

for (let i = 0; i < mailboxfour.length; i++) {
  document.getElementById("picfour").src = mailboxfour[i].pic;
  document.getElementById("namefour").innerText = mailboxfour[i].name;
  document.getElementById("subjectfour").innerText = mailboxfour[i].subject;
  document.getElementById("parafour").innerText = mailboxfour[i].para;
}

// _________________drafts_________________

let mailboxfive = [
  {
    pic: "../images/jane.png",
    name: "Jane Doe",
    para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
  },
];

for (let i = 0; i < mailboxfive.length; i++) {
  document.getElementById("picfive").src = mailboxfive[i].pic;
  document.getElementById("namefive").innerText = mailboxfive[i].name;
  document.getElementById("parafive").innerText = mailboxfive[i].para;
}

// ________________trash_________________

let mailboxsix = [
  {
    pic: "../images/john.png",
    name: "John Doe",
    para: "Welcome!",
  },
];

for (let i = 0; i < mailboxsix.length; i++) {
  document.getElementById("picsix").src = mailboxsix[i].pic;
  document.getElementById("namesix").innerText = mailboxsix[i].name;
  document.getElementById("parasix").innerText = mailboxsix[i].para;
}

// _____!!______article___!!_________

// _____________accordian members mail_____________

let mailitems = [
  {
    photo: "images/borge.png",
    mailsubject: "Subject: Remember Me",
    date: "<i class='bi bi-clock'></i>" + " From Borge Refsnes, Sep 27, 2026.",
    reply: "Reply" + "<i class='bi bi-reply-fill'></i>",
    forward: "Forward" + "<i class='bi bi-forward-fill'></i>",
    parag:
      "Hello, I just wanted to let you know that I'll be home at lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    info: "Best Regards,Borge Refsnes",
  },

  {
    photo: "images/jane.png",
    mailsubject: "Subject: None",
    date: "<i class='bi bi-clock'></i>" + " From Jane Doe, Sep 25, 2026.",
    reply: "Reply" + "<i class='bi bi-reply-fill'></i>",
    forward: "Forward" + "<i class='bi bi-forward-fill'></i>",
    parag:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      desc:"",
    info: "Forever yours,Jane",
  },

  {
    photo: "images/john.png",
    mailsubject: "Subject: None",
    date: "<i class='bi bi-clock'></i>" + " From John Doe, Sep 23, 2026.",
    reply: "Reply" + "<i class='bi bi-reply-fill'></i>",
    forward: "Forward" + "<i class='bi bi-forward-fill'></i>",
    parag: "Welcome!",
    desc:"",
    info: "That's it!",
  },
];

function showmail(i) {
  document.getElementById("photo").src = mailitems[i].photo;
  document.getElementById("mailsubject").innerText = mailitems[i].mailsubject;
  document.getElementById("date").innerHTML = mailitems[i].date;
  document.getElementById("reply").innerHTML = mailitems[i].reply;
  document.getElementById("forward").innerHTML = mailitems[i].forward;
  document.getElementById("parag").innerText = mailitems[i].parag;
  document.getElementById("desc").innerText = mailitems[i].desc;
  document.getElementById("info").innerText = mailitems[i].info;
}

showmail(0);
