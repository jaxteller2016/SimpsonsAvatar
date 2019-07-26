document.addEventListener("DOMContentLoaded",function (event) {
    var tags = document.getElementsByClassName("sample_class");

    function getClass(sample_class) {
        var result = document.getElementsByClassName(sample_class);
        var arr = [];
        for (var i = 0; i < result.length; i++) {
            arr.push(result[i].tagName)
        }
        return arr;
    }

    getClass("sample_class");

    function getTag(element) {

        var arr = [];
        for (var i = 0; i < element.classList.length; i++) {
            arr.push(element.classList[i]);
        }
        return arr;
    }

    var sampleId = document.getElementById("sample_id");
    console.log(getTag(sampleId));

    var class2 = document.querySelectorAll(".sample_class_2 li");
    function getInnerText(elements) {
        var arr = [];
        for (var i = 0; i < elements.length; i++) {
            arr.push(elements[i].innerText)
        }
        return arr;
    }
    var classic = getInnerText(class2);

    function getAddress(elements) {
    }
    var as = document.querySelectorAll("a");
    var arr = [];
    for (var i = 0; i < as.length; i++) {
        var val = as[i].getAttribute("href");
        arr.push(val);
    }
    console.log(getAddress(as));
})



