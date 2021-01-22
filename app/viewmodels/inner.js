
const baseRoute = '#inner';

define(['plugins/router'], function (router, app) {
    var title = "Inner Navigation";

    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId: 'viewmodels/inner',
            fromParent: true
        }).map([
            { route: '', moduleId: 'home', title: 'Home', nav: true, icon: './images/icons/home' },

            { route: 'orders', moduleId: 'orders', title: 'Pedidos', nav: true, icon: './images/icons/orders' },
            { route: 'order', moduleId: 'order', title: 'Novo Pedido', hash: '#inner/order', nav: false },
            { route: 'finishOrder', moduleId: 'finishOrder', title: 'Finalizar Pedido', nav: false },
            { route: 'thankYou', moduleId: 'thankYou', title: 'Obrigado!', nav: false },

            { route: 'search', moduleId: 'search', title: 'Pesquisa', nav: true, icon: './images/icons/search' },
            { route: 'profile', moduleId: 'profile', title: 'Perfil', nav: true, icon: './images/icons/profile' }
        ])
        .buildNavigationModel();
    var vm = {
        router: childRouter,
        activate: activate,
        title: title,
        currentRoute: ko.computed(function () {
            return router.activeInstruction().fragment;
        })
    };

    function activate() {
        console.log(title + ' View Activated');
    }

    return vm;
});