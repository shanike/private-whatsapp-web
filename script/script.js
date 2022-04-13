// set interval and clear it when WhatsApp finally loaded all elements to the DOM...
// this function added on on-click functionality of hiding/revealing the chat list content.

const HideClassName = "hide";
const BtnId = "chrome_extension_privateWhatsApp__btn"; // used in popup.js too! (and in script.css obviously)

const headerClickIntervalId = setInterval(() => {
    const header = document.querySelectorAll('header')[0];
    if (!header) {
        return;
    }

    header.style.alignItems = "center";
    const secretBtn = document.createElement('button'); // button from extension to hide/reveal chat list content

    secretBtn.textContent = "secret button";
    secretBtn.id = BtnId;
    chrome.storage.sync.get(({ autoHideButton }) => {
        if (autoHideButton) {
            setTimeout(() => secretBtn.classList.add('auto-hide'), 100);
        }
        else secretBtn.classList.remove('auto-hide');
        header.insertBefore(secretBtn, header.children[1])
    })

    const side = document.querySelectorAll('#side');
    secretBtn.onclick = () => {
        side[0]?.classList.toggle(HideClassName)
    }

    clearInterval(headerClickIntervalId)
}, 100);
