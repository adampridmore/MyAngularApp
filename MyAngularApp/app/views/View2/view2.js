(function() {
    angular
        .module("myApp")
        .controller("view2Controller",
            [
                "$scope", function($scope) {
                    $scope.title = "View 2 Title";
                    //this.title2 = "View 2 Title";
                }
            ]
        );
})();