(function() {
    var myApp = angular
        .module("myApp", ["ngRoute"]);

    myApp.controller("myAppController",
    [
        "$http", function($http) {
            var controller = this;

            var url = "/Api/MyAppApi/123";
            this.title = "App Title";
            $http
                .get(url)
                .then(function(responce) {
                    console.log(responce.data);
                    controller.people = responce.data;
                });
        }
    ]);

    myApp.config([
        '$locationProvider', '$routeProvider',
        function($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider.when('/View1',
                {
                    templateUrl: '/app/views/View1/view1-template.html',
                    controller: 'view1Controller',
                    controllerAs: 'vm'
                })
                .when('/People',
                {
                    templateUrl: '/app/views/People/people-template.html',
                    controller: 'peopleController',
                    controllerAs: 'vm'
                })
                .otherwise({
                    templateUrl: '/app/views/View2/view2-template.html',
                    controller: 'view2Controller',
                    controllerAs: 'vm'
                });
        }
    ]);
})();