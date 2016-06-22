(function(){

var module = angular.module("psMovies");

module.component("movieDetails", {
    templateUrl: "/ps-movies/movie-details.component.html",
    controllerAs: "model",
    controller: function(){
        var model = this;

        model.$routerOnActivate = function(next){
            model.id = next.params.id;
        };
    }
});

}());