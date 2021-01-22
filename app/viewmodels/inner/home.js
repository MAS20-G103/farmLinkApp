define(['durandal/app'], function (app) {
    var page = function () {

        var self = this;

        var iconsRoute = './images/icons/';

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
                { route: baseRoute + '/', title: 'Configurações', icon: iconsRoute + 'config.svg' },
                { route: baseRoute + '/', title: 'Sobre', icon: iconsRoute + 'info.svg' },
                { route: baseRoute + '/', title: 'Minha Conta', icon: iconsRoute + 'account.svg' },
                { route: baseRoute + '/payment', title: 'Pagamento', icon: iconsRoute + 'card.svg' },
                { route: baseRoute + '/', title: 'Favoritos', icon: iconsRoute + 'starred.svg' },
                { route: '#', title: 'Sair', icon: iconsRoute + 'sign-out.svg' }
            ],
            clickToggler: () => {
                var visible = !$(self.sideNav.id).hasClass("show");

                $("#togglerImg").attr("src", (visible) ? self.sideNav.logo.active : self.sideNav.logo.muted);
            }
        };

        self.optionsIcon = iconsRoute + 'options.svg';

        self.arrowRight = { light: iconsRoute + 'arrow-right-light.svg', dark: iconsRoute + 'arrow-right-dark.svg' }

        var pricePrefix = "€ ";

        self.socials = [
            { className: 'leaf' },
            { className: 'comment' },
            { className: 'star' }
        ];

        self.toggleActive = function(e) {
            console.log(e);
        };

        self.posts = [
            {
                profile: {
                    pic: './images/profiles/profile1.svg',
                    name: 'Fazendas Pereira'
                },
                image: {
                    product: true,
                    url: './images/home/post1.svg',
                    price: pricePrefix + "5,80 / kg",
                    btn: {
                        text: 'Encomendar',
                        route: baseRoute + '/order',
                        bg: '#AD0705',
                        color: '#fff',
                        arrow: self.arrowRight.light
                    }
                },
                content: 'Com a nova técnica de plantação, conseguimos morangos com um gosto mais doce e agradável. Você...',
            },
            {
                profile: {
                    pic: './images/profiles/profile2.svg',
                    name: 'Simões Plantações'
                },
                image: {
                    product: false,
                    url: './images/home/post2.svg',
                    price: pricePrefix,
                    btn: {
                        text: 'Encomendar',
                        route: '',
                        bg: '#AD0705',
                        color: '#fff',
                        arrow: self.arrowRight.light
                    }
                },
                content: 'Na Simões Plantações valorizamos muito o cuidado com o seu alimento, em todos os momentos da produção. Nossos...',
            },
            {
                profile: {
                    pic: './images/profiles/profile3.svg',
                    name: 'Pastos Borges'
                },
                image: {
                    product: true,
                    url: './images/home/post3.jpg',
                    price: pricePrefix + "1,00 / un",
                    btn: {
                        text: 'Encomendar',
                        route: '',
                        bg: '#E0D8C5',
                        color: '#333',
                        arrow: self.arrowRight.dark
                    }
                },
                content: 'Leite natural pausterizado, sem hormônios, de qualidade indescritível. Experimente e nunca mais tenha dúvidas na hora...',
            },
        ];

        self.activate = function () {

        }

        
    };

    return page;

});