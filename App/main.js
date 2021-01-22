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
        amount: ko.observable(0.5),
        amountPrice: ko.observable(0),
        imgUrl: './images/products/morango.svg',
        active: ko.observable(true)
    },
    {
        name: 'Kiwi',
        price: 2.99,
        priceStr: ko.observable('2,99'),
        unit: 'kg',
        min: 0.1,
        max: 100,
        amount: ko.observable(0.5),
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

function AddressModalViewModel() {
    var self = this;

    self.editModalTitle = 'Editar Endereço de Entrega';

    self.addresses = ko.observableArray([
        { name: 'Av. Teixeira Pinto, 82. 3991 - 100. Aveiro, Portugal.' }
    ]);

    self.newAddress = ko.observable('');

    self.addAddress = function () {
        self.addresses.push({ name: self.newAddress() });

        self.newAddress('');
    };

    self.removeAddress = function () {
        self.addresses.remove(this);
    }
}

ko.applyBindings(new AddressModalViewModel());

var change_tag_name = function (selector, tagname) {
    var old_elm = $(selector);
    //Create a jquery element based on selector
    var original_elements = old_elm.get();
    //Get the array of original dom objects
    //Note: We get the original dom objects because jQuery objects do not provide access to the attributes array
    for (var i = 0; i < original_elements.length; i += 1) {
        var original_element = original_elements[i];
        //Create reference to original element in dom
        var new_elm = $(document.createElement(tagname));
        //Create new element with desired tagname
        new_elm.html($(original_element).html());
        //Add original element's inner elements to new element

        var original_attributes = original_element.attributes;
        //Create an array of the original element's attributes;
        var attributes = new Object();
        //Create a new generic object that will hold the attributes for the new element

        for (var j = 0; j < original_attributes.length; j += 1) {
            var attribute = original_attributes[j];
            var name = attribute.nodeName;
            //Note: The attributes "nodeName","localName",and "name" appear to have the same value, so I just chose one. It's entirely possible that these could have different values in different contexts...
            //var name = attribute.localName;
            //var name = attribute.name;
            var value = attribute.nodeValue;
            //Note: The attributes "nodeValue","textContext",and "value" appear to have the same value, so I just chose one. It's entirely possible that these could have different values in different contexts...
            //var value = attribute.textContext;
            //var value = attribute.value;
            attributes[name] = value;
        }
        //Populate attributes object
        new_elm.attr(attributes);
        //Assign attributes from old element to new element        
        $(original_element).replaceWith(new_elm);
        //Replace old_element with new element 
    }
}