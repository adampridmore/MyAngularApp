(function() {
    angular
        .module("myApp")
        .controller("view2Controller",
            [
                function() {
                    var vm = this;
                    vm.title = "View 2 Title";
                }
            ]
        );
})();