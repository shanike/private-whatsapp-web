// set interval and clear it when WhatsApp finally loaded all elements to the DOM...
// this function added on on-click functionality of hiding/revealing the chat list content.

const HideClassName = "hide";
const BtnId = "chrome_extension_privateWhatsApp__btn"; // used in popup/*.js too! (and in script.css obviously)
const OptionsClassNames = {
    AutoHide: "auto-hide",
    HideChatTitleToo: "hide-chat-title-too",
}

const headerClickIntervalId = setInterval(() => {
    const header = document.querySelectorAll('header')[0];
    const side = document.querySelectorAll('#side')[0];
    if (!header || !side) {
        return; // waiting for interval
    }

    header.style.alignItems = "center";
    const secretBtn = document.createElement('button'); // button from extension to hide/reveal chat list content

    secretBtn.textContent = "secret button";
    secretBtn.id = BtnId;
    chrome.storage.sync.get(({ autoHideButton, hideChatTitleToo }) => {
        // Auto Hide Button
        if (autoHideButton) {
            setTimeout(() => secretBtn.classList.add(OptionsClassNames.AutoHide), 100);
        }
        else secretBtn.classList.remove(OptionsClassNames.AutoHide);
        // Hide Chat Title Too
        if (hideChatTitleToo) {
            setTimeout(() => side.classList.add(OptionsClassNames.HideChatTitleToo), 100);
        }
        else side.classList.remove(OptionsClassNames.HideChatTitleToo);

        header.insertBefore(secretBtn, header.children[1])
    })

    secretBtn.onclick = () => {
        side.classList.toggle(HideClassName)
    }

    clearInterval(headerClickIntervalId)
}, 100);
