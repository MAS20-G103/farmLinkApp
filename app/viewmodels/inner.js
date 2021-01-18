//define(['plugins/router', 'durandal/app'], function (router, app) {
//    var page = function () {
//        var self = this;

//        var childRouter = router.createChildRouter();

//        self.router = childRouter;

//        self.activate = function (page) {

//            var baseRoute = '#inner';

//            self.router.reset();
//            self.router
//                .makeRelative({
//                    moduleId: 'viewmodels/inner/',
//                    route: 'views/inner/'
//                })
//                .map([
//                    { route: '', moduleId: 'home', title: 'Home', nav: true, hash: baseRoute + '/home', icon: './images/icons/home.svg'  },
//                    { route: '/orders', moduleId: 'orders', title: 'Pedidos', nav: true, hash: baseRoute + '/orders', icon: './images/icons/orders.svg'  },
//                    { route: '/search', moduleId: 'search', title: 'Pesquisa', nav: true, hash: baseRoute + '/search', icon: './images/icons/search.svg'  },
//                    { route: '/profile', moduleId: 'profile', title: 'Perfil', nav: true, hash: baseRoute + '/profile', icon: './images/icons/profile.svg' }
//                ]).buildNavigationModel();

//        }
        
//    };

//    return page;

//});

define(['plugins/router'], function (router, app) {
    var title = "Inner Navigation";

    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId: 'viewmodels/inner',
            fromParent: true
        }).map([
            { route: '', moduleId: 'home', title: 'Home', nav: true, icon: './images/icons/home' },
            { route: 'orders', moduleId: 'orders', title: 'Pedidos', nav: true, icon: './images/icons/orders' },
            { route: 'search', moduleId: 'search', title: 'Pesquisa', nav: true, icon: './images/icons/search' },
            { route: 'profile', moduleId: 'profile', title: 'Perfil', nav: true, icon: './images/icons/profile' }
        ])
        .buildNavigationModel();
    var vm = {
        router: childRouter,
        activate: activate,
        title: title
    };

    function activate() {
        console.log(title + ' View Activated');
    }

    return vm;
});