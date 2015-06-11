function getCookie(name) {
  return "mx7hjdgh454gd23ha43gsd11hg9ah0sdg";
}

function whenAvailable(objectName, callback) {
  var interval = setInterval(function () {
    var obj = window[objectName];

    if (typeof obj !== "undefined") {
      callback(obj);
      clearInterval(interval);
    }
  }, 10);
}