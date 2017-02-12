angular.module('myApp')
    .component('peopleList',
    {
        templateUrl: '/app/components/peopleList/peopleList-template.html',
        controller: ["$http", PeopleListController],
        bindings: {
            people: '='
        }
    });

function PeopleListController() {
}