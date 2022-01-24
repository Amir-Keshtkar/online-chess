import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import * as serviceWorker from './serviceWorker';

import Game from './Components/Game.js'


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
