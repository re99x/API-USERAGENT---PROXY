chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: deleteActivity
  });
});

function deleteActivity() {
  const deleteButtons = Array.from(document.querySelectorAll('span')).filter(span => span.textContent.includes("Hapus"));
  deleteButtons.forEach(button => {
    button.click();
    setTimeout(() => {
      const confirmButton = Array.from(document.querySelectorAll('span')).find(span => span.textContent.includes("Hapus aktivitas"));
      if (confirmButton) {
        confirmButton.click();
      }
    }, 1000);
  });
}
