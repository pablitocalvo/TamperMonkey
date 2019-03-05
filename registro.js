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

        var d = new Date(); var t = d.getTime(); var giorno=d.getDay()-1; var ora=d.getHours(); var minuti=d.getMinutes();


        giorno=1;
        ora=9;
        minuti=33;

        if (( giorno < 0 ) || (giorno > 4)) {
            return;
        }

        //traduce ora:minuti in orascolastica € [0,8]
        const i_oraIng = 8*60 ;
        const i_oraUsc = 14*60+18 ;
        const ora_1_start = 8*60+0;
        const ora_1_end = 8*60+53;

        const ora_2_start = 8*60+54;
        const ora_2_end = 9*60+47;

        const ora_3_start = 9*60+48;
        const ora_3_end = 10*60+41;

        const ora_4_start = 10*60+42;
        const ora_4_end = 11*60+35;

        const ora_5_start = 11*60+36;
        const ora_5_end = 12*60+29;


        const ora_6_start = 12*60+30;
        const ora_6_end = 13*60+23;

        const ora_7_start = 13*60+24;
        const ora_7_end = 14*60+18;


        var i_orario =  ora*60 + minuti;

        var ora_lezione;

        if ((i_orario < i_oraIng ) || (i_orario > i_oraUsc )){
            alert();return;
        }

             if ((ora_1_start <= i_orario) && ( i_orario < ora_2_start))
                                {ora_lezione = 1 ;}
        else if ((ora_2_start <= i_orario) && ( i_orario < ora_3_start))
                                {ora_lezione = 2 ;}
        else if ((ora_3_start <= i_orario) && ( i_orario < ora_4_start))
                                {ora_lezione = 3 ;}
        else if ((ora_4_start <= i_orario) && ( i_orario < ora_5_start))
                                {ora_lezione = 4 ;}
        else if ((ora_5_start <= i_orario) && ( i_orario < ora_6_start))
                              { ora_lezione = 5 ;}
        else if ((ora_6_start <= i_orario) && ( i_orario < ora_7_start))
                             { ora_lezione = 6 ;}
        else if ((ora_7_start <= i_orario) && ( i_orario < ora_7_end))
                             {ora_lezione = 7 ;}




        // orario[giorno , ora ]
        var orario = [[  -1 , _5Cs, _5Bs, _4Bs,  -1 ,  -1  ,  -1   ], //lunedi
                      [ _5Bt, _4Ct, _4Bt,  -1 ,  -1 ,  -1  ,  -1   ], //martedi
                      [ _5Ct, _5Ct, _4Bs, _4Cs,  -1 ,  -1  ,  -1   ], //mercoledi
                      [ _4Cs, _3Bs, _3Bs,  -1 ,  -1 ,  -1  ,  -1   ], //giovedi
                      [ _4Bt, _5Bs, _4Ct,  -1 ,  -1 , _5Bt , _5Cs  ], //venerdi
                     ];

        var classeSelect=document.getElementById("ContentPlaceHolderMenu_ddlClassi");

        //alert("selezionato="+classeSelect.options[classeSelect.selectedIndex].text);

        alert("g ="+giorno+"ora="+ora_lezione+" idnex="+orario[giorno][oraScol]);

        if (orario[giorno][ora_lezione] < 0) {
            alert("non sei in classe");
            return
        }

        classeSelect.selectedIndex= orario[giorno][oraScol];
         //$( "#ContentPlaceHolderMenu_ddlClassi" ).trigger("change");

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
