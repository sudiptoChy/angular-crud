(function () {

    var app = angular.module('angularCrudApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: '/app/views/home.html'
        })
        .when('/members', {
            controller: 'MembersController',
            templateUrl: '/app/views/members.html'
        })
        .otherwise({ redirecTo: '/' });
    });

   app.filter('ageFilter', function() {
     return function (birthday) { 
        var birthday = new Date(birthday);
        var today = new Date();
        var age = ((today - birthday) / (31557600000));
        var age = Math.floor( age );
        return age;
     }
});

}())