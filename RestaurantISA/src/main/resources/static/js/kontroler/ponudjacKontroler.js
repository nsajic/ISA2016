var ponudjacKontroler = angular.module('restoranApp.ponudjacKontroler', []);


ponudjacKontroler.controller('ponudjacCtrl', function(gostGlavnaStranaServis, $scope, ponudjacServisS) {
	
	gostGlavnaStranaServis.koJeNaSesiji().success(function(data) {
		if(data != ""){
			$scope.ulogovanKorisnik = data;
			$scope.imeIzmena = data.ime;
			$scope.prezimeIzmena = data.prezime;
			$scope.emailIzmena = data.email;
			$scope.staraLozinka = data.sifra;
		}else{
			alert("Niko nije ulogovan");
		}
	});
	
	
    $scope.setTab = function(newTab){
    	$scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){   
    	return $scope.tab === tabNum;
    };
    
	$scope.changedValue = function(item) {
		$scope.zaPrikaz = [];
		for (var i = 0; i<$scope.news.length; i++){
			if ($scope.news[i].type == item)
				$scope.zaPrikaz.push($scope.news[i]);
		}
	};
	
	$scope.setTab(1);
	
	$scope.izmeniPonudjaca = function(){
		
		var ponudjac = {
			id : $scope.ulogovanKorisnik.id,
			ime : $scope.imeIzmena,
			prezime : $scope.prezimeIzmena,
			email : $scope.emailIzmena,
			sifra : $scope.staraLozinka
			// DOPUNITI, PROVERITI...
			//sifra : $scope.novaLozinka
		}
		
		var str = JSON.stringify(ponudjac);
		
		ponudjacServisS.izmeni(str).success(function(data) {
			alert("uspeo!");
		}).error(function(data) {
			alert("nisi uspeo!");
		});
	}
	
});