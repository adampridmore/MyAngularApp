(function() {
        angular.module("myApp")
            .controller("peopleController",
            [
                "$http", function($http) {
                    var vm = this;

                    var url = "/Api/MyAppApi/123";
                    $http
                        .get(url)
                        .then(function(responce) {
                            console.log(responce.data);
                            vm.people = responce.data;
                        });
                }
            ]);
    })();