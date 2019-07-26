document.addEventListener("DOMContentLoaded",function (event) {
    var button1 = document.getElementById("button-1");
    var button2 = document.getElementById("button-2");
    var button3 = document.getElementById("button-3");

    var list = document.getElementById("shopping-list");
    var newLi = document.createElement("LI");
    var newLiTxt = document.createTextNode("Bread");
    newLi.appendChild(newLiTxt);

    button1.addEventListener("click",function (event) {
        console.log(this);
        document.getElementById("shopping-list").appendChild(newLi);
    });

    button2.addEventListener("click",function (event) {
        console.log(this);
        list.removeChild(list.lastChild);
    });

    button3.addEventListener("click",function (event) {
        console.log(this);
    });
});
