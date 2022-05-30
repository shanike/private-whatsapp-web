// set interval and clear it when WhatsApp finally loaded all elements to the DOM...
// this function added on on-click functionality of hiding/revealing the chat list content.

const HideClassName = "hide";
const BtnId = "chrome_extension_privateWhatsApp__btn"; // used in popup/*.js too! (and in script.css obviously)
const OptionsClassNames = {
    AutoHide: "auto-hide",
    HideChatTitleToo: "hide-chat-title-too",
    blurConversations: "blur-conversations"
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
    chrome.storage.sync.get(({ autoHideButton, hideChatTitleToo, blurConversation, defaultHide }) => {
        // Auto Hide Button
        if (autoHideButton) {
            setTimeout(() => secretBtn.classList.add(OptionsClassNames.AutoHide), 100);
        }
        else secretBtn.classList.remove(OptionsClassNames.AutoHide);
        header.insertBefore(secretBtn, header.children[1])

        // Hide Chat Title Too
        if (hideChatTitleToo) {
            setTimeout(() => side.classList.add(OptionsClassNames.HideChatTitleToo), 100);
        }
        else side.classList.remove(OptionsClassNames.HideChatTitleToo);

        // Blur Conversation
        if (blurConversation) {
            setTimeout(() => document.body.classList.add(OptionsClassNames.blurConversations), 100);
        }
        else document.body.classList.remove(OptionsClassNames.blurConversations)

        // Default Hide
        if (defaultHide) {
            side.classList.add(HideClassName);
        }
    })

    secretBtn.onclick = () => {
        side.classList.toggle(HideClassName)
    }

    clearInterval(headerClickIntervalId)
}, 100);


// * not in use
// const blurChatInterval = setInterval(() => {
//     const el = document.querySelectorAll('header ._1yNrt ._1QVfy')[0];
//     const blurChatBtn = document.createElement('button');
//     blurChatBtn.id = "chrome_extension_privateWhatsApp__blur-chat-button";
//     blurChatBtn.textContent = "hide messages";
//     el.appendChild(blurChatBtn);
//     clearInterval(blurChatInterval);
// }, 100);
