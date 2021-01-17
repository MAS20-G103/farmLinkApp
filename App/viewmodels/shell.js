define(['plugins/router', 'durandal/app'], function (router, app) {

    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title: 'Bem vindo', moduleId: 'viewmodels/start', nav: true },
                { route: 'login', title: 'Entrar', moduleId: 'viewmodels/login', nav: true },
                { route: 'signup', title: 'Criar Conta', moduleId: 'viewmodels/signup', nav: true },
               

                { route: 'Titles(/:id)', title: 'Titles', moduleId: 'viewmodels/Titles', hash: '#Titles', nav: false },

            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});