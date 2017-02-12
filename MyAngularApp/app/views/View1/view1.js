(function() {
    angular.module("myApp")
        .controller("view1Controller",["$scope",
            function () {
                var vm = this;
                vm.title = "View 1 title";
            }
        ]);
})();
