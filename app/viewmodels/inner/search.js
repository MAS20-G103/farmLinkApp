define(["durandal/app"], function (app) {
  var page = function () {
    var self = this;

    self.search = {
      route: "",
      icon: "./images/icons/search.svg",
      placeholder: "Pesquisar produtos e produtores",
    };

    //self.apiSrc = 'https://www.openstreetmap.org/export/embed.html?bbox=-8.92460629809648%2C40.529420596416436%2C-8.483093236573042%2C40.71157642738315&amp;layer=mapnik';
    self.apiSrc =
      "https://www.google.com/maps/embed/v1/search?q=hortas%20pr%C3%B3ximas%20de%20em%20Aveiro%2C%20Portugal&center=40.640506,-8.653754&zoom=11&key=AIzaSyDrmdMb-gmHFWqMKtOsv2L6edkW7AxmMy4";

    this.activate = function () {};
  };

  return page;
});
