document.getElementById("clearButton").addEventListener("click", function(event) {


    var element = document.getElementsByTagName("div");
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }

    // Let us stop the propagation of events

    event.stopPropagation();
});

addEventListener("click", function(event) {
var dot = document.createElement("div");
var size = document.getElementById("size").selectedOptions[0].value;
dot.className = "dot";
dot.style.background = document.getElementById("color").selectedOptions[0].value;
dot.style.width = size + "px";
dot.style.height = size + "px";
dot.style.left = (event.pageX - Math.floor(size / 2)) + "px";
dot.style.top = (event.pageY - Math.floor(size / 2)) + "px";
document.body.appendChild(dot);
});
