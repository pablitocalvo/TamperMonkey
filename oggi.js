// ==UserScript==
// @name         oggi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://re22.axioscloud.it/Secret/REREC_Today.aspx
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';

    function oggiOnClick(b){
//alert("oggi-cliccato su"+ b.innerHTML);
        sessionStorage.Azione="SELEZIONA";
        sessionStorage.Classe=b.innerHTML;
       // window.location.href="https://re22.axioscloud.it/Secret/REMenu.aspx?Customer_ID=90049420582";
//alert("pausa verica session storage"+ b.innerHTML);
}


//***************************
// Your code here...
//***************************

    var classi=document.querySelectorAll( "tbody > tr > td > label.label.label-sm.label-default");
    var materie=document.querySelectorAll("tbody > tr > td > label.label.label-sm.label-info");



//  alert (classi.length);

    for (var i=0; i<classi.length;i++){

        var classeMateria= "_"+classi[i].innerHTML.substr(0,2)+materie[i].innerHTML.charAt(0)

//         var button = document.createElement("BUTTON");   // Create a <button> element
//         button.onclick= function(){oggiOnClick(this);};

//         //button.style.height = "15px";
//         //button.style.width = "15px";
//         button.innerHTML=classeMateria;
//         classi[i].parentElement.appendChild(button);

        var colle = document.createElement("A");
        colle.href="https://re22.axioscloud.it/Secret/REMenu.aspx?Customer_ID=90049420582";
        colle.innerHTML=classeMateria;
        colle.onclick= function(){oggiOnClick(this);};
        classi[i].parentElement.appendChild(colle);
}


    


})();
