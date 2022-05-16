const blurConversationBtn = document.querySelectorAll('#blur-conversations--input')[0];

// set to user's setting
chrome.storage.sync.get(({ blurConversation }) => {
    blurConversationBtn.checked = blurConversation;
})

blurConversationBtn.onclick = (ev) => {
    const checked = ev?.target?.checked;
    if (!isBool(checked)) {
        console.log("error, event is: ", ev);
        return
    }

    chrome.storage.sync.set({ blurConversation: checked });
    updateBlurConversation();
}

function isBool(val) {
    return val === false || val === true;
}

async function updateBlurConversation() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function:
            () => {
                chrome.storage.sync.get(({ blurConversation }) => {
                    if (blurConversation) {
                        document.body.classList.add('blur-conversations');
                    }
                    else {
                        document.body.classList.remove('blur-conversations');
                    }
                })
            },
    });
};
