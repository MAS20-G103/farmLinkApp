define(['durandal/app'], function (app) {
    var page = function () {

        var self = this;
        
        self.back = { link: baseRoute, html: '<i class="arrow-left" aria-hidden="true"></i>' };

        self.title = 'Formas de Pagamento';

        self.methods = [
            {
                name: 'PayPal',
                logo: './images/logos/paypal.png',
                route: baseRoute,
                active: true,
                account: 'Alberto Ferreira' 
            },
            {
                name: 'MB Way',
                logo: './images/logos/mbway.png',
                route: baseRoute,
                active: false,
                account: 'Não conectado'
            },
        ];

        self.activate = function () {

        }

    };

    return page;

});