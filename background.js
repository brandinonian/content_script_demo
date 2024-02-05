
function alertUrlError() {
    alert('This only works on xkcd sites.');
}

function getCtitle() {

    const ctitle_div = document.getElementById('ctitle');

    if (!ctitle_div) {
        alert('Error: Failed to retrieve ctitle.');
        return;
    }

    const ctitle = ctitle_div.innerText;

    if (!ctitle) {
        alert('Error: No ctitle...');
        return;
    }

    alert(`Ctitle: ${ctitle}`);

}

chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes('xkcd')) {

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: getCtitle,
        });

    }
    else {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: alertUrlError,
        });
    }
});