steroids.view.navigationBar.show({
    titleImagePath: "/img/AppTitle.png"
});

steroids.view.navigationBar.setAppearance({
  tintColor: '#9bce43'
});

if(!window.localStorage.city) {
	steroids.tabBar.selectTab(1);
}