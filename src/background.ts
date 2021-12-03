// This file is ran as a background script
console.log("Hello from background script!");

chrome.runtime.onInstalled.addListener(()=>{
    console.log("Just Installed");
});