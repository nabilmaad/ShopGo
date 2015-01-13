steroids.view.navigationBar.setAppearance({
  tintColor: '#9bce43'
});

var backButton = new steroids.buttons.NavigationBarButton();
backButton.title = "Home"

steroids.view.navigationBar.update({
	backButton: backButton
});


function loadPremiumAd() {

	$.when(getPremiumAd()).done(function(premiumAd) {
		steroids.view.navigationBar.show(premiumAd.salesShortDescription);

		premiumAdDiv = '<img class="img-responsive" src="'+premiumAd.saleImage+'" style="margin-bottom: 3em;">'+
						'<div class="panel panel-default">'+
						  '<div class="panel-heading">'+
						    '<h3 class="panel-title">Description</h3>'+
						  '</div>'+
						  '<div class="panel-body">'+premiumAd.saleLongDescription+'</div>'+
						'</div>'
		document.getElementById("PremiumAd").innerHTML = premiumAdDiv;
	});

	function getPremiumAd() {
		return $.ajax({
				type: "GET",
				url: "http://54.165.19.180/Sales/Ottawa/PremiumAd.json",
				dataType: "json",
				crossDomain: true
			});
	}
}

window.addEventListener("load", loadPremiumAd, false);