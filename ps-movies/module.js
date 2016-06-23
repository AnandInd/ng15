(function() {
   
   var module = angular.module("psMovies", ["ngComponentRouter","ngAnimate"]);

    module.value("$routerRootComponent","movieApp");

    module.component("appAbout",{
        template: "This is about page "
    });

}());