import Rails from "@rails/ujs";
import * as ActiveStorage from "@rails/activestorage";
import Turbolinks from "turbolinks";

import "../css/application.scss";
require.context("../images", true);


Rails.start();
ActiveStorage.start();
Turbolinks.start();

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