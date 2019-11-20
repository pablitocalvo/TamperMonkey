// ==UserScript==
// @name         Registro
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://re22.axioscloud.it/Secret/REMenu.aspx*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function bottoneOnClick(){

        const _3Bs = 0; const _4Bs = 1; const _4Bt = 2; const _4Cs = 3;const _4Ct = 4; const _5Bs = 5; const _5Bt = 6; const _5Cs = 7; const _5Ct = 8;

        var d = new Date();
        var t = d.getTime();
        var giorno=d.getDay()-1;
        var ora=d.getHours();
        var minuti=d.getMinutes();


        //giorno=2;
        //ora=12;
        //minuti=23;
        //alert ( giorno+" "+ora+" "+minuti);
        if (( giorno < 0 ) || (giorno > 4)) {
            return;
        }

        //traduce ora:minuti in orascolastica € [0,8]
        const i_oraIng = 8*60 ;
        const i_oraUsc = 14*60 + 18 ;
        var i_orario =  ora*60 + minuti;

        if ((i_orario < i_oraIng ) || (i_orario > i_oraUsc ))  {
           return;
        }

        var oraScol= Math.floor((i_orario - i_oraIng) /54) ;

        // orario[giorno , ora ]
        var orario = [[  -1  ,   -1 ,   -1 ,  -1 ,  -1  , _5Ct , _5Cs   ], //lunedi
                      [  -1  ,   -1 , _4Ct , _5Bs, _5Bt ,  -1  , _4Bs   ], //martedi
                      [ _5Cs , _4Bs , _5Ct , _4Cs, _4Cs ,  -1  ,  -1    ], //mercoledi
                      [  -1  , _5Bt , _3Bs , _4Bt,  -1  , _5Bs , _3Bs   ], //giovedi
                      [  -1  ,   -1 ,   -1 ,  -1 , _4Ct , _4Bt , -1     ], //venerdi
                     ];

        var classeSelect=document.getElementById("ContentPlaceHolderMenu_ddlClassi");

        //alert("selezionato="+classeSelect.options[classeSelect.selectedIndex].text);

        //alert("g ="+giorno+"ora="+oraScol+" idnex="+orario[giorno][oraScol]);

        if (orario[giorno][oraScol] < 0) {
            alert("non sei in classe");
            return
        }

        alert(classeSelect.length)
        var delta_primo_accesso ;
        if (classeSelect.length=10) {
            delta_primo_accesso=1}
        else {
            delta_primo_accesso=0};

        classeSelect.selectedIndex= orario[giorno][oraScol]+ delta_primo_accesso;
        //classeSelect.selectedIndex= 0;
         //$( "#ContentPlaceHolderMenu_ddlClassi" ).trigger("change");

       // for (var i=0; i<9; i++) alert( classeSelect[i].innerHTML);


        // ora bisgno triggerare onClick sul registro ....
       $( "input[name='ctl00$ContentPlaceHolderBody$Button_RE_Classe_G']").trigger("click");
      //  $(document).trigger("onclick");
    }


    // Your code here...
    var headerRow=document.getElementById("headerRow");
    var button=document.createElement("BUTTON");
    button.style.height = "45px";
    button.style.width = "45px";

    button.addEventListener("click", bottoneOnClick);
    headerRow.insertBefore(button, headerRow.childNodes[0]);



})();
