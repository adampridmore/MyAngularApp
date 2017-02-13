(function() {
    var dataService = function($http, $q) {
        var people = null;
        var service = {
            getPeople: function() {
                if (people === null) {
                    var url = "Api/MyAppApi/123";
                    return $http
                        .get(url)
                        .then(function(responce) {
                            people = responce.data;
                            //console.table(people);

                            return people;
                        });
                } else {
                    var def = $q.defer();
                    def.resolve(people);
                    return def.promise;
                }
            }
        };
        return service;
    };

    angular.module("myApp")
        .factory("dataService", ["$http", "$q", dataService]);
})();