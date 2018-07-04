$(function() {
    $.mask.definitions['~'] = "[+-]";

    $("#phone").mask("+9 (999) 999-9999");
    $("#regPhone").mask("+9 (999) 999-9999");
    });

function showpassreg(){
    var showpass=document.getElementById('regPassword');
    var showpassre=document.getElementById('reRegPassword');
    if (showpass.type === "password" && showpassre.type === "password") {
        showpass.type = "text";
        showpassre.type ="text";
         } 
    else {
        showpass.type = "password";
        showpassre.type = "password";
         }

    }

var valpass=document.getElementById('valpass');
    setInterval(function () {
     var regPassword=document.getElementById('regPassword').value;
     var reRegPassword=document.getElementById('reRegPassword').value;
   
    if (regPassword == 0  && reRegPassword == 0) {
        valpass.style.color = "#ff0000";
        valpass.innerHTML="Нет пароля";
    }
    else if (regPassword == reRegPassword){
        valpass.style.color = "green";
        valpass.innerHTML="OK";
    }
    else{
        valpass.style.color = "#ff0000";
        valpass.innerHTML="Пароли не совпадают";
    }
    
}, 500);