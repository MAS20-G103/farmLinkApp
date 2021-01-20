define(['durandal/app'], function (app) {
    var page = function () {

        this.back = { link: "#inner", html: '<i class="arrow-left" aria-hidden="true"></i>' };

        this.title = 'Novo Pedido';
        this.produtor = 'Fazendas Pereira';

        this.products = [
            {
                name: 'Morango',
                price: 5.80,
                kg: true
            }
        ];

        this.activate = function () {

        }

    };

    return page;

});