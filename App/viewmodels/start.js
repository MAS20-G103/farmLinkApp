define(['durandal/app'], function (app) {
    var page = function () {
        this.identity = { logo: './images/logo-vertical.svg', alt: 'farmLink', slogan: 'Do Campo para a Mesa' };
        this.slides = [
            { src: './images/start/slide1.png', alt: 'Conheça a procedência dos seus alimentos' },
            { src: './images/start/slide2.png', alt: 'Pagamento instantâneo e despreocupado' },
            { src: './images/start/slide3.png', alt: 'Recomendações e opiniões da comunidade' }
        ];
        this.btns = [
            { text: 'Criar Conta', route: '#signup', className: "btn-primary" },
            { text: 'Entrar', route: '#login', className: "btn-outline-secondary" }
        ];
    };

    return page;

});

       

