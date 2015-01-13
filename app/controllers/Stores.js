steroids.view.navigationBar.show("Stores in " + window.localStorage.city);

steroids.view.navigationBar.setAppearance({
  tintColor: '#9bce43'
});

var backButton = new steroids.buttons.NavigationBarButton();
backButton.title = "Home"

steroids.view.navigationBar.update({
	backButton: backButton
});

function loadAllStores() {

	unsortedJson = {};

	if(window.localStorage.city == "Ottawa") {
		$.when(addStoresOfBayshore(), addStoresOfRideauCentre(), addStoresOfStLaurent()).done(function(stores1, stores2, stores3) {
  			$.extend(unsortedJson, stores1[0], stores2[0], stores3[0]);
  			sortAndPrint(unsortedJson);
		});
	}
	else if(window.localStorage.city == "Vancouver") {
		$.when(addStoresOfMetropolisMetrotown(), addStoresOfParkRoyal()).done(function(stores1, stores2) {
  			$.extend(unsortedJson, stores1[0], stores2[0]);
  			sortAndPrint(unsortedJson);
		});
	}

	// Ottawa Malls
	function addStoresOfBayshore() {
		return $.ajax({
				type: "GET",
				url: "http://54.165.19.180/Stores/Ottawa/Bayshore.json",
				dataType: "json",
				crossDomain: true
			});
	}

	function addStoresOfRideauCentre() {
		return $.ajax({
				type: "GET",
				url: "http://54.165.19.180/Stores/Ottawa/RideauCentre.json",
				dataType: "json",
				crossDomain: true
			});
	}

	function addStoresOfStLaurent() {
		return $.ajax({
				type: "GET",
				url: "http://54.165.19.180/Stores/Ottawa/StLaurent.json",
				dataType: "json",
				crossDomain: true
			});
	}

	// Vancouver Malls
	function addStoresOfMetropolisMetrotown() {
		return $.ajax({
				type: "GET",
				url: "http://54.165.19.180/Stores/Vancouver/MetropolisMetrotown.json",
				dataType: "json",
				crossDomain: true
			});
	}

	function addStoresOfParkRoyal() {
		return $.ajax({
				type: "GET",
				url: "http://54.165.19.180/Stores/Vancouver/ParkRoyal.json",
				dataType: "json",
				crossDomain: true
			});
	}

	function sortAndPrint(unsortedJson) {

		sortedKeys = Object.keys(unsortedJson).sort();
		sortedJson = {};

		$.each(sortedKeys, function(i, key) {
			sortedJson[sortedKeys[i]] = unsortedJson[sortedKeys[i]];
		});

		$.each(sortedJson, function(i, store){
			storeDiv = '<a id="'+store.storeName[0]+'" onClick="openLayerOfSalesInStore(\''+store.storeName+'\',\''+store.storeMall+'\')" class="list-group-item">'+
					    '<div class="container">'+
					      '<div class="row">'+
					        '<div class="col-xs-4" position="relative">'+
					          '<img class="storeLogo" src="'+store.storeImage+'" align="left">'+
					        '</div>'+
					        '<div class="col-xs-8">'+
					          '<h4 class="list-group-item-heading">'+store.storeName+'</h4>'+
					          '<p class="list-group-item-text">'+store.storeCategories+'</p>'+
					        '</div>'+
					      '</div>'+
					    '</div>'+
					  '</a>'
			document.getElementById("Stores").innerHTML += storeDiv;
		});
	}
}

window.addEventListener("load", loadAllStores, false);