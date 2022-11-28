const classNames = [
    "_1Gy50", // message text
    "eWQsx", // quoted msg
    "_2copG", // arrow in message-box
    "_1UyGr", // arrow in message-box
    "ldL67",
    "_2i3T7",
    "_1KDb8",
    "_3vPI2", // chat-title
    "_2EU3r", // profiles
    "_1qB8f", // recent-msg
    "_2nY6U", // single chat
    "_37FrU", // recent-msg
]

const dontExist = [];
classNames.forEach(c => {
    const elems = document.getElementsByClassName(c);
    console.log("class: ", c, elems);
    if (!elems.length) dontExist.push(c);
})

console.log("classes that don't exist: ", dontExist);