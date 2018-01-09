function returnValue() {
    var select = document.getElementById("lookingShape");
    var valeur = select.options[select.selectedIndex].value;
    alert(valeur);
}