define(['durandal/app'], function (app) {
    var page = function () {

        var self = this;
        
        self.back = { link: baseRoute, html: '<i class="arrow-left" aria-hidden="true"></i>' };

        self.title = 'Novo Pedido';
        self.produtor = 'Fazendas Pereira';

        self.leftBtn = { text: 'Guardar', link: baseRoute };
        self.rightBtn = { text: 'Finalizar', link: baseRoute + '/finishOrder' };

        self.products = [
            {
                name: 'Morango',
                price: 5.80,
                priceStr: ko.observable('5,80'),
                unit: 'kg',
                min: 0.1,
                max: 100,
                amount: ko.observable(1),
                amountPrice: ko.observable(),
                imgUrl: './images/products/morango.svg',
                active: ko.observable(false)
            },
            {
                name: 'Kiwi',
                price: 2.99,
                priceStr: ko.observable('2,99'),
                unit: 'kg',
                min: 0.1,
                max: 100,
                amount: ko.observable(1),
                amountPrice: ko.observable(),
                imgUrl: './images/products/kiwi.svg',
                active: ko.observable(false)
            }
        ];

        self.deliveryFees = 2.00;

        self.setActive = function (p) {
            p.active(!p.active());
            if (!p.active())
                p.priceStr(getStrMoney(p.price));
            else {
                if (p.amountPrice() == null) p.amountPrice(p.price);
                p.priceStr(getStrMoney(p.amountPrice()));
            }
        };

        self.calcPrice = (p) => {
            var calc = p.amount() * p.price;
            p.amountPrice(calc);
            p.priceStr(getStrMoney(calc));
        };

        self.getProductsTotal = () => {
            var total = 0;
            self.products.forEach(product => {
                if (product.active())
                    total += product.amountPrice();
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

        self.activate = function () {

        }

    };

    return page;

});