const hideChatTitleTooBtn = document.querySelectorAll('#hide-chat-title-too--input')[0];

// set to user's setting
chrome.storage.sync.get(({ hideChatTitleToo }) => {
    hideChatTitleTooBtn.checked = hideChatTitleToo;
})

hideChatTitleTooBtn.onclick = (ev) => {
    const checked = ev?.target?.checked;
    if (!isBool(checked)) {
        console.log("error, hideChatTitleTooBtn on click event is: ", ev);
        return
    }

    chrome.storage.sync.set({ hideChatTitleToo: checked });
    updateHideTitleToo();
}

function isBool(val) {
    return val === false || val === true;
}

async function updateHideTitleToo() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function:
            () => {
                const HideChatTitleTooClassName = "hide-chat-title-too";
                chrome.storage.sync.get(({ hideChatTitleToo }) => {
                    const side = document.querySelectorAll('#side')[0];
                    if (hideChatTitleToo) {
                        side?.classList.add(HideChatTitleTooClassName);
                    }
                    else {
                        side?.classList.remove(HideChatTitleTooClassName);
                    }
                })
            },
    });
};

