// popup.js
function listenClick() {
  const button = document.getElementById('send-data');
  button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/send-data.js'
    });
  })
}

function listenClickOnChangeBackground() {
  const button = document.getElementById('change-background-color');
  button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/change-background-color.js'
    });
  })
}


listenClick();
listenClickOnChangeBackground();
