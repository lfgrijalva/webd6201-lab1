/*
Author: Luis Grijalva
Student ID: 100719475
Date Completed: 1/24/2020

Lab 1 - DOM Manipulation
*/
"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function
(function(){

    function Start() {
        //Step 2.1
        //Get the products element
        let products = document.getElementById("products");
        //Get the the text from the "a" tag (its last child) and modify it
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

        //Step 2.3
        //Create a new "nav" element
        let bottomNavbar = document.createElement("nav");
        //Set its class according to documentation
        bottomNavbar.setAttribute("class", "navbar fixed-bottom navbar-light bg-light");
        //Create new "a" tag of class navbar-brand
        let navbarTagA = document.createElement("a");
        navbarTagA.setAttribute("class","navbar-brand");
        navbarTagA.setAttribute("href","#");
        //Add the text to it, using the encoded version of the copyright symbol
        navbarTagA.textContent="\u00A9CopyRight 2020";
        //Attach the "a" tag to the navbar
        bottomNavbar.appendChild(navbarTagA);
        //Attach the navbar as the last element of the "body" tag
        document.getElementsByTagName("body")[0].appendChild(bottomNavbar);
        
        
    }
    window.addEventListener("load", Start);
})();