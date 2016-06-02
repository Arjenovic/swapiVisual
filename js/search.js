
var fadeTime = 0;

//Wat te doen als er op Enter wordt gedrukt
$('#searchForm').on('keyup keypress', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) { 
  	e.preventDefault();
  	//return false;
  	searchTime();     
  }
});

//Wat te doen als er op search gedrukt wordt
$("#swSearchButton").click(function(){
	//Search value pakken
	searchTime();
});

//On checkbox change && zoekterm searchbutton:
function searchTime(){
	//Vergrote kader verstoppen
	$("#charInfoContent").hide();
	$("#resultsTitle").text("Resultaten");
	
	//Zoekterm pakken - Eerst kijken of er matches zijn met de zoekterm
	var searchValue = $("#swSearch").val();

	//Alle resultaten analyseren en kijken of ze matchen met de Zoekterm
	$(".searchResult").each(function() {
    	var termToSearch = $("h2", this).text();

    	//Als ze matchen
		if (termToSearch.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0){
			//Assign class "searchOn" als het matched
			$(this).addClass("searchOn");
		}else{
			$(this).removeClass("searchOn");
		}
	});

	//Kijken OF er filter knopjes aanstaan voor Film OF Gender
	if($("#filmChecks input[type=checkbox]:checked").length || $("#geslachtChecks input[type=checkbox]:checked").length){
		
		//Als er knopjes voor Film filters aanstaan
		if($("#filmChecks input[type=checkbox]:checked").length){
			//Alle film filter knopjes checken
			for(i=1; i<=7; i++){
				//Als bepaald film knopje is aangevinkt
				if($('#checkFilm' + i).prop('checked')) {

					//Vind man en vrouw karakters die keyword EN betreffende film matchen
					$('.searchOn.film-' + i).addClass("searchOn"); //Laat karakters zien die in betreffende film spelen

					//TODO: remove SearchOn class voor karakters die niet zowel in film spelen als de zoekterm matchen
					$(".searchOn").not(".film-" + i).removeClass("searchOn");
				}
			}			
		}

		//Als er knopjes voor Gender filters aanstaan
		if($("#geslachtChecks input[type=checkbox]:checked").length){
			//Gender filter knopjes checken
			if($("#checkMan").prop('checked')) {
				//alle results dat geen .gender-male hebben, verliezen de .searchOn klas
				$(".searchOn").not(".gender-male").removeClass("searchOn");
			}
			if($("#checkVrouw").prop('checked')) {
				//alle results dat geen .gender-male hebben, verliezen de .searchOn klas
				$(".searchOn").not(".gender-female").removeClass("searchOn");
			}
		}
	}

	//Laat alles verdwijnen
	$('.searchResult').fadeOut(fadeTime); 

	//Laat alles zien met de search on klas
	$('.searchOn').fadeIn(fadeTime); 
}



