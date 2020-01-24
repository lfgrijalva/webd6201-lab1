"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function
(function(){

    function Start() {
        //Get element
        let products = document.getElementById("products");
        //Get the "a" tag as a child from products and change its text
        products.lastChild.lastChild.textContent = " Projects";
    }
    window.addEventListener("load", Start);
})();