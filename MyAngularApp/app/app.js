angular
    .module('myApp', [])
    .controller('myAppController', ["$scope", Controller]);

function Controller($scope) {
    $scope.people = [
        {
            name: "Sally",
            age: "35"
        }
    ];
}