steroids.view.navigationBar.show("Stores in Metropolis at Metrotown");

steroids.view.navigationBar.setAppearance({
  tintColor: '#9bce43'
});

var backButton = new steroids.buttons.NavigationBarButton();
backButton.title = "Malls"

steroids.view.navigationBar.update({
	backButton: backButton
});

function loadStores() {

	$.when(getStoresOfMetropolisMetrotown()).done(function(stores) {
  		$.each(stores, function(i, store){
				storeDiv = '<a id="'+store.storeName[0]+'" href="#" class="list-group-item">'+
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
	});

	function getStoresOfMetropolisMetrotown() {
		return $.ajax({
				type: "GET",
				url: "http://54.165.19.180/Stores/Vancouver/MetropolisMetrotown.json",
				dataType: "json",
				crossDomain: true
			});
	}
}
window.addEventListener("load", loadStores, false);