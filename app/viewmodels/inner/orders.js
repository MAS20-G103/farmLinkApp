define(['durandal/app'], function (app) {
    var page = function () {

        var self = this;

        self.back = { link: baseRoute, html: '<i class="arrow-left" aria-hidden="true"></i>' };

        self.title = 'Meus Pedidos';

        self.pedidos = [
            {
                profile: {
                    pic: './images/profiles/profile1HD.svg',
                    name: 'Fazendas Pereira'
                },
                order: {
                    cost: "€ 10,90",
                    date: "23 Out. 2020"
                }
            },
            {
                profile: {
                    pic: './images/profiles/profile2HD.svg',
                    name: 'Simões Plantações'
                },
                order: {
                    cost: "€ 15,45",
                    date: "10 Nov. 2020"
                }
            },
            {
                profile: {
                    pic: './images/profiles/profile3HD.svg',
                    name: 'Pastos Borges'
                },
                order: {
                    cost: "€ 8,73",
                    date: "28 Nov. 2020"
                }
            }
        ];

        self.stars = [
            { name: 'star5', title: '5 stars', val: 5 },
            { name: 'star4', title: '4 stars', val: 4 },
            { name: 'star3', title: '3 stars', val: 3 },
            { name: 'star2', title: '2 stars', val: 2 },
            { name: 'star1', title: '1 stars', val: 1 }
        ];

        self.activate = function () {

        }

    };

    return page;

});