'use strict';

import { start } from './components/start';
import { header } from './components/header';
import { cards } from './components/cards';
import { modal } from './components/modal';

window.addEventListener('DOMContentLoaded', () => {

  //Start Animation
  start();

  //Header
  header();

  //Cards
  cards();

  //Modal
  modal();

});


