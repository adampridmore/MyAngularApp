(function () {
    var menuController = function () {
        var vm = this;
        vm.menuItems = ["View1", "View2", "People"];
    }

    angular.module("myApp")
        .component("appMenu",
        {
            templateUrl: "/app/components/appMenu/appMenu-template.html",
            controller: ["$http", menuController],
            controllerAs : "vm",
            bindings: {
                people: "="
            }
        });
})();