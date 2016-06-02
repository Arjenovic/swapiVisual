<!DOCTYPE html>
<html>
<head>
     <meta charset="UTF8">
    <title>Starwars Catalogue</title>

    <!-- CSS -->
    <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
    <link href='css/index.css' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>

    <!-- LOAD (28/05/16) LIBRARIES -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script> <!-- Soft dependency on Jquery -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> 
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js"></script>  -->
</head>

<body>
    <div id='searchContainer' class='container-fluid'>
        <div class='container'>
            <section id='searchSection' class='row'>
                <form id='searchForm' class='col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1' role="search">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Zoek op Star Wars karakter" name="swSearch" id="swSearch">
                        <div class="input-group-btn">
                            <button id='swSearchButton' class="btn btn-default" type="button"><i class="glyphicon glyphicon-search"></i></button> <!-- if TYPE is Submit pagina refreshed -->
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </div>

         <div class='container'>
            <div class='row'>
                <section id='navSection' class='col-md-3'>
                    <h4>Filter</h4>

                    <h3>Geslacht</h3>
                    <ul id='geslachtChecks'>
                        <li><input id='checkMan' type="checkbox" onchange="searchTime()"> Man</li>
                        <li><input id='checkVrouw' type="checkbox" onchange="searchTime()"> Vrouw</li>
                    </ul>

                    <h3>Film</h3>    
                    <ul id='filmChecks'>
                        <li><input id='checkFilm1' type="checkbox" onchange="searchTime()"> A New Hope</li>
                        <li><input id='checkFilm2' type="checkbox" onchange="searchTime()"> The Empire Strikes Back</li>
                        <li><input id='checkFilm3' type="checkbox" onchange="searchTime()"> Return of the Jedi</li>
                        <li><input id='checkFilm4' type="checkbox" onchange="searchTime()"> The Phantom Menace</li>
                        <li><input id='checkFilm5' type="checkbox" onchange="searchTime()"> Attack of the Clones</li>
                        <li><input id='checkFilm6' type="checkbox" onchange="searchTime()"> Revenge of the Sith</li>
                        <li><input id='checkFilm7' type="checkbox" onchange="searchTime()"> The Force Awakens</li>
                    </ul>
                </section> 

                <section id='contentSection' class='col-md-9'>
                    <!-- Dit wordt weergeven wanneer een personage aangeklikt is -->
                    <div id='charInfoContent'>
                        <h4>Gegevens</h4>
                            <div class='row'>
                                <div class='col-md-12'>
                                    <div class='dataBoxGroter'>
                                        <h2 class='dataBoxTitle'>Naam Achternaam</h2>
                                        <span class='dataBoxPlanet'>Planeet</span>
                                        <div class='row'>
                                            <div class='col-md-6'>
                                                <table class="table">
                                                    <tbody>
                                                      <tr>
                                                        <td>Geboortedatum</td>
                                                        <td id='dobCell'><small>00/00/00</small></td>
                                                      </tr>
                                                      <tr>
                                                        <td>Geslacht</td>
                                                        <td id='genderCell'><small>Man</small></td>
                                                      </tr>
                                                      <tr>
                                                        <td>Gewicht</td>
                                                        <td id='weightCell'><small>100</small></td>
                                                      </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class='col-sm-4 col-sm-offset-1 col-xs-offset-1'><!-- Personage foto -->
                                                <div id='dataBoxImage'>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <!-- Einde gegevens pagina --> 

                    <h4 id='resultsTitle'>Resultaten</h4>
                    <div class='row' id="main"> <!-- Hierin komen de dataBoxjes -->
                    </div>
                </section>
            </div>
        </div>

    <footer><?php echo "© " . date("Y") .  " ARJEN VAN GAAL" ?></footer>
</body>
    <!-- LOAD EIGEN JAVASCRIPTS -->
     <script type="text/javascript" src="js/loadData.js"></script> 
    <script type="text/javascript" src="js/search.js"></script> 
    <script type="text/javascript" src="js/showMoreInfo.js"></script>  
</html>
