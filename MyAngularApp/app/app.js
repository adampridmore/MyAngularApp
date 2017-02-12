angular
    .module('myApp', [])
    .controller('myAppController', ["$scope", "$http", Controller]);

function Controller($scope, $http) {
    var url = "/Api/MyAppApi/123";

    $http
        .get(url)
        .then(function (responce) {
            console.log(responce.data);
            $scope.people = responce.data;
        });
}