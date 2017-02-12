(function() {
    angular
        .module("myApp", [])
        .controller("myAppController",
        [
            "$http", function($http) {
                var controller = this;

                var url = "/Api/MyAppApi/123";
                this.title = "App Title";
                $http
                    .get(url)
                    .then(function(responce) {
                        console.log(responce.data);
                        controller.people = responce.data;
                    });
            }
        ]);
})();