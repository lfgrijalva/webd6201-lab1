"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function
(function(){

    function Start() {
        //Step 2.1
        //Get the products element
        let products = document.getElementById("products");
        //Get the "a" tag as a child from products and change its text
        products.lastChild.lastChild.textContent = " Projects";

        //Step 2.2
        //Create object for nav bar container
        let navbarContainer  = document.getElementById("navbarSupportedContent");
        //Get the "ul" list from it
        let navbarUl = navbarContainer.lastChild;
        //Clone a node of the same style
        let humanResources = products.cloneNode(true);
        //Change the id, as it needs to be unique
        humanResources.setAttribute("id", "human_resources");
        //Change the icon in "i" tag
        humanResources.lastChild.childNodes[0].setAttribute("class", "fas fa-handshake");
        //Change the text to be displayed
        humanResources.lastChild.lastChild.textContent = " Human Resources";
        //Append to document. Get "contact us" item and insert the new item before it
        navbarUl.insertBefore(humanResources,navbarUl.childNodes[8]);
        
    }
    window.addEventListener("load", Start);
})();