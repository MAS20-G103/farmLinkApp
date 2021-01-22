define(['durandal/app'], function (app) {
    var page = function () {

        var self = this;
        
        self.back = { link: baseRoute, html: '<i class="arrow-left" aria-hidden="true"></i>' };

        self.title = 'Novo Pedido';
        self.produtor = 'Fazendas Pereira';

        self.leftBtn = { text: 'Guardar', link: baseRoute };
        self.rightBtn = { text: 'Finalizar', link: baseRoute + '/finishOrder' };

        self.products = products;

        self.totalTable = ko.observableArray([
            { text: 'Produtos', value: ko.observable(), className: '' },
            { text: 'Transporte', value: ko.observable(deliveryFees), className: '' },
            { text: 'Total', value: ko.observable(getTotal()), className: 'font-weight-bold' }
        ]);

        self.activate = function () {

        }

    };

    return page;

});