let myApp = angular.module('myApp', ["ngRoute"]).
controller("homeController", homeController).
controller("fortuneController", fortuneController).
controller("visitController", visitController);



myApp.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl:"partials/home.html",
        controller:"homeController as hc"
    }).when("/fortune", {
        templateUrl:"partials/fortune.html",
        controller:"fortuneController as fc"
    }).when("/visit", {
        templateUrl:"partials/visit.html",
        controller:"visitController as fc"
    });
});