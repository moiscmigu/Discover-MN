let myApp = angular.module('myApp', ["ngRoute"]).
controller("homeController", homeController).
controller("fortuneController", fortuneController);



myApp.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl:"partials/home.html",
        controller:"homeController as hc"
    }).when("/fortune", {
        templateUrl:"partials/fortune.html",
        controller:"fortuneController as fc"
    });
});