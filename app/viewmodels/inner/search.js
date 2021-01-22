define(['durandal/app'], function (app) {
    var page = function () {

        var self = this;

        self.search = {
            route: '',
            icon: './images/icons/search.svg',
            placeholder: 'Pesquisar produtos e produtores'
        }

        //self.apiSrc = 'https://www.openstreetmap.org/export/embed.html?bbox=-8.92460629809648%2C40.529420596416436%2C-8.483093236573042%2C40.71157642738315&amp;layer=mapnik';
        self.apiSrc = 'https://www.openstreetmap.org/export/embed.html?bbox=-8.77687454223633%2C40.60144147645398%2C-8.585300445556642%2C40.67985693941085&amp;layer=mapnik';

        this.activate = function () {

        }

    };

    return page;

});