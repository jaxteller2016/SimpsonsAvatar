document.addEventListener("DOMContentLoaded",function (event) {

var data = document.querySelectorAll(".container");
var buttons = document.querySelectorAll("button");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click",function (event) {
            data.forEach(buttons => console.log(data))
        })
    }

});