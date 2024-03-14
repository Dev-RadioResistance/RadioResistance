/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var print = false ;
var request ;
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
