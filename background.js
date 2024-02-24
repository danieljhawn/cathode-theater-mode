function theatreMode() {
  // Get the reference to the body element
  let body = document.body;

  // Get all child elements of the body
  let children = body.children;

  // Convert the HTMLCollection to an array for easier manipulation
  let childrenArray = Array.from(children);

  // Iterate over each child element
  childrenArray.forEach(function (child) {
    // Check if the element is not the wrapper div
    if (child.className !== "wrapper") {
      // If not, remove it from the DOM
      body.removeChild(child);
    }
    const leftWindow = document.getElementById("leftWindow");
    if (leftWindow) {
      // Remove the element from the DOM
      leftWindow.parentNode.removeChild(element);
    }

  });

  // Get references to the video and chat window iframes
  const videoIframe = document.querySelector('iframe[src*="ok.ru"]');
  const chatIframe = document.querySelector('iframe[src*="minnit.chat"]');

  function resizeIframes() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calculate the width of the video iframe to fill 70% of the screen width
    const videoWidth = screenWidth * 0.7; // 70% of the screen width
    videoIframe.style.width = videoWidth + 'px';

    // Calculate the height of the video iframe to fill the screen height
    const videoHeight = screenHeight;
    videoIframe.style.height = videoHeight + 'px';

    // Calculate the width of the chat iframe to fill the remaining space
    const chatWidth = screenWidth - videoWidth; // Remaining space after allocating 70% to the video
    chatIframe.style.width = chatWidth + 'px';

    // Set the height of the chat iframe to fill the entire window height
    chatIframe.style.height = screenHeight + 'px';

    // Position the chat iframe to the right of the video iframe
    chatIframe.style.position = 'absolute';
    chatIframe.style.top = '0';
    chatIframe.style.left = videoWidth + 'px';
  }

  // Call the resizeIframes function initially to set the initial width
  resizeIframes();

  // Listen for window resize events and call resizeIframes function
  window.addEventListener('resize', resizeIframes);

}

// Get a reference to the "activeChat" div


chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: theatreMode
  });
});
