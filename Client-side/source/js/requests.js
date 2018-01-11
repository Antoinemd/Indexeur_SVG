$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {

        // on vide ce qu'il y a dans la div
        $( "#placeImage" ).empty();

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formImage = {
            'form_color'              : $('input[name=form_color]').val(),
            'form_shape'             : $( "#lookingShape" ).val(),
        };

        console.log(formImage);

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : '/ajax', // the url where we want to POST
            data        : formImage, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode          : true
        })
        // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data);


                var jes = JSON.stringify(data);


                // $('#data').text(jes);

                var tab = JSON.parse(jes);

                //extraire le path de chaque image
                for(i=0;i<tab.length;i++){

                    console.log(tab[i]['_nom_image']);

                    var oImg = document.createElement("img");

                    oImg.setAttribute('src', './data/'+tab[i]['_nom_image']);
                    oImg.setAttribute('height', '200px');
                    oImg.setAttribute('width', '200px');

                    console.log(oImg);

                    $('#placeImage').append(oImg);
                }


                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});