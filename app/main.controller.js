(function() {
    'use strict';

    angular.module('myApp')
        .controller('MainController', ['$scope', 'DataService', function($scope, DataService) {
            // Controller and $scope usage
            $scope.title = 'Dmytro Dmytriiev';
            $scope.description = 'Welcome to my personal website! Here you will find information about me.';

            DataService.getProfile().then(function(profile) {
                $scope.profile = profile; // Using $scope to bind data to the view
            });

            // Event handling and $scope usage
            $scope.showInfo = false;
            $scope.toggleInfo = function() {
                $scope.showInfo = !$scope.showInfo;
            };

            $scope.additionalInfo = 'I love playing guitar and PS5.';
        }]);
})();