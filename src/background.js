chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      code: 'Array.from(document.querySelectorAll("img")).forEach(img => img.remove())'
    });
  });