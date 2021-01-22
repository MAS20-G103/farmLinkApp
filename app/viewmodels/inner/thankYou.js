define(['durandal/app'], function (app) {
    var page = function () {

        var self = this;

        self.title = 'Obrigado!';

        self.produtor = 'Fazendas Pereira';

        self.illustration = './images/thankYou/bike.svg';

        self.prazo = '2 horas';

        self.btn = { text: 'Voltar ao Início', route: baseRoute }

        self.activate = function () {

        }

    };

    return page;

});