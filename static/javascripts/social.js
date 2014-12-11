(function () {
    'use strict';

    angular
        .module('social', [
            'social.config',
            'social.routes',
            'social.authentication',
            'social.layout'
        ]);

    angular
        .module('social.config', []);

    angular
        .module('social.routes', ['ngRoute']);

    angular
        .module('social')
        .run(run);

    run.$inject = ['$http'];

    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();
