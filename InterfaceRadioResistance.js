/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var print = false ;
    var request ;
    var actu = 0 ;

    var gdist = 38;

    var audios = ["Emission1.mp3","Emission2.mp3","Emission3.mp3","Emission4.mp3","Emission5.mp3"] ; 
    var dates = [4,24,26,2];
    var nB = audios.length-1;

    function toggleRadio(request){
        if ((print === false) &&(request===true)){
            document.getElementById("page").style.display = "none" ;
            document.getElementById("AppareilRadio").style.display = "block" ;
            print = true ;
        }
         if ((print === true) &&(request===false)){
            document.getElementById("page").style.display = "block" ;
            document.getElementById("AppareilRadio").style.display = "none" ;
            print = false ;
        }
    }

    function Play(){
      var music = new Audio('musicfile.mp3');
      music.play();
      }

    function Piste(direc){
        if (direc === true){
            actu +=1 ;
            document.getElementById("ASong").children[0].src = audios[actu];
            document.getElementById("FlecheGauche").style.visibility = "visible" ;
            gdist -= dates[actu-1] ;
            document.getElementById("frise").style.left = String(gdist)+"%" ;
            if (actu === nB){
                document.getElementById("FlecheDroite").style.visibility = "hidden" ;
            }
        }
        else {
            actu -=1 ;
            document.getElementById("ASong").children[0].src = audios[actu];
            document.getElementById("FlecheDroite").style.visibility = "visible" ;
            gdist += dates[actu] ;
            document.getElementById("frise").style.left = String(gdist)+"%" ;
            if (actu === 0){
                document.getElementById("FlecheGauche").style.visibility = "hidden" ;
            }
        }
    }



