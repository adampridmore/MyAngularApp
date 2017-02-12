(function() {
    angular
        .module("myApp", [])
        .controller("myAppController",
        [
            "$http", function($http) {
                var url = "/Api/MyAppApi/123";

                this.title = "App Title";

                var controller = this;

                $http
                    .get(url)
                    .then(function(responce) {
                        console.log(responce.data);
                        controller.people = responce.data;
                    });
            }
        ]);
})();