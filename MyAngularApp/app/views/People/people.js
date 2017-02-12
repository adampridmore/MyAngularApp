(function() {

    var dataService = function($http, dataService) {
        var vm = this;

        dataService
            .getPeople()
            .then(function(people) {
                vm.people = people;
            });
    };

    angular.module("myApp")
        .controller("peopleController", ["$http", "dataService", dataService]);
})();