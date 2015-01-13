steroids.view.navigationBar.show("Sales in " + window.localStorage.city);

steroids.view.navigationBar.setAppearance({
  tintColor: '#9bce43'
});

var backButton = new steroids.buttons.NavigationBarButton();
backButton.title = "Home"

steroids.view.navigationBar.update({
	backButton: backButton
});


function loadAllSales() {

	unsortedJson = {};

	if(window.localStorage.city == "Ottawa") {
		$.when(addSalesOfBayshore(), addSalesOfRideauCentre(), addSalesOfStLaurent()).done(function(sales1, sales2, sales3) {
	  		$.extend(unsortedJson, sales1[0], sales2[0], sales3[0]);
	  		sortAndPrint(unsortedJson);
		});
	}
	
	function addSalesOfBayshore() {
		return $.ajax({
				type: "GET",
				url: "http://54.165.19.180/Sales/Ottawa/Bayshore.json",
				dataType: "json",
				crossDomain: true
			});
	}

	function addSalesOfRideauCentre() {
		return $.ajax({
				type: "GET",
				url: "http://54.165.19.180/Sales/Ottawa/RideauCentre.json",
				dataType: "json",
				crossDomain: true
			});
	}

	function addSalesOfStLaurent() {
		return $.ajax({
				type: "GET",
				url: "http://54.165.19.180/Sales/Ottawa/StLaurent.json",
				dataType: "json",
				crossDomain: true
			});
	}

	function sortAndPrint(unsortedJson) {

		sortedKeys = Object.keys(unsortedJson).sort().reverse();
		sortedJson = {};

		$.each(sortedKeys, function(i, key) {
			sortedJson[sortedKeys[i]] = unsortedJson[sortedKeys[i]];
		});

		$.each(sortedJson, function(i, sale){
			saleDiv = '<a href="#" class="list-group-item">'+
					  	'<div class="container">'+
					      '<div class="row">'+
					        '<div class="col-xs-4">'+
					          '<img class="storeLogo" src="'+sale.saleThumbnail+'" align="left">'+
					        '</div>'+
					        '<div class="col-xs-8">'+
					          '<h4 class="list-group-item-heading">'+sale.saleStore+'</h4>'+
					          '<p class="list-group-item-text">'+sale.saleShortDescription+'</p>'+
					        '</div>'+
					      '</div>'+
					    '</div>'+
					  '</a>'
			document.getElementById("Sales").innerHTML += saleDiv;
		});
	}
}

window.addEventListener("load", loadAllSales(), false);