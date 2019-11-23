// ==UserScript==
// @name         Registro
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://re22.axioscloud.it/Secret/REMenu.aspx*
// @grant        none
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';

     const _3BS = 0; const _4BS = 1; const _4BT = 2; const _4CS = 3;const _4CT = 4; const _5BS = 5; const _5BT = 6; const _5CS = 7; const _5CT = 8;

     const orario = [[  -1  ,   -1 ,   -1 ,  -1 ,  -1  , _5CT , _5CS   ], //lunedi
                     [  -1  ,   -1 , _4CS , _5BS, _5BT ,  -1  , _4BS   ], //martedi
                     [ _5CS , _4BS , _5CT , _4CS, _4CS ,  -1  ,  -1    ], //mercoledi
                     [  -1  , _5BT , _3BS , _4BT,  -1  , _5BS , _3BS   ], //giovedi
                     [  -1  ,   -1 ,   -1 ,  -1 , _4CT , _4BT , -1     ], //venerdi
                     [ _5CS , _4BS , _5CT , _4CS, _4CS ,  -1  ,  -1    ],
                     [  -1  ,   -1 ,   -1 ,  -1 ,  -1  ,  -1  , -1     ], //sabato
                     [ _5CS , _4BS , _5CT , _4CS, _4CS ,  -1  ,  -1    ] //domenica

                    ];

function deselezionaClasse(){
return; //non funziona ancora !!!

//     var selezioneClasse=document.getElementById("ContentPlaceHolderMenu_ddlClassi");

//     var opzioneNulla=document.createElement("OPTION");

//     opzioneNulla.innerHTML="Selezionare una Classe-Materia";
//     opzioneNulla.selected=true;

//     selezioneClasse.insertBefore(opzioneNulla,selezioneClasse.childNodes[0]);
//     // triggera on click su ....
//         $( "input[name='ctl00$ContentPlaceHolderBody$Button_RE_Classe_G']").trigger("click");

}

    function bottoneOra(){

        var d = new Date();
        var t = d.getTime();
        var giorno=d.getDay()-1;
        var ora=d.getHours();
        var minuti=d.getMinutes();


//giorno=2; ora=8; minuti=15;
//alert ( "testing g="+giorno+" h="+ora+" m="+minuti+" 5C_si");

        if (( giorno < 0 ) || (giorno > 4)) {
            deselezionaClasse(); return;
        }

        //traduce ora:minuti in ora espressa in minuti (dalla mezzanotte)
        const i_oraIng = 8*60 ;
        const i_oraUsc = 14*60 + 18 ;
        var i_orario =  ora*60 + minuti;

        if ((i_orario < i_oraIng ) || (i_orario > i_oraUsc ))  {
            deselezionaClasse();return;
        }

        // orascol è la ora scolastica [ 0 , 7 )
        var oraScol= Math.floor((i_orario - i_oraIng) /54) ;

        if (orario[giorno][oraScol] < 0) {
             deselezionaClasse();alert("non sei in classe");
            return
        }

        selezionaClasseDaIndice(orario[giorno][ora]);
    }


    function oraSelezionata( ora )
    {   //TODO: inserire controllo ora compresa 1-7
//alert("ora selezionat ="+ora);
        var d = new Date();
        var giorno=d.getDay()-1;

//alert ( "g="+giorno+" h="+ora);

        if (orario[giorno][ora] < 0){
            deselezionaClasse();return;
        }
alert("ora chiamo seleziona classe da indice="+orario[giorno][ora]);
        selezionaClasseDaIndice(orario[giorno][ora]);
    }

    function selezionaClasseDaIndice( indice ){
//alert(indice);
        var opzioniClasse=document.querySelectorAll("#ContentPlaceHolderMenu_ddlClassi > optgroup > option");
        opzioniClasse[indice].selected = true;

        // TODO: è veramente necessario? triggera on click su ....
        $( "input[name='ctl00$ContentPlaceHolderBody$Button_RE_Classe_G']").trigger("click");
    }


//****************************************
  // Your code here...
//****************************************

    // aggiunge una barra personalizzata
{    var miaBarra= document.createElement("DIV");
    //var att = document.createAttribute("class");
    //att.value = "RE_TRow_h45";
    //miaBarra.setAttributeNode(att);


    //var containerBar = document.querySelector("#menuRow > div > div.RE_Table_MasterPage");
    var containerBar = document.querySelector("#GlobalContent > div > div:nth-child(2)");
    containerBar.insertBefore(miaBarra,containerBar.childNodes[0]);


   // var headerRow=document.getElementById("headerRow");
    //bottonr ORA
    var button=document.createElement("BUTTON");
    button.style.height = "45px";
    button.style.width = "45px";

    button.addEventListener("click", bottoneOra);
    miaBarra.insertBefore(button, miaBarra.childNodes[0]);




//bottone
    var button_7=document.createElement("BUTTON");
    button_7.innerHTML="7";
    button_7.style.height = "20px";
    button_7.style.width = "20px";
    button_7.addEventListener("click", function() { oraSelezionata(6); });
    miaBarra.insertBefore(button_7, miaBarra.childNodes[0]);
//bottone
    var button_6=document.createElement("BUTTON");
    button_6.innerHTML="6";
    button_6.style.height = "20px";
    button_6.style.width = "20px";
    button_6.addEventListener("click", function() { oraSelezionata(5); });
    miaBarra.insertBefore(button_6, miaBarra.childNodes[0]);
//bottone
    var button_5=document.createElement("BUTTON");
    button_5.innerHTML="5";
    button_5.style.height = "20px";
    button_5.style.width = "20px";
    button_5.addEventListener("click", function() { oraSelezionata(4); });
    miaBarra.insertBefore(button_5, miaBarra.childNodes[0]);
//bottone
    var button_4=document.createElement("BUTTON");
    button_4.innerHTML="4";
    button_4.style.height = "20px";
    button_4.style.width = "20px";
    button_4.addEventListener("click", function() { oraSelezionata(3); });
    miaBarra.insertBefore(button_4, miaBarra.childNodes[0]);
//bottone
    var button_3=document.createElement("BUTTON");
    button_3.innerHTML="3";
    button_3.style.height = "20px";
    button_3.style.width = "20px";
    button_3.addEventListener("click", function() { oraSelezionata(2); });
    miaBarra.insertBefore(button_3, miaBarra.childNodes[0]);
 //bottone
    var button_2=document.createElement("BUTTON");
    button_2.innerHTML="2";
    button_2.style.height = "20px";
    button_2.style.width = "20px";
    button_2.addEventListener("click", function() { oraSelezionata(1); });
    miaBarra.insertBefore(button_2, miaBarra.childNodes[0]);
  //bottone
    var button_1=document.createElement("BUTTON");
    button_1.innerHTML="1";
    button_1.style.height = "20px";
    button_1.style.width = "20px";
    button_1.addEventListener("click", function() { oraSelezionata(0); });
    miaBarra.insertBefore(button_1, miaBarra.childNodes[0]);
}

  // controlla azioni da compiere

        if (sessionStorage.Azione=="SELEZIONA"){
            sessionStorage.Azione="NULLA";
            var indice= sessionStorage.Classe;
//alert( indice);
            sessionStorage.removeItem('Classe');
//alert( eval(indice));
             selezionaClasseDaIndice( eval(indice) );
        }



})();
