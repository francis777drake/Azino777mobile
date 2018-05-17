const GlobalConfigs = {
  pageTitle: "AZINO777",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "https://azmnp.com/promo/click/5af95a69e103e",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"https://azmnp.com/promo/click/5af95a69e103e"},
    {
      icon: 'list', text: 'Видео',
      url: "https://azmnp.com/promo/click/5af95a69e103e", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"https://azmnp.com/promo/click/5af95a69e103e"},
    {
      icon: 'info', text: 'О нас',
      url: "https://azmnp.com/promo/click/5af95a69e103e"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "https://azmnp.com/promo/click/5af95a69e103e"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "deep-purple lighten-3", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



