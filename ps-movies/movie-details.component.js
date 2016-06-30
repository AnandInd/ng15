(function () {

    var module = angular.module("psMovies");

    var controller = function() {
        var model = this;          
        
        model.$routerOnActivate = function(next, previous) {
            model.id = next.params.id;
        };
    };

    module.component("movieDetails", {
        templateUrl: "/ps-movies/movie-details.component.html",
        controllerAs: "model",
        controller: [controller],
        $routeConfig: [
            { path: "/overview", component:"movieOverview", name:"Overview"},
            { path: "/cast", component:"movieCast", name:"Cast"},
            { path: "/director", component:"movieDirector", name:"Director"}
        ]
    });
    
  /*  module.component("movieOverview", {
        template: "this is info about overview" 
    });

    module.component("movieCast", {
        template: "this is info about cast" 
    });
     
    module.component("movieDirector", {
        template: "this is the info about the director" 
    });
    */
} ());