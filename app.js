var App = {
  init: function (options) {
    var el = document.getElementById(options.containerID);
    el.innerHTML = "It works! " + options.sessionToken;
  }
};