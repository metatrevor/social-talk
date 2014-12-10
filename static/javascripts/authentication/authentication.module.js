(function () {
    'use strict';

    angular
        .module('social.authentication', [
            'social.authentication.controllers',
            'social.authentication.services'
        ]);

    angular
        .module('social.authentication.controllers', []);

    angular
        .module('social.authentication.services', ['ngCookies']);
})();
