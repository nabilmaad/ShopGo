steroids.view.navigationBar.show("Malls in " + window.localStorage.city);

steroids.view.navigationBar.setAppearance({
  tintColor: '#9bce43'
});

var backButton = new steroids.buttons.NavigationBarButton();
backButton.title = "Home"

steroids.view.navigationBar.update({
	backButton: backButton
});

function loadMalls() {

	$.when(getMalls()).done(function(malls) {
  		$.each(malls, function(i, mall){
				mallDiv = '<ul class="list-group">'+
							  '<li class="list-group-item">'+
							    '<a onClick="openLayer(\'/'+window.localStorage.city+'-'+i+'-Stores/index.html\')"><img class="mallLogo" src="'+mall.mallImage+'"><hr></a>'+
							    '<h4 class="list-group-item-heading">'+mall.mallName+'</h4>'+
							    '<p class="list-group-item-text"><a onClick="window.open(\'http://maps.apple.com/?q='+mall.mallAddress+
							    		'\', \'_system\', \'location=yes\')">'+mall.mallAddress+'</a></p>'+
							    '<p class="list-group-item-text"><a href="tel:'+mall.mallPhoneNumber+'">'+mall.mallPhoneNumber+'</a></p>'+
							  '</li>'+
							'</ul>'
					document.getElementById("Malls").innerHTML += mallDiv;
			});
	});

	function getMalls() {
		return $.ajax({
				type: "GET",
				url: "http://54.165.19.180/Malls/"+window.localStorage.city+"_Malls.json",
				dataType: "json",
				crossDomain: true
			});
	}
}

window.addEventListener("load", loadMalls, false);