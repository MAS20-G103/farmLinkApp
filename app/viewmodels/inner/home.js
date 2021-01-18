define(['durandal/app'], function (app) {
    var page = function () {

        var self = this;

        var iconRoute = './images/icons/';

        self.sideNav = {
            logo: {
                active: './images/home/logo-horizontal-active.svg',
                muted: './images/home/logo-horizontal-muted.svg',
            },
            notification: {
                icon: './images/icons/notification.svg',
                alt: 'Notificações'
            },
            collapsed: ko.observable(true),
            id: '#navbarDropdown',
            options: [
                { route: '/', title: 'Configurações', icon: iconRoute + 'config.svg' },
                { route: '/', title: 'Sobre', icon: iconRoute + 'info.svg' },
                { route: '/', title: 'Minha Conta', icon: iconRoute + 'account.svg' },
                { route: '/', title: 'Pagamento', icon: iconRoute + 'card.svg' },
                { route: '/', title: 'Favoritos', icon: iconRoute + 'star.svg' },
                { route: '#', title: 'Sair', icon: iconRoute + 'sign-out.svg' }
            ]
        };

        self.clickedIt = () => {
            var visible = !$(self.sideNav.id).hasClass("show");

            $("#togglerImg").attr("src", (visible) ? self.sideNav.logo.active : self.sideNav.logo.muted );
        };

        self.activate = function () {

        }

        
    };

    return page;

});