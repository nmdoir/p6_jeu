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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameJ1", function() { return nameJ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameJ2", function() { return nameJ2; });
/* harmony import */ var _js_genGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 //Demander le nom des joueurs

var nameJ1 = prompt("Entrez le nom du joueur 1 : ");
var nameJ2 = prompt("Entrez le nom du joueur 2 : "); //Leur donner un nom par défaut au cas où l'utilisateur n'entre rien

if (!nameJ1 || nameJ1 === "") {
  nameJ1 = "Joueur 1";
}

if (!nameJ2 || nameJ2 === "") {
  nameJ2 = "Joueur 2";
} //Afficher les noms des joueurs dans les blocs info


document.getElementById("namej1").innerHTML = nameJ1;
document.getElementById("namej2").innerHTML = nameJ2; //Box règles du jeu

var modal = document.getElementById("rulesModal");
var btn = document.getElementById("rulesBtn");
btn.addEventListener("click", function () {
  modal.style.display = "block";
});
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}); //On exporte les 2 variables noms des joueurs afin de les utiliser dans la classe Player


 //Insérer la grille dans le HTML

/*$(document).ready(function() {
    let grid = new GenGrid(10, 10);
    grid.createGrid();
}
);*/

var grid = new _js_genGrid__WEBPACK_IMPORTED_MODULE_0__["GenGrid"](10, 10);
grid.createGrid();

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
      this.playerTab[0].move = true;
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
              move.availableMove(_this.playerTab);

              _this.getPlayerInfo(_this.playerTab);
            }
          });
          tr.appendChild(td);
        };

        for (var j = 0; j < this.column; j++) {
          _loop(j);
        }
      }

      this.displayPlayerInfo();
      this.board.appendChild(table);
      this.createMovement();
      this.createNoAccess();
      this.createWeapon();
      this.playerTab[0].move = true;
      this.getPlayerInfo(this.playerTab);
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
    } //TODO: function can be improved?

  }, {
    key: "createPlayer",
    value: function createPlayer() {
      var cellPlayer0 = this.getRandomCell();
      this.playerTab[0].position = cellPlayer0.id;
      cellPlayer0.setAttribute('data-player', this.playerTab[0].id);
      var cellPlayer1 = this.getRandomCell(); //Avoid 2 players next to each other when initializing the grid

      while (Number(cellPlayer1.id.slice(3)) > Number(cellPlayer0.id.slice(3) - 12) && Number(cellPlayer1.id.slice(3)) < Number(cellPlayer0.id.slice(3) + 12)) {
        cellPlayer1 = this.getRandomCell();
      }

      this.playerTab[1].position = cellPlayer1.id;
      cellPlayer1.setAttribute('data-player', this.playerTab[1].id);
      return this.playerTab;
    }
  }, {
    key: "createMovement",
    value: function createMovement() {
      var move = new _js_move__WEBPACK_IMPORTED_MODULE_2__["Move"]();
      var newPlayer = this.createPlayer();
      move.availableMove(newPlayer);
    }
  }, {
    key: "getPlayerInfo",
    value: function getPlayerInfo(playerTab) {
      var weapon = new _js_weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"](); //Life

      document.getElementById('lifej1').innerHTML = playerTab[0].life;
      document.getElementById('lifej2').innerHTML = playerTab[1].life; //Weapon

      document.getElementById('weaponj1').innerHTML = weapon.getFrenchWeaponName(playerTab[0].weapon);
      document.getElementById('weaponj2').innerHTML = weapon.getFrenchWeaponName(playerTab[1].weapon); //Damage

      document.getElementById('damagej1').innerHTML = weapon.getWeaponDamage(playerTab[0].weapon);
      document.getElementById('damagej2').innerHTML = weapon.getWeaponDamage(playerTab[1].weapon);
    } //Afin que les blocs ne s'affichent pas en même temps que les prompts au moment du chargement de la page

  }, {
    key: "displayPlayerInfo",
    value: function displayPlayerInfo() {
      var div = document.getElementById('playerinfo');
      div.classList.remove('disable');
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
      "name": "knife",
      "damage": "10"
    }, {
      "name": "sword",
      "damage": "20"
    }, {
      "name": "pistol",
      "damage": "30"
    }, {
      "name": "dynamite",
      "damage": "40"
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
  }, {
    key: "getWeaponDamage",
    value: function getWeaponDamage(weapon) {
      for (var i = 0; i < this.weaponTab.length; i++) {
        if (this.weaponTab[i].name === weapon) {
          return this.weaponTab[i].damage;
        }
      }
    }
  }, {
    key: "getFrenchWeaponName",
    value: function getFrenchWeaponName(weapon) {
      var translationTab = {
        "knife": "Couteau",
        "sword": "Epée",
        "pistol": "Revolver",
        "dynamite": "Dynamite"
      };
      return translationTab[weapon];
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
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//On récupère les variables des noms des joueurs entrés par l'utilisateur




var Player =
/*#__PURE__*/
function () {
  function Player() {
    _classCallCheck(this, Player);

    this.name = null;
    this.life = 100;
    this.weapon = "knife";
    this.position = null;
    this.move = false;
    this.playerTab = [{
      "id": "player1",
      "name": _index__WEBPACK_IMPORTED_MODULE_0__["nameJ1"],
      "life": this.life,
      "weapon": this.weapon,
      "position": this.position,
      "move": this.move
    }, {
      "id": "player2",
      "name": _index__WEBPACK_IMPORTED_MODULE_0__["nameJ2"],
      "life": this.life,
      "weapon": this.weapon,
      "position": this.position,
      "move": this.move
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
    } //TODO: factoriser les addeventlisteners
    //Générer les boutons d'attaque et de défense pour démarrer le combat, en fonction du joueur dont c'est le tour

  }, {
    key: "allowFight",
    value: function allowFight(playerTab) {
      var _this = this;

      var buttonsj1 = document.getElementById('buttonsj1');
      buttonsj1.setAttribute('data-damage', 0);
      var buttonsj2 = document.getElementById('buttonsj2');
      buttonsj2.setAttribute('data-damage', 0);
      var buttonA1 = document.createElement('button');
      var buttonD1 = document.createElement('button');
      var buttonA2 = document.createElement('button');
      var buttonD2 = document.createElement('button');
      buttonA1.innerHTML = "Attaquer";
      buttonD1.innerHTML = "Défendre";
      buttonA2.innerHTML = "Attaquer";
      buttonD2.innerHTML = "Défendre"; //Générer les 4 boutons

      buttonsj1.appendChild(buttonA1).setAttribute('class', 'fightbtn attack btnj1');
      buttonsj1.appendChild(buttonD1).setAttribute('class', 'fightbtn defense btnj1');
      buttonsj2.appendChild(buttonA2).setAttribute('class', 'fightbtn attack btnj2');
      buttonsj2.appendChild(buttonD2).setAttribute('class', 'fightbtn defense btnj2'); //Masquer les boutons du joueur dont ce n'est pas le tour

      if (playerTab[0].move === true) {
        buttonsj2.setAttribute('class', 'disable');
      } else if (playerTab[1].move === true) {
        buttonsj1.setAttribute('class', 'disable');
      }

      var weapon = new _weapon__WEBPACK_IMPORTED_MODULE_1__["Weapon"]();
      buttonA1.addEventListener("click", function () {
        if (buttonsj1.dataset.damage > 0) {
          var attackerDamage = Number(buttonsj1.dataset.damage);
          playerTab[1].life -= attackerDamage;
          document.getElementById('lifej2').innerHTML = playerTab[1].life;
          buttonsj1.setAttribute('data-damage', 0);
        } else {
          var _attackerDamage = weapon.getWeaponDamage(playerTab[0].weapon);

          playerTab[1].life -= _attackerDamage;
          document.getElementById('lifej2').innerHTML = playerTab[1].life;
        }

        buttonsj2.classList.remove('disable');
        buttonsj1.setAttribute('class', 'disable');

        _this.allowMove(playerTab);

        _this.checkEnd(playerTab);
      });
      buttonD1.addEventListener("click", function () {
        var attackerDamage = Number(weapon.getWeaponDamage(playerTab[1].weapon) / 2);
        buttonsj2.setAttribute('data-damage', String(attackerDamage));
        buttonsj2.classList.remove('disable');
        buttonsj1.setAttribute('class', 'disable');

        _this.allowMove(playerTab);

        _this.checkEnd(playerTab);
      });
      buttonA2.addEventListener("click", function () {
        if (buttonsj2.dataset.damage > 0) {
          var attackerDamage = Number(buttonsj2.dataset.damage);
          playerTab[0].life -= attackerDamage;
          document.getElementById('lifej1').innerHTML = playerTab[0].life;
          buttonsj2.setAttribute('data-damage', 0);
        } else {
          var _attackerDamage2 = weapon.getWeaponDamage(playerTab[1].weapon);

          playerTab[0].life -= _attackerDamage2;
          document.getElementById('lifej1').innerHTML = playerTab[0].life;
        }

        buttonsj1.classList.remove('disable');
        buttonsj2.setAttribute('class', 'disable');

        _this.allowMove(playerTab);

        _this.checkEnd(playerTab);
      });
      buttonD2.addEventListener("click", function () {
        var attackerDamage = Number(weapon.getWeaponDamage(playerTab[0].weapon) / 2);
        buttonsj1.setAttribute('data-damage', String(attackerDamage));
        buttonsj1.classList.remove('disable');
        buttonsj2.setAttribute('class', 'disable');

        _this.allowMove(playerTab);

        _this.checkEnd(playerTab);
      });
    } //TODO: améliorer la fonction, factoriser

  }, {
    key: "checkEnd",
    value: function checkEnd(playerTab) {
      var box = document.getElementById('finish');
      var div = document.createElement('div');
      var text = document.createElement('h2');
      var btnPlayAgain = document.createElement('button');

      if (playerTab[0].life < 1) {
        document.getElementById('buttonsj1').setAttribute('class', 'disable');
        document.getElementById('buttonsj2').setAttribute('class', 'disable');
        document.getElementById('lifej1').innerHTML = "0";
        box.style.display = "block";
        box.appendChild(div).setAttribute('class', 'modal-content');
        div.appendChild(text).innerHTML = name_j2 + " a gagné !";
        div.appendChild(btnPlayAgain).setAttribute('id', 'playAgain');
        btnPlayAgain.innerHTML = "Rejouer";
        btnPlayAgain.addEventListener("click", function () {
          location.reload();
        });
      } else if (playerTab[1].life < 1) {
        document.getElementById('buttonsj1').setAttribute('class', 'disable');
        document.getElementById('buttonsj2').setAttribute('class', 'disable');
        document.getElementById('lifej2').innerHTML = "0";
        box.style.display = "block";
        box.appendChild(div).setAttribute('class', 'modal-content');
        div.appendChild(text).innerHTML = name_j1 + " a gagné !";
        div.appendChild(btnPlayAgain).setAttribute('id', 'playAgain');
        btnPlayAgain.innerHTML = "Rejouer";
        btnPlayAgain.addEventListener("click", function () {
          location.reload();
        });
      }
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
    //TODO: no access after obstacles
    value: function availableMove(playerTab) {
      var td = null;

      for (var browseCells = 0; browseCells < 100; browseCells++) {
        if (browseCells < 10) {
          td = 'td-0';
        } else {
          td = 'td-';
        }

        document.getElementById(td + browseCells).removeAttribute('data-playeraccess');
      }

      var player = new _js_player__WEBPACK_IMPORTED_MODULE_0__["Player"]();

      if (this.checkIfFight(playerTab) === false) {
        for (var i = 0; i < 2; i++) {
          var availableId = null;
          var availablePos = null;
          var availableCell = null;
          var playerCell = document.getElementById(playerTab[i].position);
          var playerId = playerCell.id.split('-')[1];
          var noGoCell = null;

          for (availableId = Number(playerId) - 1; availableId >= playerId - 3; availableId--) {
            if (availableId < 10) {
              td = 'td-0';
            } else {
              td = 'td-';
            }

            availablePos = td + availableId;
            availableCell = document.getElementById(availablePos);

            if (availableId >= 0 && availableId < 100) {
              if (playerTab[i].move === true && availableCell.dataset.y === playerCell.dataset.y && !availableCell.hasAttribute('data-access') && !availableCell.hasAttribute('data-player') && !availableCell.hasAttribute('data-playeraccess')) {
                availableCell.setAttribute('data-playeraccess', 1);
              } else if (playerTab[i].move === true && availableCell.dataset.y === playerCell.dataset.y && availableId >= 1 && (availableCell.hasAttribute('data-access') || availableCell.hasAttribute('data-player') || availableCell.hasAttribute('data-playeraccess'))) {
                noGoCell = document.getElementById(td + (Number(availableId) - 1));

                if (noGoCell !== null) {
                  noGoCell.setAttribute('data-playeraccess', 0);
                }
              }
            }
          }

          for (availableId = Number(playerId) + 1; availableId <= Number(playerId) + 3; availableId++) {
            if (availableId < 10) {
              td = 'td-0';
            } else {
              td = 'td-';
            }

            availablePos = td + availableId;
            availableCell = document.getElementById(availablePos);

            if (availableId >= 0 && availableId < 100) {
              if (playerTab[i].move === true && availableCell.dataset.y === playerCell.dataset.y && !availableCell.hasAttribute('data-access') && !availableCell.hasAttribute('data-player') && !availableCell.hasAttribute('data-playeraccess')) {
                availableCell.setAttribute('data-playeraccess', 1);
              } else if (playerTab[i].move === true && availableCell.dataset.y === playerCell.dataset.y && availableId < 99 && (availableCell.hasAttribute('data-access') || availableCell.hasAttribute('data-player') || availableCell.hasAttribute('data-playeraccess'))) {
                noGoCell = document.getElementById(td + (Number(availableId) + 1));

                if (noGoCell !== null) {
                  noGoCell.setAttribute('data-playeraccess', 0);
                }
              }
            }
          }

          var verticals = [10, 20, 30];
          var tdnogo = null; //Cases autorisées vers le haut

          for (var _i = 0, _verticals = verticals; _i < _verticals.length; _i++) {
            var jump = _verticals[_i];
            availableId = Number(playerId) - Number(jump);

            if (availableId < 10) {
              td = 'td-0';
            } else if (availableId >= 10 && availableId < 20) {
              td = 'td-';
              tdnogo = 'td-0';
            } else {
              td = 'td-';
              tdnogo = 'td-';
            }

            availablePos = td + availableId;
            availableCell = document.getElementById(availablePos);

            if (availableId >= 0 && availableId < 100) {
              if (playerTab[i].move === true && availableCell.dataset.x === playerCell.dataset.x && !availableCell.hasAttribute('data-access') && !availableCell.hasAttribute('data-player') && !availableCell.hasAttribute('data-playeraccess')) {
                availableCell.setAttribute('data-playeraccess', 1);
              } else if (playerTab[i].move === true && availableCell.dataset.x === playerCell.dataset.x && availableId >= 10 && (availableCell.hasAttribute('data-access') || availableCell.hasAttribute('data-player') || availableCell.hasAttribute('data-playeraccess'))) {
                noGoCell = document.getElementById(tdnogo + (Number(availableId) - 10));
                noGoCell.setAttribute('data-playeraccess', 0);
              }
            }
          } //TODO: td répétitif -> fonction
          //Cases autorisées vers le bas


          for (var _i2 = 0, _verticals2 = verticals; _i2 < _verticals2.length; _i2++) {
            var _jump = _verticals2[_i2];
            availableId = Number(playerId) + Number(_jump);

            if (availableId < 10) {
              td = 'td-0';
            } else if (availableId >= 10 && availableId < 20) {
              td = 'td-';
              tdnogo = 'td-0';
            } else {
              td = 'td-';
              tdnogo = 'td-';
            }

            availablePos = td + availableId;
            availableCell = document.getElementById(availablePos);

            if (availableId >= 0 && availableId < 100) {
              if (playerTab[i].move === true && availableCell.dataset.x === playerCell.dataset.x && !availableCell.hasAttribute('data-access') && !availableCell.hasAttribute('data-player') && !availableCell.hasAttribute('data-playeraccess')) {
                availableCell.setAttribute('data-playeraccess', 1);
              } else if (availableId < 90 && playerTab[i].move === true && availableCell.dataset.x === playerCell.dataset.x && (availableCell.hasAttribute('data-access') || availableCell.hasAttribute('data-player') || availableCell.hasAttribute('data-playeraccess'))) {
                noGoCell = document.getElementById(tdnogo + (Number(availableId) + 10));
                noGoCell.setAttribute('data-playeraccess', 0);
              }
            }
          }
        }
      } else {
        player.allowFight(playerTab);
      }
    }
  }, {
    key: "move",
    value: function move(cellId, playerTab) {
      var player = null;

      for (var i = 0; i < playerTab.length; i++) {
        if (playerTab[i].move === true) {
          player = playerTab[i];
        }
      }

      var currentCell = document.getElementById(player.position);
      var nextCell = document.getElementById(cellId);
      this.playerMove(nextCell, currentCell, player, playerTab);
      return playerTab;
    }
  }, {
    key: "playerMove",
    value: function playerMove(nextCell, currentCell, player, playerTab) {
      var newPlayer = new _js_player__WEBPACK_IMPORTED_MODULE_0__["Player"]();
      var oldWeapon = player.weapon;

      if (nextCell.dataset.playeraccess === "1" && nextCell.id !== currentCell.id) {
        //Update player position
        nextCell.setAttribute('data-player', player.id);
        player.position = nextCell.id; //Update player weapon and weapon shown in the cell

        if (nextCell.hasAttribute('data-weapon')) {
          if (oldWeapon === null) {
            player.weapon = nextCell.dataset.weapon;
            nextCell.removeAttribute('data-weapon');
          } else {
            player.weapon = nextCell.dataset.weapon;
            nextCell.dataset.weapon = oldWeapon;
          }
        } //Remove last position


        currentCell.removeAttribute('data-player'); //this.getPlayerWeapon(player);

        newPlayer.allowMove(playerTab);
        this.getPlayer(player);
        return true;
      }

      return false;
    }
  }, {
    key: "getPlayer",
    value: function getPlayer(player) {
      return player;
    } //Vérifie si les 2 joueurs sont côte à côte (renvoie true), pour déclencher le fight

  }, {
    key: "checkIfFight",
    value: function checkIfFight(playerTab) {
      var player1Position = document.getElementById(playerTab[0].position);
      var player2Position = document.getElementById(playerTab[1].position);

      if (player1Position.dataset.y === player2Position.dataset.y && (Number(player1Position.dataset.x) === Number(player2Position.dataset.x) + 1 || Number(player1Position.dataset.x) === Number(player2Position.dataset.x) - 1) || player1Position.dataset.x === player2Position.dataset.x && (Number(player1Position.dataset.y) === Number(player2Position.dataset.y) + 1 || Number(player1Position.dataset.y) === Number(player2Position.dataset.y) - 1)) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Move;
}();



/***/ })
/******/ ]);