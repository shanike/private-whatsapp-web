const classNames = [
    "_11JPr", // message text
    "_37DQv", // quoted msg
    "_1bGUW", // arrow in message-box
    "y_sn4", // chat-title
    "_3g4Pn", // profiles
    "Hy9nV", // recent-msg
    "lhggkp7q", // single chat
    "vQ0w7", // recent-msg container
]

const dontExist = [];
classNames.forEach(c => {
    const elems = document.getElementsByClassName(c);
    console.log("class: ", c, elems);
    if (!elems.length) dontExist.push(c);
})

console.log("classes that don't exist: ", dontExist);