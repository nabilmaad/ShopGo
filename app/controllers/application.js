// Set app background
steroids.view.setBackgroundColor("#000000");

function openLayer(location) {
  // Create a new WebView that...
  webView = new steroids.views.WebView({ location: "views" + location });

  // ...is pushed to the navigation stack, opening on top of the current WebView.
  steroids.layers.push({ view: webView });
}

function openLayerOfSalesInStore(storeName, storeMall) {
  // Save names store and mall tapped
  window.localStorage.store = storeName;
  window.localStorage.mall = storeMall;

  // Push generic view
  webView = new steroids.views.WebView({ location: "/views/Store-Sales/index.html"});
  steroids.layers.push({ view: webView });
}

function openModal(location) {
  // Create a new WebView that...
  webView = new steroids.views.WebView({ location: "/views" + location });

  // ...opens as a modal screen on top of the current WebView.
  steroids.modal.push({ view: webView });
}

function hideModal() {
  // Hide a currently open modal
  steroids.modal.hide();
}
