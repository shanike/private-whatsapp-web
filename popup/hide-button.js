const hideBtn = document.querySelectorAll('#hide-button--input')[0];

// set to user's setting
chrome.storage.sync.get(({ autoHideButton }) => {
    hideBtn.checked = autoHideButton;
})

hideBtn.onclick = (ev) => {
    const checked = ev?.target?.checked;
    if (!isBool(checked)) {
        console.log("error, event is: ", ev);
        return
    }

    chrome.storage.sync.set({ autoHideButton: checked });
    updateAutoHide();
}

function isBool(val) {
    return val === false || val === true;
}

async function updateAutoHide() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function:
            () => {
                chrome.storage.sync.get(({ autoHideButton }) => {
                    const secretBtn = document.getElementById('chrome_extension_privateWhatsApp__btn');
                    if (autoHideButton) {
                        secretBtn.classList.add('auto-hide');
                    }
                    else {
                        secretBtn.classList.remove('auto-hide');
                    }
                })
            },
    });
};
