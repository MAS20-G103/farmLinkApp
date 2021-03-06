﻿define(['durandal/app'], function (app) {
    var page = function () {

        var self = this;

        if (getProductsTotal() <= 0) window.location.href = baseRoute + "/order";
        
        self.back = { link: baseRoute + '/order', html: '<i class="arrow-left" aria-hidden="true"></i>' };

        self.title = 'Finalizar Pedido';
        self.prazo = '2 horas';
        //self.produtor = 'Fazendas Pereira';

        self.upperBtn = { text: 'Confirmar Pedido', link: baseRoute + '/thankYou' };
        self.lowerBtn = { text: 'Guardar', link: baseRoute };

        self.deliveryAddress = ko.observable(document.getElementById('addressesSelect').value);

        self.payment = ko.observable('MB Way');

        self.products = products;

        self.totalTable = [
            { text: 'Transporte', value: getStrMoney(deliveryFees), className: '' },
            { text: 'TOTAL', value: getStrMoney(getTotal()), className: 'color-green font-weight-bold' }
        ];

        self.activate = function () {

        }

    };

    return page;

});