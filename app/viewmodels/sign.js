define(['durandal/app'], function (app) {
    var page = function () {
        this.identity = { logo: './images/logo-horizontal.svg', alt: 'farmLink' };

        this.back = { link: "#", html: '<i class="arrow-left" aria-hidden="true"></i>' };

        //this.title = "Crie sua conta";


        this.submit = { text: "Continuar", link: '#inner' };

        this.socials = [
            { html: "<img class='mr-2' src='./images/icons/facebook.svg' /> Entrar com Facebook", className: "btn-facebook" },
            { html: "<img class='mr-2' src='./images/icons/google.svg' /> Entrar com Google", className: "btn-google" }
        ];

        this.activate = function (id) {
            if (id === 'up')
                this.title = "Crie sua conta";
            else
                this.title = "Entre em sua conta";
        }
    };

    return page;

});