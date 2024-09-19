"use strict";
(function() {

  /**
   * PORTFOLIO IMAGES
      * RUBREAKS
        * - grunge logo (breaksgrunge)
        * - subway logo edit (breakssubway)
        * - graffiti sticker (breakssticker)
      * if i fail this test case (testcase)
      * rubakes (bakes)
      * rubreaks genint (breaksgenint)
      * lemonblur (lemonblur)
      * limoncello lemon (limoncello)
      * bear bakerie (bearbakerie)
      * break melee (melee)
      * capybaras (capybaras)
      * cards (cards)
      * suspects (suspects)
      * kid haram birthday card (birthday)
      * shadow the hedgehog (shadow)
      * batman trump (battrump)
   */

  const PHOTOS = [
    "portimg/bakes.png",
    "portimg/breaksgrunge.png",
    "portimg/breakssubway.png",
    "portimg/breakssticker.png",
    "portimg/testcase.png",
    "portimg/breaksgenint.png",
    "portimg/melee.png",
    "portimg/limoncello.png",
    "portimg/bearbakerie.png",
    "portimg/capybaras.png",
    "portimg/lemonblur.png",
    "portimg/cards.png",
    "portimg/suspects.png",
    "portimg/birthday.png",
    "portimg/shadow.png",
    "portimg/battrump.png"
  ]
  //   "img/bear.png", "img/dinosaur.png", "img/father.png",
  // "img/halloween.png", "img/pumpkin.png", "img/strawberry.png", "img/wizard.png"];

  const PHOTOS_ALT = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]
  //   "a stuffed beige bear", "a stuffed chicken", "a stuffed brown bear",
  // "a stuffed vampire bear", "a stuffed pumpkin", "a stuffed strawberry bear", "a stuffed wizard"];

  window.addEventListener("load", init);

  /** this function initiates the code when the page loads */
  function init() {
    // id("time").addEventListener("click", time);
    // id("add").addEventListener("click", add);
    // id("subtract").addEventListener("click", subtract);
    // id("different").addEventListener("click", different);
    // id("evil").addEventListener("click", evil);
    // id("reset").addEventListener("click", reset);

    display();
  }

  function display() {
    let num = PHOTOS.length;
    // for (let i = num - 1; i >= 0; i--) {
    for (let i = 0; i < num; i++) {
      let add = document.createElement("img");
      add.src = PHOTOS[i];
      add.alt = PHOTOS_ALT[i];
      id("photos").appendChild(add);
    }

    // let cards = qsa("#food article");

    // if (cards.length === 0) {
    //   for (let i = 0; i < resp.length; i++) {
    //     let card = gen("article");
    //     card.classList.add("card");

    //     let img = gen("img");
    //     img.src = "img/" + resp[i].image;
    //     img.alt = resp[i].name;
    //     let name = gen("p");
    //     name.textContent = resp[i].name;

    //     card.appendChild(img);
    //     card.appendChild(name);

    //     card.addEventListener("click", itemView);
    //     id("food").appendChild(card);
    //   }

    // } else {
    //   for (let i = 0; i < cards.length; i++) {
    //     cards[i].classList.remove("hidden");
    //   }
    // }
  }



  /** this function toggles "daytime" or "nighttime" for the page theme */
  function time() {
    id("photos").classList.toggle("night");
    id("body").classList.toggle("nightbkgd");
    id("header").classList.toggle("nighttxt");
    let button1 = document.querySelector('button');
    button1.classList.toggle("nightbtn");
    button1.classList.toggle("nightbtnhvr");
    button1.classList.toggle("nightbtnact");
  }

  /** this function adds another stuffed animal image to the page */
  function add() {
    let friend = document.createElement("img");
    let select = Math.floor((PHOTOS.length) * Math.random());
    friend.src = PHOTOS[select];
    friend.alt = PHOTOS_ALT[select];
    id("photos").appendChild(friend);
  }

  /** this function takes away the last stuffed animal image */
  function subtract() {
    if (id("photos").lastChild !== null) {
      id("photos").removeChild(id("photos").lastChild);
    }
  }

  /** this function changes the last added stuffed animal image to a different one */
  function different() {
    if (id("photos").lastChild !== null) {
      id("photos").removeChild(id("photos").lastChild);
    }
    add();
  }

  /** this function changes all the images on the page to a bear image with evil eyebrows */
  function evil() {
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      // unedited bear source: https://shop.san-x.co.jp/product/detail/RLK8893
      images[i].src = "img/evil.png";
      images[i].alt = "an evil stuffed bear";
    }
  }

  function reset(){
    let all = document.getElementById("photos");
    all.innerHTML = "";
  }

  // HELPER FUNCTIONS

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();