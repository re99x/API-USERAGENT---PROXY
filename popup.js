document.getElementById('deleteActivities').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: deleteActivity
    });
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
