/**
 * Created by trevor on 12/10/14.
 * Authentication
 * @namespace social.authentication.services
 */
(function () {
    'use strict';
    angular
        .module('social.authentication.services')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$cookies', '$http'];

    /**
     * @namespace authentication
     * @returns {Factory}
     */
    function Authentication($cookies, $http) {
        /**
         * @name Authentication
         * @desc The Factory to be returned
         */

        var Authentication = {
            register: register
        };

        return Authentication;

        /**
         * @name register
         * @desc Register a new user
         * @param {string} email
         * @param {string} password
         * @param {string} username
         * @returns {Promise}
         * @memberOf social.authentication.services.Authentication
         */
        function register(email, password, username) {
            return $http.post('/api/v1/accounts/', {
                username: username,
                password: password,
                email: email
            }).then();
        }
    }
})();
