require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()

import "../css/application.scss";

document.addEventListener("turbolinks:load", function() {
  function followCursor() {
    const cursor = document.getElementById("main-cursor");
    const followCursor = document.getElementById("follow-cursor");

    document.addEventListener("mousemove", function(event) {
      const {
        pageX: posX,
        pageY: posY
      } = event;
      cursor.style.left = `${posX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${posY - cursor.offsetHeight / 2}px`;
      followCursor.style.left = `${posX - followCursor.offsetWidth / 2}px`;
      followCursor.style.top = `${posY - followCursor.offsetHeight / 2}px`;
    });
  }

  followCursor();
});