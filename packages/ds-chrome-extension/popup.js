function highlightLayoutComponents() {
  console.log('layout');
  const components = document.querySelectorAll('.ssc-ds-layout');

  components.forEach((component)=>{
    component.style.outline=`2px solid rgba(255, 0, 255,0.5)`;
  })
}

function highlightFunctionalComponents() {
  console.log('functional');
  const components = document.querySelectorAll('.ssc-ds-component');
  console.log(components);

  components.forEach((component)=>{
    component.style.outline=`2px solid rgba(173, 255, 47,0.8)`;
    component.style.backgroundColor=`rgba(173, 255, 47,0.5)`;
  })
}

function highlightTypographyComponents() {
  console.log('typography');
  const components = document.querySelectorAll('.ssc-ds-typography');
  console.log(components);

  components.forEach((component)=>{
    component.style.color=`red`;
  })
}

function resetHighlight() {
  const components = document.querySelectorAll('.ssc-ds-layout, .ssc-ds-component, .ssc-ds-typography');

  components.forEach((component)=>{
    component.style.removeProperty('outline');
    component.style.removeProperty('background-color');
    component.style.removeProperty('color');
  })
}

const layoutComponentsButton = document.getElementById('mark-layout');
const functionalComponentsButton = document.getElementById('mark-components');
const typographyComponentsButton = document.getElementById('mark-text');
const resetButton= document.getElementById('reset-all');

layoutComponentsButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: highlightLayoutComponents,
  });
});

functionalComponentsButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: highlightFunctionalComponents,
  });
});

typographyComponentsButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: highlightTypographyComponents,
  });
});

resetButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: resetHighlight,
  });
});


