// Variables for calling store and mall
storeTapped = window.localStorage.store;
mallTapped = window.localStorage.mall;

// Navigation Bar
steroids.view.navigationBar.show(storeTapped + " Sales");

steroids.view.navigationBar.setAppearance({
  tintColor: '#9bce43'
});

var backButton = new steroids.buttons.NavigationBarButton();
backButton.title = "Stores"

steroids.view.navigationBar.update({
	backButton: backButton
});

// Load sales of the store
$.when(getSalesOfStore(mallTapped)).done(function(sales) {
		$.each(sales, function(i, sale){
			if(sale.saleStore == storeTapped) {
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
		}
	});
		// No sales found
		if(document.getElementById("Sales").innerHTML == "" || document.getElementById("Sales").innerHTML == "\n") {
			document.getElementById("Sales").innerHTML += '<a class="list-group-item" style="margin-top:50%">'+
														  	'<div class="container">'+
														      '<div class="row">'+
														        '<div class="col-xs-4">'+
														          '<img class="storeLogo" src="http://54.165.19.180/Sales/Images/Sad-face.jpg" align="left">'+
														        '</div>'+
														        '<div class="col-xs-8">'+
														          '<h4 class="list-group-item-heading">No Sales Available!</h4>'+
														          '<p class="list-group-item-text">Check back later</p>'+
														        '</div>'+
														      '</div>'+
														    '</div>'+
														  '</a>'
		}
});

// Clear storage
window.localStorage.store = null;
window.localStorage.mall = null;

function getSalesOfStore(storeMall) {
	return $.ajax({
			type: "GET",
			url: "http://54.165.19.180/Sales/"+window.localStorage.city+"/" + storeMall + ".json",
			dataType: "json",
			crossDomain: true
		});
}