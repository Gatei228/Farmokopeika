//проверка телефона
function phone() {
    var inp = document.getElementById('phoneId');
    if(inp.value === "") {
            inp.style.borderColor =  "rgb(255, 0, 0)";
        }
    else{
            inp.style.borderColor =  "rgb(0, 255, 0)";
        }
    }
    setInterval( phone ,1000)
//проверка имени 
function name() {
    var inp = document.getElementById('nameId');
    if(inp.value === "") {
            inp.style.borderColor =  "rgb(255, 0, 0)";
        }
        else{
            inp.style.borderColor =  "rgb(0, 255, 0)";
        }
    }
    setInterval( name ,1000)
//проверка фамилия
function surname() {
    var inp = document.getElementById('surnameId');
    if(inp.value === "") {
            inp.style.borderColor =  "rgb(255, 0, 0)";
        }
        else{
            inp.style.borderColor =  "rgb(0, 255, 0)";
        }
    }
    setInterval( surname ,1000)  
//проверка промокода 
function promocode() {
    var inp = document.getElementById('promocodeId');
    if(inp.value === "") {
            inp.style.borderColor =  "rgb(255, 0, 0)";
        }
        else{
            inp.style.borderColor =  "rgb(0, 255, 0)";
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
            $("#pole_promocode").append("<input type='text' id='promocode' required>");
        });
    });
// скрывать элимент
      const a = new Date()
      const b = new Date(2022, 11, 1)

      if (a <= b){
        var win = document.querySelector('.liWin');
        win.style.display = "none";
        var win = document.querySelector('.Winners');
        win.style.display = "none";
        var win = document.querySelector('.QuestionsAndAnswers');
        win.style.marginTop = "500px"
        console.log(win.style)

      }
// победители
    for (let i = 0; i < 60; i++) {
        $("#Winners_ul").append("<div class='Winners_ul_element'> <p class='WinName'>Кристина К</p><p class='WinTel'>+7(***)***-34-52</p><p class='WinGift'>Анатомическая подушка</p></div>");
      }



//открытие popup
    document.getElementById("button_promo_code").addEventListener("click",function(){
    document.getElementById("popup").classList.add("open");
    });
    document.getElementById("button_promo_code_2").addEventListener("click",function(){
    document.getElementById("popup").classList.add("open");
    });
//закрытие popup
    document.getElementById("close-btn").addEventListener("click",function(){
    document.getElementById("popup").classList.remove("open");
    });

    