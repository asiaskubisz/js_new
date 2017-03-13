var buttonNamesByClass = document.getElementsByClassName('button');
console.log(buttonNamesByClass);
for (k = 0; k < buttonNamesByClass.length; k++) {
    var tab = document.getElementsByClassName("button")[k].textContent;
alert(tab)
}
