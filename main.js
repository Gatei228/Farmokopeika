//проверка телефона
function phone() {
    var inp_tel = document.getElementById('phoneId');
    if(inp_tel.value === "") {
            inp_tel.style.borderColor =  "rgb(255, 0, 0)";
            console.log("cerf")
        }
    else{
            inp_tel.style.borderColor =  "rgb(0, 255, 0)";
        }
    }
    setInterval( phone ,1000)
//проверка имени 
function name() {
    var inp_tel = document.getElementById('nameId');
    if(inp_tel.value === "") {
            inp_tel.style.borderColor =  "rgb(255, 0, 0)";
        }
        else{
            inp_tel.style.borderColor =  "rgb(0, 255, 0)";
        }
    }
    setInterval( name ,1000)
//проверка фамилия
function surname() {
    var inp_tel = document.getElementById('surnameId');
    if(inp_tel.value === "") {
            inp_tel.style.borderColor =  "rgb(255, 0, 0)";
        }
        else{
            inp_tel.style.borderColor =  "rgb(0, 255, 0)";
        }
    }
    setInterval( surname ,1000)  
//проверка промокода 
function promocode() {
    var inp_tel = document.getElementById('promocodeId');
    if(inp_tel.value === "") {
            inp_tel.style.borderColor =  "rgb(255, 0, 0)";
        }
        else{
            inp_tel.style.borderColor =  "rgb(0, 255, 0)";
        }
    }
    setInterval( promocode ,1000)
// маска 
    $(function(){
        $("#phoneId").mask("+7(999) 999-99-99");
    });
//дабовление 
    $(function() {
        $("#add").click(function(e) {
            e.preventDefault();
            $("#pole_promocode").focus().append("<input type='text' id='promocode' required>");
        });
    });
//открытие popup
    document.getElementById("button_promo_code").addEventListener("click",function(){
    document.getElementById("popup").classList.add("open");
    });
//закрытие popup
    document.getElementById("close-btn").addEventListener("click",function(){
    document.getElementById("popup").classList.remove("open");
    });

    