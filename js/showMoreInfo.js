function showMoreInfo(searchResultId){
	//Click events toevoegen aan alle search results
	$("#searchResult" + searchResultId).click(function(){
		//Laat het vergrote info venster zien
		$("#charInfoContent").fadeIn(500);

		//Haal data op van geklikte div
		var naamClicked = $("#searchResult" + searchResultId + " h2").text();
		var planetClicked = $("#searchResult" + searchResultId + " .dataBoxPlanet").text();
		var dobClicked = $("#searchResult" + searchResultId ).attr("dob");
		var genderClicked = $("#searchResult" + searchResultId ).attr("gender");
		var weightClicked = $("#searchResult" + searchResultId ).attr("weight");

		//Weergeef opgehalen data
		$("#charInfoContent .dataBoxTitle").text(naamClicked);
		$("#charInfoContent .dataBoxPlanet").text(planetClicked);
		$("#dobCell").text(dobClicked);
		$("#genderCell").text(genderClicked);
		$("#weightCell").text(weightClicked);


		//Laat alleen resultaten zien van mensen van dezelfde planeet
		$("#resultsTitle").text("Planeet medebewoners");

		$('.searchResult').fadeOut(0);

		//add resultaten die van dezelfde planeet zijn
		$(".searchResult").each(function() {
	    	var foundPlanet = $(".dataBoxPlanet", this).text();
	    	if (foundPlanet == planetClicked){
	    		$(this).fadeIn(0);
	    	}

		});
	});
}
