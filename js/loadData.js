
//Begin pagina om te laden
$("#charInfoContent").hide();
var dataURL = "http://swapi.co/api/people/?format=json";
var currentPersonID = 0;
var totalDataCount;

$(document).ready(function(){
		dataOphalen(); //eerste data inladen		
});

function dataOphalen(){
    $.getJSON(dataURL, function(result){
        //aantal data ophalen en in variable gooien
        totalDataCount = result.count;

    	//Laat individuele data zien p.p.
        $.each(result.results, function(i, field){
        	//Verhoog Persoonlijk ID met 1
        	currentPersonID++;
            
        	//Check welke planeet deze individueel vandaan komt
        	planetCheck(currentPersonID, field.homeworld);

            $("#main").append("<div gender='" + field.gender + "' weight='" + field.mass + "' dob='"+ field.birth_year + "' id='searchResult" + currentPersonID + "' class='searchResult col-sm-6 col-md-4 gender-" + field.gender + "'><div class='dataBox'>"  + "<h2 class='dataBoxTitle'>" + field.name + "</h2>" 
    								   + "<span id='PersonID" + currentPersonID + "' class='dataBoxPlanet'>Loading..</span>" //Geef een unieke ID zodat we de planeet later hieraan kunnen koppelen
    								   + "</div></div>");

            //pak het planeet nummer van de url
            var planetNummer = field.homeworld.split('/').reverse()[1];
            //Voeg het toe aan de searchresult DMV class
            $("#searchResult" + currentPersonID).addClass("planet-" + planetNummer);

             //Haal op de film API urls
            $.each(field.films, function(index, value){
                //Pak het film nummer van de url
                var filmNummer = value.split('/').reverse()[1];

                //Voeg het toe aan de searchresult DMV class
                $("#searchResult" + currentPersonID).addClass("film-" + filmNummer);
            });

            //ShowMoreInfo.js click evenement toevoegen
            showMoreInfo(currentPersonID);
        });

       //Verander dataURL naar de volgende pagina
        dataURL = result.next;
        //console.log(dataURL);

        //Check of er nog meer data is, en voeg eventueel toe
        dataCheck();
    });	
}

function dataCheck(){
		//Als volgende pagina bestaat, nog meer data ophalen
		if(dataURL == null){
        	console.log("Einde van de data bereikt.");
        }else{
        	//console.log("Er bestaat nog meer data.");
        	dataOphalen();
        }	
}

function planetCheck(currentPersonID, planetURL){
	$.getJSON(planetURL, function(result){
		$("#PersonID" + currentPersonID).html("Planeet " + result.name);
	});	
}

