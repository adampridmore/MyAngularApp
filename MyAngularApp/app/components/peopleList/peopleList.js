(function () {
    var peopleListController = function () {
    }

    angular.module("myApp")
        .component("peopleList",
        {
            templateUrl: "app/components/peopleList/peopleList-template.html",
            controller: ["$http", peopleListController],
            bindings: {
                people: "="
            }
        });
})();