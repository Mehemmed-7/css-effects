var rangeinput = document.getElementById('range');
var container = document.getElementsByClassName('container') [0];
 
rangeinput.addEventListener("change",function(){
    container.style.filter = "brightness("+ rangeinput.value + "%)"
});