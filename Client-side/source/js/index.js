function returnValue() {
    var select = document.getElementById("lookingShape");
    var valeur = select.options[select.selectedIndex].value;
    switch(valeur){
        case 'none' :
            alert (valeur);
            break;
        case 'rect' :
            alert (valeur);
            break;
        case 'circle' :
            alert (valeur);
            break;
        case 'ellipse' :
            alert (valeur);
            break;
        case 'line' :
            alert (valeur);
            break;
        case 'polyline' :
            alert (valeur);
            break;
        case 'polygone' :
            alert (valeur);
            break;
    }

    var colorValue = document.getElementById("color").value;
    // if(colorValue == "") {

    //     // alert("Pas de couleur choisie");
    // } else {
    //     // alert(colorValue);
    // }

    // ici requete ajax qui va faire la requete sur le serveur


    

//Récueperer le path de l'image contenant les infos rechercher et , changer la 
//valeur dasn href !! 
//Recuperer les liens d'image , parcourir les liens et on créer une <im>
//qui récupera le path 

    //Recuperer les paths de la BD
    //Pour test mis les path a la main 
} function testImage(){
    var path = "../../../Server-side/data/dessin.svg";
    var path1 = "../../../Server-side/data/Modele1.svg";
    var path2 = "../../../Server-side/data/Modele2.svg";
    

    var myPath = [path, path1, path2];
    
    for( var i = 0 ; i < myPath.length; i++){
        var elem = document.createElement("img");
        elem.setAttribute("src", myPath[i]);
        elem.setAttribute("height", "500");
        elem.setAttribute("width", "500");
        //On récupère l'id de la div pour insérer les nouveuax élément créer dedans
        document.getElementById("placeImage").appendChild(elem);
    }


}