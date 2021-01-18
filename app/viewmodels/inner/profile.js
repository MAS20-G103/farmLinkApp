define(['durandal/app'], function (app) {
    var page = function () {

        this.pages = [
            { route: '/home', title: 'Home', icon: './images/icons/home.svg' },
            { route: '/orders', title: 'Pedidos', icon: './images/icons/orders.svg' },
            { route: '/search', title: 'Pesquisa', icon: './images/icons/search.svg' },
            { route: '/profile', title: 'Perfil', icon: './images/icons/profile.svg' }
        ];

        this.activate = function (page) {

        }
        
    };

    return page;

});