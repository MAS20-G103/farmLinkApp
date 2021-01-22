define(['durandal/app'], function (app) {
    var page = function () {

        self.title = 'Meu Perfil';

        var imagesRoute = './images/profile/';

        var nPosts = 5;
        var filePosts = [imagesRoute + 'post', '.jpg']

        self.posts = [];

        [...Array(nPosts).keys()].forEach(key => {
            var n = key + 1
            self.posts.push({ img: filePosts[0] + n + filePosts[1] });
        });

        self.profile = {
            username: 'alberto_ferr',
            name: 'Alberto Ferreira',
            desc: 'Amante de produção familiar e agricultura orgânica',
            pic: imagesRoute + 'pic.jpg',
            followers: 153,
            following: 30,
            posts: self.posts,
        };

        self.leftBtn = { text: 'Seguir' }
        self.rightBtn = { text: 'Mensagem', icon: 'arrow-right-dark' } 

        this.activate = function (page) {
        }
        
    };

    return page;

});