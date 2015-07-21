var scrumApp = angular.module('scrumApp', ['ngRoute', 'ngResource']);
scrumApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:"app/templates/Menu.html",
            controller:'MenuController'
        })
        .when('#/login',{
            templateUrl:"app/templates/Login.html",
            controller:'LoginController'
        })
        .otherwise({redirectTo:'/'})
});
scrumApp.controller('BaseController', function ($scope) {

});
scrumApp.controller('MenuController', function($scope){

});
scrumApp.controller('LoginController',function($scope){
    $scope.logIn = function(){

    };
    $scope.username="";
    $scope.password="";
});