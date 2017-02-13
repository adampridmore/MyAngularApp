(function() {
    var routeFunction = function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when("/Application/View1",
            {
                templateUrl: "app/views/View1/view1-template.html",
                controller: "view1Controller",
                controllerAs: "vm"
            })
            .when("/Application/People",
            {
                templateUrl: "app/views/People/people-template.html",
                controller: "peopleController",
                controllerAs: "vm"
            })
            .otherwise({
                templateUrl: "app/views/View2/view2-template.html",
                controller: "view2Controller",
                controllerAs: "vm"
            });
    };

    angular.module("myApp").config(["$locationProvider", "$routeProvider", routeFunction]);
})();