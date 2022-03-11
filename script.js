// set interval and clear it when WhatsApp finally loaded all elements to the DOM...
// this function added on on-click functionality of hiding/revealing the chat list content.

const hideClassName = "hide";
const btnId = "chrome_extension_privateWhatsApp__btn";

const headerClickIntervalId = setInterval(() => {
    const header = document.querySelectorAll('header')[0];
    if (!header) {
        return;
    }

    header.style.alignItems = "center";
    const myBtn = document.createElement('button'); // button from extension to hide/reveal chat list content

    myBtn.textContent = "secret button";
    myBtn.id = btnId;
    header.appendChild(myBtn)

    const side = document.querySelectorAll('#side');
    myBtn.onclick = () => {
        side[0]?.classList.toggle(hideClassName)
    }

    clearInterval(headerClickIntervalId)
}, 100);
