// ==UserScript==
// @name         oggi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://re22.axioscloud.it/Secret/REREC_Today.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function oggiOnClick(){
        alert("onlclik");

    }
    // Your code here...

    var classi=document.querySelectorAll( "tbody > tr > td > label.label.label-sm.label-default");
    var materie=document.querySelectorAll("tbody > tr > td > label.label.label-sm.label-info");
  //  alert (classi.length);

    for (var i=0; i<classi.length;i++){
/*         var button = document.createElement("BUTTON");   // Create a <button> element
        button.onclick= function(){alert("jkhk");}
        button.style.height = "45px";
        button.style.width = "45px";
*/
        var colle = document.createElement("A");
        colle.href="https://re22.axioscloud.it/Secret/REMenu.aspx?Customer_ID=90049420582";
        colle.innerHTML="AA";
        var td= classi[i].parentElement.appendChild(colle);



     }


    


})();
