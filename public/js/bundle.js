/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name_j1", function() { return name_j1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name_j2", function() { return name_j2; });
/* harmony import */ var _js_genGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 //Demander le nom des joueurs

var name_j1 = prompt("Entrez le nom du joueur 1 : ");
var name_j2 = prompt("Entrez le nom du joueur 2 : ");

if (!name_j1 || name_j1 === "") {
  name_j1 = "Joueur 1";
}

if (!name_j2 || name_j2 === "") {
  name_j2 = "Joueur 2";
}


 //Insérer la grille dans le HTML

/*$(document).ready(function() {
    let grid = new GenGrid(10, 10);
    grid.createGrid();
}
);*/

var grid = new _js_genGrid__WEBPACK_IMPORTED_MODULE_0__["GenGrid"](10, 10);
grid.createGrid(); //cd /c/Users/User/Desktop/OPENCLASSROOMS/p6_jeu

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenGrid", function() { return GenGrid; });
/* harmony import */ var _js_weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _js_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _js_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 //import {Cell} from "./cell";

var GenGrid =
/*#__PURE__*/
function () {
  function GenGrid(row, column) {
    _classCallCheck(this, GenGrid);

    this.row = row;
    this.column = column;
    this.board = document.getElementById("board");
    this.gridLength = this.row * this.column;
  }

  _createClass(GenGrid, [{
    key: "createGrid",
    value: function createGrid() {
      var _this = this;

      var table = document.createElement('table');
      var tbody = document.createElement('tbody');
      var move = new _js_move__WEBPACK_IMPORTED_MODULE_2__["Move"]();
      var player = new _js_player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
      this.playerTab = player.getPlayerTab();
      table.setAttribute("class", "center");
      table.appendChild(tbody);

      for (var i = 0; i < this.row; i++) {
        var tr = document.createElement('tr');
        tr.setAttribute("class", "tdstyle");
        tbody.appendChild(tr);

        var _loop = function _loop(j) {
          var td = document.createElement('td');
          td.setAttribute("class", "tdstyle");
          td.setAttribute("data-x", j);
          td.setAttribute("data-y", i);
          td.id = "td-" + i + j;
          td.addEventListener('click', function () {
            if (td.dataset.playeraccess === "1") {
              _this.playerTab = move.move(td.id, _this.playerTab);
            }
          });
          tr.appendChild(td);
        };

        for (var j = 0; j < this.column; j++) {
          _loop(j);
        }
      }

      this.board.appendChild(table);
      this.createMovement();
      this.createNoAccess();
      this.createWeapon();
      this.playerTab[0].move = true;
    }
  }, {
    key: "getRandomCell",
    value: function getRandomCell() {
      var randomInt = 0;
      var id = null;
      var cell = null;

      for (var i = 0; i < this.gridLength; i++) {
        randomInt = Math.floor(Math.random() * this.gridLength);

        if (randomInt < 10) {
          id = 'td-0';
        } else {
          id = 'td-';
        }

        cell = document.getElementById(id + randomInt);

        while (cell.hasAttribute("data-access") || cell.hasAttribute("data-weapon") || cell.hasAttribute("data-player")) {
          randomInt = Math.floor(Math.random() * this.gridLength);

          if (randomInt < 10) {
            id = 'td-0';
          } else {
            id = 'td-';
          }

          cell = document.getElementById(id + randomInt);
        }
      }

      return cell;
    }
  }, {
    key: "createNoAccess",
    value: function createNoAccess() {
      var idNoAccess = null;
      var cellPlayer = [];
      var cell = document.getElementsByTagName("td"); //Look for the players' positions and add them in a tab

      for (var j = 0; j < cell.length; j++) {
        if (cell[j].hasAttribute("data-player")) {
          cellPlayer.push(cell[j]);
        }
      }

      for (var i = 0; i < 25; i++) {
        idNoAccess = this.getRandomCell(); //Avoid no access cells around player so that he's not blocked in a corner

        while (idNoAccess.dataset.x === cellPlayer[0].dataset.x || idNoAccess.dataset.x === cellPlayer[1].dataset.x || idNoAccess.dataset.y === cellPlayer[0].dataset.y || idNoAccess.dataset.y === cellPlayer[1].dataset.y) {
          idNoAccess = this.getRandomCell();
        }

        idNoAccess.style.backgroundColor = 'black';
        idNoAccess.setAttribute('data-access', 0);
      }
    }
  }, {
    key: "createWeapon",
    value: function createWeapon() {
      var cellWeapon = null;
      var weapon = new _js_weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"](); //let weapon = new Weapon();
      //let Cell = new Cell('data-access', null, null);

      for (var i = 0; i < 8; i++) {
        var randomWeapon = weapon.getRandomWeapon();
        cellWeapon = this.getRandomCell();
        cellWeapon.setAttribute('data-weapon', randomWeapon);
      }
    } //TODO: avoid 2 players on the same X or Y

  }, {
    key: "createPlayer",
    value: function createPlayer() {
      var playerCellTab = [];

      for (var i = 0; i < 2; i++) {
        var cellPlayer = this.getRandomCell();
        playerCellTab.push(cellPlayer);
        /*while (document.getElementById(playerCellTab[0]).x === document.getElementById(playerCellTab[1]).x || document.getElementById(playerCellTab[0]).y === document.getElementById(playerCellTab[1]).y) {
            cellPlayer = this.getRandomCell();
        }*/

        this.playerTab[i].position = cellPlayer.id;
        cellPlayer.setAttribute('data-player', this.playerTab[i].id);
      }

      return this.playerTab;
    }
  }, {
    key: "createMovement",
    value: function createMovement() {
      var move = new _js_move__WEBPACK_IMPORTED_MODULE_2__["Move"]();
      var newPlayer = this.createPlayer();
      move.availableMove(newPlayer);
    }
  }]);

  return GenGrid;
}();



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Weapon =
/*#__PURE__*/
function () {
  function Weapon() {
    _classCallCheck(this, Weapon);

    this.weaponTab = [{
      "name": "bow",
      "damage": "5"
    }, {
      "name": "knife",
      "damage": "10"
    }, {
      "name": "sword",
      "damage": "15"
    }, {
      "name": "pistol",
      "damage": "20"
    }, {
      "name": "dynamite",
      "damage": "25"
    }, {
      "name": "bomb",
      "damage": "30"
    }];
  }

  _createClass(Weapon, [{
    key: "getRandomWeapon",
    value: function getRandomWeapon() {
      var randomInt = 0;

      for (var i = 0; i < this.weaponTab.length; i++) {
        randomInt = Math.floor(Math.random() * this.weaponTab.length);
      }

      return this.weaponTab[randomInt].name;
    }
    /*getWeaponTab() {
      return this.weaponTab
    }*/

  }, {
    key: "getWeaponDamage",
    value: function getWeaponDamage() {
      return this.weaponTab[name].damage;
    }
  }]);

  return Weapon;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Player =
/*#__PURE__*/
function () {
  function Player() {
    _classCallCheck(this, Player);

    this.name = null;
    this.life = 100;
    this.weapon = null;
    this.position = null;
    this.move = false;
    this.playerTab = [{
      "id": "player1",
      "name": _index__WEBPACK_IMPORTED_MODULE_0__["name_j1"],
      "life": this.life,
      "weapon": this.weapon,
      "position": this.position,
      "move": true,
      "countMove": 0
    }, {
      "id": "player2",
      "name": _index__WEBPACK_IMPORTED_MODULE_0__["name_j2"],
      "life": this.life,
      "weapon": this.weapon,
      "position": this.position,
      "move": this.move,
      "countMove": 0
    }];
  }

  _createClass(Player, [{
    key: "getPlayerTab",
    value: function getPlayerTab() {
      return this.playerTab;
    }
  }, {
    key: "allowMove",
    value: function allowMove(playerTab) {
      if (playerTab[0].move === true) {
        playerTab[0].move = false;
        playerTab[1].move = true;
      } else if (playerTab[1].move === true) {
        playerTab[1].move = false;
        playerTab[0].move = true;
      }

      return playerTab;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getLife",
    value: function getLife() {
      return this.life;
    }
  }, {
    key: "getWeapon",
    value: function getWeapon() {
      return this.weapon;
    }
  }, {
    key: "getMove",
    value: function getMove() {
      return this.move;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "increaseLife",
    value: function increaseLife(points) {
      this.life += points;
      return this.life;
    }
  }, {
    key: "decreaseLife",
    value: function decreaseLife(damage) {
      this.life -= damage;
      return this.life;
    }
  }]);

  return Player;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Move", function() { return Move; });
/* harmony import */ var _js_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Move =
/*#__PURE__*/
function () {
  function Move() {
    _classCallCheck(this, Move);
  }

  _createClass(Move, [{
    key: "availableMove",
    //TODO: change weapon images to png (to have grey background when accessible)
    //TODO: no access after obstacles
    value: function availableMove(playerTab) {
      var td = null;
      var availableCell = null;

      for (var i = 0; i < playerTab.length; i++) {
        var playerCell = document.getElementById(playerTab[i].position);

        for (var browseCells = 0; browseCells < 100; browseCells++) {
          if (browseCells < 10) {
            td = 'td-0';
          } else {
            td = 'td-';
          }

          availableCell = document.getElementById(td + browseCells);

          if (playerCell.dataset.y === availableCell.dataset.y && availableCell.dataset.x >= Number(playerCell.dataset.x) - 3 && availableCell.dataset.x <= Number(playerCell.dataset.x) + 3 && availableCell.dataset.x !== playerCell.dataset.x && !availableCell.hasAttribute('data-access') || playerCell.dataset.x === availableCell.dataset.x && availableCell.dataset.y >= Number(playerCell.dataset.y) - 3 && availableCell.dataset.y <= Number(playerCell.dataset.y) + 3 && availableCell.dataset.y !== playerCell.dataset.y && !availableCell.hasAttribute('data-access')) {
            availableCell.setAttribute('data-playeraccess', 1);
          }
        }
      }
    }
  }, {
    key: "move",
    value: function move(cellId, playerTab) {
      var player = null;
      var currentCell = null;

      for (var i = 0; i < playerTab.length; i++) {
        if (playerTab[i].move === true) {
          player = playerTab[i];
        }

        currentCell = document.getElementById(playerTab[i].position);
      }

      var nextCell = document.getElementById(cellId);
      this.playerMove(nextCell, currentCell, player, playerTab);
      console.log(player);
      console.log(playerTab);
      return playerTab;
    }
  }, {
    key: "playerMove",
    value: function playerMove(nextCell, currentCell, player, playerTab) {
      var newPlayer = new _js_player__WEBPACK_IMPORTED_MODULE_0__["Player"]();

      if (nextCell.dataset.playeraccess === "1" && nextCell.id !== currentCell.id) {
        //Update player position
        nextCell.setAttribute('data-player', player.id);
        player.position = nextCell.id;
        player.countMove++; //Remove last position

        currentCell.removeAttribute('data-player');

        if (player.move === true) {
          newPlayer.allowMove(playerTab);
        }

        return true;
      }

      return false;
    }
  }]);

  return Move;
}();



/***/ })
/******/ ]);