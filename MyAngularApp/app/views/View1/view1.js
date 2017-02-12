(function() {
    angular.module("myApp")
        .controller("view1Controller",["$scope",
            function ($scope) {
                $scope.title = "View 1 Title";
                //this.title2 = "View 1 Title";
            }
        ]);
})();
