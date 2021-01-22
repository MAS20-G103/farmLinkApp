requirejs.config({
    paths: {
        'text': '../vendors/Scripts/text',
        'durandal': '../vendors/Scripts/durandal',
        'plugins': '../vendors/Scripts/durandal/plugins',
        'transitions': '../vendors/Scripts/durandal/transitions',
        'bootstrap': '../vendors/Scripts/bootstrap.bundle.min'
    },
    "shim": {
        "bootstrap": ["jquery"]
    }
});

define('jquery', function () { return jQuery; });
define('knockout', ko);

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'], function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'farmLink';

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        //app.setRoot('viewmodels/shell', 'entrance');
        app.setRoot('viewmodels/shell');
    });
});

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function getStrMoney (val) {
    return '€ ' + val.toFixed(2).toString().replace('.', ',');
}

var products = [
    {
        name: 'Morango',
        price: 5.80,
        priceStr: ko.observable('5,80'),
        unit: 'kg',
        min: 0.1,
        max: 100,
        amount: ko.observable(1),
        amountPrice: ko.observable(0),
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
        amountPrice: ko.observable(0),
        imgUrl: './images/products/kiwi.svg',
        active: ko.observable(false)
    }
];

var deliveryFees = 2.00;

var produtor = 'Fazendas Pereira';

function setEditModal(array) {

}

function setActive(p) {
    p.active(!p.active());
    if (!p.active()) {
        p.priceStr(getStrMoney(p.price));
    }
    else {
        p.priceStr(getStrMoney(p.amountPrice()));
    }
}

function calcPrice(p) {
    if (!p.active()) {
        p.amountPrice(p.price);
        console.log('price', p.amountPrice());
        return;
    }
    var calc = p.amount() * p.price;
    p.amountPrice(calc);
    p.priceStr(getStrMoney(calc));
}

function getProductsTotal () {
    var total = 0;
    products.forEach(p => {
        if (p.active()) {
            calcPrice(p);
            total += p.amountPrice();
        }
    });
    return total;
}

function getTotal () {
    var total = getProductsTotal() + deliveryFees;
    return total;
}