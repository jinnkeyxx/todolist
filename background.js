chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

    var audio = new Audio('heuse_zeus_x_crona_pill_feat_emma_sameth_ncs_release_295334.mp3');
    audio.play();
});
console.log('xxx')

// Play audio
// var x = document.getElementById("myAudio"); 
// var play = document.getElementById("play")
// var pause = document.getElementById("pause")

// play.onclick = function() {
//   console.log('play')
//   x.play()
// }

// pause.onclick = function() {
//   console.log('play')
//   x.pause()
// }