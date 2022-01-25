import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Game from './Components/Game.js'
import './Components/Style.css';





ReactDOM.render(
  <Fragment>
    <Game />
    <div class="main-container">
          <h2 class="app-title">The Messenger</h2>
          <div class="room-window">
            <div class="room-text" id="room"></div>
            <div class="room-feedback" id="feedback">status</div>
          </div>
          <input class="text-user" type="text" id="user" placeholder="username" />
          <input
            class="text-message"
            type="text"
            id="message"
            placeholder="message"
          />
          <button class="send-btn" id="send">Send</button>
        </div>
        <script src="./Components/chat.js"></script>
  </Fragment>,
  document.getElementById('root')
);
