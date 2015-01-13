steroids.view.navigationBar.show("Settings");

steroids.view.navigationBar.setAppearance({
  tintColor: '#9bce43'
});

window.addEventListener("load", function() {

	var input = document.getElementById("saveCity");
	input.addEventListener('click', saveCity, false);

	function saveCity() {
		// Save the city
		var cityChosen = document.getElementById("day-button").children[0].innerHTML;
		window.localStorage.city = cityChosen;

		// Display confirmation
		navigator.notification.alert(
		    'You picked ' + cityChosen,  // message
		    alertDismissed,         // callback
		    'Sucess!',            // title
		    'Done'                  // buttonName
		);

		//steroids.tabBar.selectTab(0);

		function alertDismissed() {}
	}
});