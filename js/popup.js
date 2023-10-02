document.addEventListener("DOMContentLoaded", () => {
  const startVideoButton = document.querySelector("button#start_video");
  const stopVideoButton = document.querySelector("button#stop_video");

  startVideoButton.addEventListener("click", () =>{
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(
              tabs[0].id,
              { action: "request_recording" },
              function (response) {
                  if (!chrome.runtime.lastError) {
                      console.log(response);
                  } else {
                      console.log(chrome.runtime.lastError, 'error line 14');
                  }
              }
          );
      });
  });


  stopVideoButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { action: "stopvideo" },
            function (response) {
                if (!chrome.runtime.lastError) {
                    console.log(response);
                } else {
                    console.log(chrome.runtime.lastError, 'error line 27');
                }
            }
        );
    });
});


document.getElementById('requestMicrophonePermission').addEventListener('click', function() {
    chrome.permissions.request({
      permissions: ['audioCapture']
    }, function(granted) {
      if (granted) {
        // Permission granted, you can now access the microphone
        console.log('Microphone permission granted.');
      } else {
        // Permission denied
        console.log('Microphone permission denied.');
      }
    });
  });


});
