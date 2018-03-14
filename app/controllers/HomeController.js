(function (){

    var HomeController = function ($scope) {
        $scope.name = "Sudipto Chowdhury";
        $scope.imageUrl = "https://source.unsplash.com/random";
    };

    HomeController.$inject = ['$scope'];

    angular.module('angularCrudApp')
        .controller('HomeController', HomeController);

}())