const defaultHideBtn = document.querySelectorAll('#default-hide--input')[0];

// set to user's setting
chrome.storage.sync.get(({ defaultHide }) => {
    defaultHideBtn.checked = defaultHide;
})

defaultHideBtn.onclick = (ev) => {
    const checked = ev?.target?.checked;
    if (!isBool(checked)) {
        console.log("error, event is: ", ev);
        return
    }

    chrome.storage.sync.set({ defaultHide: checked });
}

function isBool(val) {
    return val === false || val === true;
}
