//chrome

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
        console.log("Tab URL:", tab.url); // Log the URL for debugging
        chrome.scripting
            .executeScript({
                target: { tabId },
                files: ["./content.js"]
            })
            .then(() => {
                console.log("Content script injected successfully");
            })
            .catch(err => console.log(err, "error in background script line 10"));
    }
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "request recording") {
        // Handle the message and initiate recording
        console.log("Recording requested");
        // ...
    } else if (message.action === "stopvideo") {
        // Handle the message to stop recording
        console.log("Stop recording requested");
        // ...
    }
});

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
//     if(changeInfo.status === "complete" && /^http/.test(tab.url)){
//         chrome.scripting.executeScript({
//             target: {tabId},
//             files: ["./content.js"]
//         }).then(()=>{
//             console.log("we have injected the content script")
//         }).catch(err=> console.log(err, "error in background script line 10"))
//     }
// })