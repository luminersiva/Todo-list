var abcd = document.getElementById("inputBox");
var add = document.getElementById("submit");
var Listarea = document.getElementById("childbox");

add.addEventListener("click", function () {
    var para = document.createElement("h2");
    para.innerText = abcd.value;
    Listarea.appendChild(para);
    abcd.value = "";

    para.addEventListener("click", function () {
        para.style.color = "red";
        para.style.textDecoration = "line-through";
    });
    para.addEventListener("dblclick", function () {
        Listarea.removeChild(para);
    });
});