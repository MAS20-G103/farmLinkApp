define(['durandal/app'], function (app) {
    var page = function () {
        this.identity = { logo: './images/logo-horizontal.svg', alt: 'farmLink' };

        this.back = { link: "#", html: '<i class="fa fa-arrow-left" aria-hidden="true"></i>' };
    };

    return page;

});