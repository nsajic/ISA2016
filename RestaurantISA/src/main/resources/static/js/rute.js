var app = angular.module("restoranApp.rute", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "html/logovanje.html"
    })
    .when("/registrujSe", {
        templateUrl : "html/register.html"
    })
    .when("/gostGlavnaStrana", {
        templateUrl : "html/gost.html"
    })
    .when("/ponudjac", {
        templateUrl : "html/ponudjac.html"
    })
    .when("/kuvar", {
        templateUrl : "html/kuvar.html"
    });
});