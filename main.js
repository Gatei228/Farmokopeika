// //проверка телефона
// function phone() {
//     var inp = document.getElementById('phoneId');
//     if(inp.value === "") {
//             inp.style.borderColor =  "rgb(255, 0, 0)";
//         }
//     else{
//             inp.style.borderColor =  "rgb(0, 255, 0)";
//         }
//     }
//     setInterval( phone ,1000)
// //проверка имени 
// function name() {
//     var inp = document.getElementById('nameId');
//     if(inp.value === "") {
//             inp.style.borderColor =  "rgb(255, 0, 0)";
//         }
//         else{
//             inp.style.borderColor =  "rgb(0, 255, 0)";
//         }
//     }
//     setInterval( name ,1000)
// //проверка фамилия
// function surname() {
//     var inp = document.getElementById('surnameId');
//     if(inp.value === "") {
//             inp.style.borderColor =  "rgb(255, 0, 0)";
//         }
//         else{
//             inp.style.borderColor =  "rgb(0, 255, 0)";
//         }
//     }
//     setInterval( surname ,1000)  
// //проверка промокода 
// function promocode() {
//     var inp = document.getElementById('promocodeId');
//     if(inp.value === "") {
//             inp.style.borderColor =  "rgb(255, 0, 0)";
//         }
//         else{
//             inp.style.borderColor =  "rgb(0, 255, 0)";
//         }
//     }
//     setInterval( promocode ,1000)

function validation(form) {
    function removeError(input){
        const parent = input.parentNode;
        if(parent.classList.contains('error')){
            parent.querySelector('.error-lable').remove()
            parent.classList.remove('error')
        }
    }
    function createError(input,text){
        const parent = input.parentNode;
        const labelError = document.createElement("label")
        labelError.classList.add("error-lable")
        labelError.textContent = text
        parent.classList.add('error')
        parent.append(labelError)
    } 

    let result = true
    const allInput =  form.querySelectorAll('input');

    for(const input of allInput){
        removeError(input)
        if(input.value == ""){
            createError(input,"поле не заполнено");
            result = false
        }
    }  

    
    return result
} 
document.getElementById("add-form").addEventListener("submit" ,function(event){
    event.preventDefault()
    if(validation(this) == true){
        document.querySelector(".popup").style.display = 'none'
        document.querySelector(".registered").style.display = 'flex'
    }
})


// маска 
    $(function(){
        $("#phoneId").mask("+7(999) 999-99-99");
    });
//дабовление 
    $(function() {
        $("#add").click(function(e) {
            e.preventDefault();
            $("#pole_promocode").append("<input type='text' id='promocode'>");
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
    for (let i = 0; i < 101; i++) {
        $("#Winners_ul").append("<div class='Winners_ul_element'> <p class='WinName'>Кристина К</p><p class='WinTel'>+7(***)***-34-52</p><p class='WinGift'>Анатомическая подушка</p></div>");
      }

//открытие popup
    document.getElementById("button_promo_code").addEventListener("click",function(){
    document.getElementById("popup").classList.add("open");
    });
    document.getElementById("button_promo_code_2").addEventListener("click",function(){
    document.getElementById("popup").classList.add("open");
    });
    document.getElementById("button_promo_code_3").addEventListener("click",function(){
     document.getElementById("popup").classList.add("open");
    });
//закрытие popup
    document.getElementById("close-btn").addEventListener("click",function(){
    document.getElementById("popup").classList.remove("open");
    });
    document.getElementById("close-btn2").addEventListener("click",function(){
    document.getElementById("popup").classList.remove("open");
    });
//убрать бургер меню после нажатия 
giftButtonId.onclick = howToPlayAnchorId.onclick = winAnchorId.onclick = QuestionsAndAnswers_ahchor.onclick = function(){
    document.getElementById("burger_checkbox").checked = false;
};

button_promo_code.onclick = function() {
    document.getElementById("burger_checkbox").checked = false;
    let bodyScrol = document.getElementById('scrolOff');
    bodyScrol.style.overflow = "auto";
}

// убрать скрол 
document.getElementById("burger_checkbox").onclick = function () {
    let scrol = document.getElementById("burger_checkbox").checked
    let bodyScrol = document.getElementById('scrolOff');
    if ( scrol == true ){
        bodyScrol.style.overflow = "hidden";
    }
    else{
        bodyScrol.style.overflow = "auto";
    }
}



// document.querySelector('body').style.overlay = "hiddwen";


// const mediaQuery = window.matchMedia('(max-width: 1024px)')
// if (mediaQuery.matches) {
//     $("#Winners_ul").append("");
// }
    