(function() {
    'use strict';

    angular.module('myApp')
        .service('DataService', ['$q', function($q) {
            this.getProfile = function() {
                var deferred = $q.defer();
                var profile = {
                    name: 'Dmytro Dmytriiev',
                    occupation: 'Software Developer',
                    location: 'Kyiv, Ukraine',
                    linkedin: 'https://ua.linkedin.com/in/dmytro-dmytriiev-745511214',
                    workExperience: [
                        { position: 'iOS Developer', company: 'SWEET.TV', years: '2022-now' },
                        { position: 'Middle iOS Developer', company: 'PrivatBank', years: '2021-2022' },
                        { position: 'iOS Developer', company: 'Weelorum', years: '2021' }
                    ]
                };
                deferred.resolve(profile);
                return deferred.promise;
            };
        }]);
})();