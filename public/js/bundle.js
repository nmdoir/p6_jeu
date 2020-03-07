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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowWanted", function() { return rowWanted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colWanted", function() { return colWanted; });
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


$("#namej1").text(nameJ1);
$("#namej2").text(nameJ2); //Box règles du jeu

var modal = document.getElementById("rulesModal");
$("#rulesBtn").click(function () {
  modal.style.display = "block";
});
$(window).click(function () {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}); //Définir la taille de la grille que l'on veut

var rowWanted = prompt("Entrez le nombre de lignes pour la grille :");
var colWanted = prompt("Entrez le nombre de lignes pour la grille :"); //Leur donner une valeur par défaut au cas où l'utilisateur n'entre rien

if (!rowWanted || rowWanted === "") {
  rowWanted = 10;
}

if (!colWanted || colWanted === "") {
  colWanted = 10;
} //Insérer la grille dans le HTML


$(document).ready(function () {
  var grid = new _js_genGrid__WEBPACK_IMPORTED_MODULE_0__["GenGrid"](rowWanted, colWanted);
  grid.createGrid();
}); //On exporte les variables noms des joueurs et taille du plateau afin de les utiliser dans les classes Player et Move



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
    this.board = $("#board");
    this.gridLength = this.row * this.column;
  }

  _createClass(GenGrid, [{
    key: "createGrid",
    value: function createGrid() {
      var _this = this;

      //On crée la grille vierge
      var table = document.createElement("table");
      var tbody = document.createElement("tbody");
      var move = new _js_move__WEBPACK_IMPORTED_MODULE_2__["Move"]();
      var player = new _js_player__WEBPACK_IMPORTED_MODULE_1__["Player"]();
      this.playerTab = player.getPlayerTab();
      this.playerTab[0].move = true;
      $(table).attr("class", "center");
      $(tbody).appendTo(table);
      var id = 0;

      for (var i = 0; i < this.row; i++) {
        var tr = document.createElement("tr");
        $(tr).attr("class", "tdstyle").appendTo(tbody); //On ajoute les coordonnées x/y à chaque case pour pouvoir les identifier ensuite dans nos fonctions de mouvement

        var _loop = function _loop(j) {
          var increment = id++;
          var td = document.createElement("td");
          $(td).attr("class", "tdstyle").attr("data-x", j).attr("data-y", i);
          td.id = _this.getTd(increment) + increment; //td.id = "td-" + i + j;
          //On écoute les événements de clics sur les cases pour les mouvements

          td.addEventListener("click", function () {
            if (td.dataset.playeraccess === "1") {
              _this.playerTab = move.move(td.id, _this.playerTab);
              move.availableMove(_this.playerTab);

              _this.getPlayerInfo(_this.playerTab);
            }
          });
          $(td).appendTo(tr);
        };

        for (var j = 0; j < this.column; j++) {
          _loop(j);
        }
      }

      $(table).appendTo(this.board);
      this.displayInfo(); //On affiche les cases cliquables pour le 1er joueur et on dispose aléatoirement les cases non accessibles et les armes

      this.createMovement();
      this.createNoAccess();
      this.createWeapon(); //On désigne le 1er joueur pour commencer le 1er tour

      this.playerTab[0].move = true; //Afficher les infos des joueurs dans les 2 blocs

      this.getPlayerInfo(this.playerTab);
    } //Obtenir une case aléatoire sur le plateau

  }, {
    key: "getRandomCell",
    value: function getRandomCell() {
      var randomInt = 0;
      var td = null;
      var cell = null;

      for (var i = 0; i < this.gridLength; i++) {
        randomInt = Math.floor(Math.random() * this.gridLength);
        td = this.getTd(randomInt);
        cell = document.getElementById(td + randomInt); //Si elle est déjà prise, on continue à générer de nouvelles cases

        while ($(cell).attr("data-access") || $(cell).attr("data-weapon") || $(cell).attr("data-player")) {
          randomInt = Math.floor(Math.random() * this.gridLength);
          td = this.getTd(randomInt);
          cell = document.getElementById(td + randomInt);
        }
      }

      return cell;
    } //On adapte le format de l'id pour qu'il n'y ait pas d'erreurs : "td-xx"

  }, {
    key: "getTd",
    value: function getTd(randomInt) {
      var id;

      if (randomInt < 10) {
        id = "td-0";
      } else {
        id = "td-";
      }

      return id;
    }
  }, {
    key: "createNoAccess",
    value: function createNoAccess() {
      var idNoAccess = null;
      var cellPlayer = [];
      var cell = document.getElementsByTagName("td"); //On cherche les positions des joueurs et on les entre dans un tableau

      for (var j = 0; j < cell.length; j++) {
        if (cell[j].hasAttribute("data-player")) {
          cellPlayer.push(cell[j]);
        }
      } //On génère 25 cases non accessibles


      for (var i = 0; i < 25; i++) {
        idNoAccess = this.getRandomCell(); //Pour éviter qu'un joueur ne se retrouve bloqué dans un coin, on interdit les cases non accessibles sur les axes x et y des 2 joueurs

        while (idNoAccess.dataset.x === cellPlayer[0].dataset.x || idNoAccess.dataset.x === cellPlayer[1].dataset.x || idNoAccess.dataset.y === cellPlayer[0].dataset.y || idNoAccess.dataset.y === cellPlayer[1].dataset.y) {
          idNoAccess = this.getRandomCell();
        }

        $(idNoAccess).css("background", "black");
        $(idNoAccess).attr("data-access", 0);
      }
    }
  }, {
    key: "createWeapon",
    value: function createWeapon() {
      var cellWeapon = null;
      var weapon = new _js_weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"]();

      for (var i = 0; i < 8; i++) {
        var randomWeapon = weapon.getRandomWeapon();
        cellWeapon = this.getRandomCell();
        $(cellWeapon).attr("data-weapon", randomWeapon);
      }
    }
  }, {
    key: "createPlayer",
    value: function createPlayer() {
      var cellPlayer0 = this.getRandomCell();
      this.playerTab[0].position = cellPlayer0.id;
      $(cellPlayer0).attr("data-player", this.playerTab[0].id);
      var cellPlayer1 = this.getRandomCell(); //Eviter que les 2 joueurs se retrouvent à côté à l'initialisation du plateau

      while (cellPlayer0.dataset.x === cellPlayer1.dataset.x || cellPlayer0.dataset.y === cellPlayer1.dataset.y) {
        cellPlayer1 = this.getRandomCell();
      }

      this.playerTab[1].position = cellPlayer1.id;
      $(cellPlayer1).attr("data-player", this.playerTab[1].id);
      return this.playerTab;
    }
  }, {
    key: "createMovement",
    value: function createMovement() {
      var move = new _js_move__WEBPACK_IMPORTED_MODULE_2__["Move"]();
      var newPlayer = this.createPlayer();
      move.availableMove(newPlayer);
    } //Afficher les infos des joueurs dans les 2 blocs

  }, {
    key: "getPlayerInfo",
    value: function getPlayerInfo(playerTab) {
      var weapon = new _js_weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"](); //Life

      $("#lifej1").text(playerTab[0].life);
      $("#lifej2").text(playerTab[1].life); //Weapon

      $("#weaponj1").text(weapon.getFrenchWeaponName(playerTab[0].weapon));
      $("#weaponj2").text(weapon.getFrenchWeaponName(playerTab[1].weapon)); //Damage

      $("#damagej1").text(weapon.getWeaponDamage(playerTab[0].weapon));
      $("#damagej2").text(weapon.getWeaponDamage(playerTab[1].weapon));
    } //Afin que les blocs ne s'affichent pas en même temps que les prompts au moment du chargement de la page

  }, {
    key: "displayInfo",
    value: function displayInfo() {
      $("h2:first").removeClass("disable");
      $("#rulesBtn").removeClass("disable");
      $("#playerinfo").removeClass("disable");
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
  } //Choisir aléatoirement des armes pour les placer ensuite sur le plateau


  _createClass(Weapon, [{
    key: "getRandomWeapon",
    value: function getRandomWeapon() {
      var randomInt = 0;

      for (var i = 0; i < this.weaponTab.length; i++) {
        randomInt = Math.floor(Math.random() * this.weaponTab.length);
      }

      return this.weaponTab[randomInt].name;
    } //Récupérer le dégât d'une arme

  }, {
    key: "getWeaponDamage",
    value: function getWeaponDamage(weapon) {
      for (var i = 0; i < this.weaponTab.length; i++) {
        if (this.weaponTab[i].name === weapon) {
          return this.weaponTab[i].damage;
        }
      }
    } //Récupérer la traduction de l'arme pour l'afficher dans les blocs d'infos des joueurs

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
    } //Générer les boutons d'attaque et de défense pour démarrer le combat, en fonction du joueur dont c'est le tour

  }, {
    key: "allowFight",
    value: function allowFight(playerTab) {
      var _this = this;

      //On crée un attribut data-damage pour stocker le dégât divisé par 2 en cas d'attaque qui fait suite à une défense
      var buttonsj1 = document.getElementById("buttonsj1");
      buttonsj1.setAttribute("data-damage", 0);
      var buttonsj2 = document.getElementById("buttonsj2");
      buttonsj2.setAttribute("data-damage", 0); //Créer les 4 boutons

      var buttonAttackJ1 = document.createElement("button");
      var buttonDefenseJ1 = document.createElement("button");
      var buttonAttackJ2 = document.createElement("button");
      var buttonDefenseJ2 = document.createElement("button");
      buttonAttackJ1.innerHTML = "Attaquer";
      buttonDefenseJ1.innerHTML = "Défendre";
      buttonAttackJ2.innerHTML = "Attaquer";
      buttonDefenseJ2.innerHTML = "Défendre"; //Insérer les 4 boutons

      buttonsj1.appendChild(buttonAttackJ1).setAttribute("class", "attack btnj1");
      buttonsj1.appendChild(buttonDefenseJ1).setAttribute("class", "defense btnj1");
      buttonsj2.appendChild(buttonAttackJ2).setAttribute("class", "attack btnj2");
      buttonsj2.appendChild(buttonDefenseJ2).setAttribute("class", "defense btnj2"); //Masquer les boutons du joueur dont ce n'est pas le tour

      if (playerTab[0].move === true) {
        buttonsj2.setAttribute("class", "disable");
      } else if (playerTab[1].move === true) {
        buttonsj1.setAttribute("class", "disable");
      }

      var weapon = new _weapon__WEBPACK_IMPORTED_MODULE_1__["Weapon"]();
      var buttonsAttack = document.getElementsByClassName("attack");
      var buttonsDefense = document.getElementsByClassName("defense"); //Ecouter les événements de clic du bouton Attaquer

      var _loop = function _loop(i) {
        buttonsAttack[i].addEventListener("click", function () {
          var attackerDamage; //Vérifier de quel joueur il s'agit

          if (buttonsAttack[i].classList.contains("btnj1")) {
            //Vérifier s'il y a eu une défense de la part de l'autre joueur, pour retrancher le bon nombre de PV
            if (buttonsj1.dataset.damage > 0) {
              attackerDamage = Number(buttonsj1.dataset.damage);
            } else {
              attackerDamage = weapon.getWeaponDamage(playerTab[0].weapon);
            } //Retrancher les points de dégâts et afficher les PV restants


            playerTab[1].life -= attackerDamage;
            document.getElementById("lifej2").innerHTML = playerTab[1].life; //Réinitialiser le dataset des points de dégâts en cas de défense

            buttonsj1.setAttribute("data-damage", 0); //Masquer les boutons du joueur dont ce n'est pas le tour

            buttonsj2.classList.remove("disable");
            buttonsj1.setAttribute("class", "disable");
          } else if (buttonsAttack[i].classList.contains("btnj2")) {
            if (buttonsj2.dataset.damage > 0) {
              attackerDamage = Number(buttonsj2.dataset.damage);
            } else {
              attackerDamage = weapon.getWeaponDamage(playerTab[1].weapon);
            }

            playerTab[0].life -= attackerDamage;
            document.getElementById("lifej1").innerHTML = playerTab[0].life;
            buttonsj2.setAttribute("data-damage", 0);
            buttonsj1.classList.remove("disable");
            buttonsj2.setAttribute("class", "disable");
          } //On change de joueur


          _this.allowMove(playerTab); //On vérifie que les 2 joueurs ont toujours des points de vie disponibles


          _this.checkEnd(playerTab);
        });
      };

      for (var i = 0; i < buttonsAttack.length; i++) {
        _loop(i);
      } //Ecouter les événements de clic du bouton Défendre


      var _loop2 = function _loop2(j) {
        buttonsDefense[j].addEventListener("click", function () {
          if (buttonsDefense[j].classList.contains("btnj1")) {
            var attackerDamage = Number(weapon.getWeaponDamage(playerTab[1].weapon) / 2); //On stocke le dégât divisé par 2 dans l'attribut data-damage de l'autre joueur, pour le récupérer lors de sa prochaine attaque

            buttonsj2.setAttribute("data-damage", String(attackerDamage));
            buttonsj2.classList.remove("disable");
            buttonsj1.setAttribute("class", "disable");
          } else if (buttonsDefense[j].classList.contains("btnj2")) {
            var _attackerDamage = Number(weapon.getWeaponDamage(playerTab[0].weapon) / 2);

            buttonsj1.setAttribute("data-damage", String(_attackerDamage));
            buttonsj1.classList.remove("disable");
            buttonsj2.setAttribute("class", "disable");
          }

          _this.allowMove(playerTab);

          _this.checkEnd(playerTab);
        });
      };

      for (var j = 0; j < buttonsDefense.length; j++) {
        _loop2(j);
      }
    }
  }, {
    key: "checkEnd",
    value: function checkEnd(playerTab) {
      var box = document.getElementById("finish");
      var div = document.createElement("div");
      var text = document.createElement("h2");
      var btnPlayAgain = document.createElement("button"); //Si l'un des joueurs n'a plus de PV

      for (var loser = 0; loser < playerTab.length; loser++) {
        if (playerTab[loser].life < 1) {
          var playerName = null;

          if (loser === 0) {
            playerName = _index__WEBPACK_IMPORTED_MODULE_0__["nameJ2"];
          } else {
            playerName = _index__WEBPACK_IMPORTED_MODULE_0__["nameJ1"];
          } //On masque tous les boutons d'attaque/défense


          $("#buttonsj1").attr("class", "disable");
          $("#buttonsj2").attr("class", "disable"); //On force les PV du perdant à 0 (car ils peuvent être à -x)

          playerTab[loser].life = 0;
          $("#lifej1").text(playerTab[0].life);
          $("#lifej2").text(playerTab[1].life);
          box.style.display = "block"; //On affiche un message de fin de jeu avec le nom du gagnant et un bouton pour rejouer

          box.appendChild(div).setAttribute("class", "modal-content");
          div.appendChild(text).innerHTML = playerName + " a gagné !";
          div.appendChild(btnPlayAgain).setAttribute("id", "playAgain");
          btnPlayAgain.innerHTML = "Rejouer";
          btnPlayAgain.addEventListener("click", function () {
            location.reload();
          });
        }
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
/* harmony import */ var _js_genGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
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
    value: function availableMove(playerTab) {
      var td = null;
      var grid = new _js_genGrid__WEBPACK_IMPORTED_MODULE_1__["GenGrid"](_index__WEBPACK_IMPORTED_MODULE_2__["rowWanted"], _index__WEBPACK_IMPORTED_MODULE_2__["colWanted"]);

      for (var browseCells = 0; browseCells < grid.gridLength; browseCells++) {
        td = this.checkTd(browseCells)[0];
        document.getElementById(td + browseCells).removeAttribute("data-playeraccess");
      }

      var player = new _js_player__WEBPACK_IMPORTED_MODULE_0__["Player"](); //On vérifie que les 2 joueurs ne sont pas à côté (combat)

      if (this.checkIfFight(playerTab) === false) {
        for (var i = 0; i < 2; i++) {
          var availableId = null;
          var playerCell = document.getElementById(playerTab[i].position);
          var playerId = playerCell.id.split("-")[1];
          var noGoCellId = null; //Cases autorisées à gauche

          for (availableId = Number(playerId) - 1; availableId >= playerId - 3; availableId--) {
            noGoCellId = Number(availableId) - 1;
            this.checkCellsAround(playerTab, i, td, availableId, "y", playerCell, "left", 1, noGoCellId);
          } //Cases autorisées à droite


          for (availableId = Number(playerId) + 1; availableId <= Number(playerId) + 3; availableId++) {
            noGoCellId = Number(availableId) + 1;
            var cellNb = Number(grid.gridLength - 1);
            this.checkCellsAround(playerTab, i, td, availableId, "y", playerCell, "right", cellNb, noGoCellId);
          } //Pour la gestion des déplacements haut/bas, on crée un array


          var verticals = [_index__WEBPACK_IMPORTED_MODULE_2__["colWanted"], _index__WEBPACK_IMPORTED_MODULE_2__["colWanted"] * 2, _index__WEBPACK_IMPORTED_MODULE_2__["colWanted"] * 3]; //Cases autorisées vers le haut

          for (var _i = 0, _verticals = verticals; _i < _verticals.length; _i++) {
            var jump = _verticals[_i];
            availableId = Number(playerId) - Number(jump);
            noGoCellId = Number(availableId) - _index__WEBPACK_IMPORTED_MODULE_2__["colWanted"];
            var _cellNb = grid.column;
            this.checkCellsAround(playerTab, i, td, availableId, "x", playerCell, "up", _cellNb, noGoCellId);
          } //Cases autorisées vers le bas


          for (var _i2 = 0, _verticals2 = verticals; _i2 < _verticals2.length; _i2++) {
            var _jump = _verticals2[_i2];
            availableId = Number(playerId) + Number(_jump);
            noGoCellId = Number(availableId) + Number(_index__WEBPACK_IMPORTED_MODULE_2__["colWanted"]);
            console.log(noGoCellId);

            var _cellNb2 = (grid.row - 1) * grid.column;

            this.checkCellsAround(playerTab, i, td, availableId, "x", playerCell, "down", _cellNb2, noGoCellId);
          }
        }
      } //Si les 2 joueurs sont sur des cases adjacentes, on déclenche le combat
      else {
          player.allowFight(playerTab);
        }
    }
  }, {
    key: "checkTd",
    value: function checkTd(availableId) {
      var grid = new _js_genGrid__WEBPACK_IMPORTED_MODULE_1__["GenGrid"](_index__WEBPACK_IMPORTED_MODULE_2__["rowWanted"], _index__WEBPACK_IMPORTED_MODULE_2__["colWanted"]);
      var tdTab = [];

      if (availableId >= 0 && availableId < grid.gridLength) {
        if (availableId < 10) {
          tdTab[0] = "td-0";
        } //On a besoin de 2 cas de figure pour gérer la variable noGoCellId, qui correspond à la case n+2 (pour empêcher l'accès aux cases se situant après un obstacle, l'obstacle étant la case n+1)
        else if (availableId >= 10 && availableId < 20) {
            tdTab[0] = "td-";
            tdTab[1] = "td-0";
          } else {
            tdTab[0] = "td-";
            tdTab[1] = "td-";
          }
      }

      return tdTab;
    }
  }, {
    key: "checkCellsAround",
    value: function checkCellsAround(playerTab, i, td, availableId, axis, playerCell, direction, cellNb, noGoCellId) {
      var grid = new _js_genGrid__WEBPACK_IMPORTED_MODULE_1__["GenGrid"](_index__WEBPACK_IMPORTED_MODULE_2__["rowWanted"], _index__WEBPACK_IMPORTED_MODULE_2__["colWanted"]);
      td = this.checkTd(availableId)[0];
      var availablePos = td + availableId;
      var availableCell = document.getElementById(availablePos); //La case n+2/n-2, utilisée pour empêcher l'accès s'il y a un obstacle en n+1/n-1

      var noGoCell = null;

      if (availableId >= 0 && availableId < grid.gridLength) {
        if (playerTab[i].move === true && //On vérifie que la case étudiée est sur le même axe que la case du joueur
        this.checkAxis(availableCell, playerCell, direction) === true && //Et qu'elle n'est pas inaccessible
        !availableCell.hasAttribute("data-access") && !availableCell.hasAttribute("data-player") && !availableCell.hasAttribute("data-playeraccess")) {
          availableCell.setAttribute("data-playeraccess", 1);
        } else if ( //Si elle est inaccessible,
        playerTab[i].move === true && this.checkAxis(availableCell, playerCell, direction) === true && //On vérifie que noGoCellId reste entre 0 et fin du tableau pour éviter les erreurs de sortie de tableau
        this.checkNoGoCell(availableId, direction, cellNb) === true && ( //et qu'il y a bien l'un des 3 obstacles
        availableCell.hasAttribute("data-access") || availableCell.hasAttribute("data-player") || availableCell.hasAttribute("data-playeraccess"))) {
          if (direction === "up" || direction === "down") {
            //On utilise le td adapté à noGoCell
            td = this.checkTd(availableId)[1];
          }

          noGoCell = document.getElementById(td + noGoCellId); //On empêche l'accès à la case suivante puisqu'il y a un obstacle en n+1/n-1

          if (noGoCell !== null) {
            noGoCell.setAttribute("data-playeraccess", 0);
          }
        }
      }
    } //On vérifie que la case étudiée est bien sur le même x/y que la case du joueur pour éviter les erreurs de bord de tableau (accès à la ligne/colonne suivante/précédente)

  }, {
    key: "checkAxis",
    value: function checkAxis(availableCell, playerCell, direction) {
      if ((direction === "left" || direction === "right") && availableCell.dataset.y === playerCell.dataset.y || (direction === "up" || direction === "down") && availableCell.dataset.x === playerCell.dataset.x) {
        return true;
      }
    }
  }, {
    key: "checkNoGoCell",
    value: function checkNoGoCell(availableId, direction, cellNb) {
      if ((direction === "left" || direction === "up") && availableId >= cellNb || (direction === "right" || direction === "down") && availableId < cellNb) {
        return true;
      }
    } //On met à jour les infos des joueurs (playerTab) après le clic avec la nouvelle position

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
        //On met à jour la position du joueur
        nextCell.setAttribute("data-player", player.id);
        player.position = nextCell.id; //On met à jour l'arme du joueur et l'arme déposée sur la case

        if (nextCell.hasAttribute("data-weapon")) {
          player.weapon = nextCell.dataset.weapon;
          nextCell.dataset.weapon = oldWeapon;
        } //On supprime l'ancienne position du joueur sur le plateau


        currentCell.removeAttribute("data-player"); //On change le joueur qui doit jouer ensuite

        newPlayer.allowMove(playerTab);
        return true;
      }

      return false;
    } //Vérifie si les 2 joueurs sont côte à côte (renvoie true), pour déclencher le combat

  }, {
    key: "checkIfFight",
    value: function checkIfFight(playerTab) {
      var player1Position = document.getElementById(playerTab[0].position);
      var player2Position = document.getElementById(playerTab[1].position);
      return player1Position.dataset.y === player2Position.dataset.y && (Number(player1Position.dataset.x) === Number(player2Position.dataset.x) + 1 || Number(player1Position.dataset.x) === Number(player2Position.dataset.x) - 1) || player1Position.dataset.x === player2Position.dataset.x && (Number(player1Position.dataset.y) === Number(player2Position.dataset.y) + 1 || Number(player1Position.dataset.y) === Number(player2Position.dataset.y) - 1);
    }
  }]);

  return Move;
}();



/***/ })
/******/ ]);