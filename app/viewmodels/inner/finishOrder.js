define(['durandal/app'], function (app) {
    var page = function () {

        var self = this;
        
        self.back = { link: baseRoute + '/order', html: '<i class="arrow-left" aria-hidden="true"></i>' };

        self.title = 'Finalizar Pedido';
        self.produtor = 'Fazendas Pereira';

        self.upperBtn = { text: 'Confirmar Pedido', link: baseRoute + 'thankYou' };
        self.lowerBtn = { text: 'Guardar', link: baseRoute };

        self.deliveryFees = 2.00;

        self.products = [
            {
                name: 'Morango',
                price: 5.80,
                priceStr: ko.observable('5,80'),
                amount: ko.observable(0.6),
                amountPrice: ko.observable(),
                unit: 'kg'
            },
            {
                name: 'Kiwi',
                price: 2.99,
                priceStr: ko.observable('2,99'),
                amount: ko.observable(0.4),
                amountPrice: ko.observable(),
                unit: 'kg'
            }
        ];

        self.calcPrice = (p) => {
            var calc = p.amount() * p.price;
            p.amountPrice(calc);
            p.priceStr(getStrMoney(calc));
        };

        self.getProductsTotal = () => {
            var total = 0;
            self.products.forEach(p => {
                self.calcPrice(p);
                total += p.amountPrice();
            });
            return total;
        };

        self.getTotal = () => {
            var total = self.getProductsTotal() + self.deliveryFees;
            return total;
        }

        self.getStrMoney = (val) => {
            return '€ ' + getStrMoney(val);
        }

        self.totalTable = [
            { text: 'Transporte', value: self.getStrMoney(self.deliveryFees), className: '' },
            { text: 'TOTAL', value: self.getStrMoney(self.getTotal()), className: 'color-green font-weight-bold' }
        ];

        self.activate = function () {

        }

    };

    return page;

});