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
            login: login,
            logout: logout,
            register: register,
            getAuthenticatedAccount: getAuthenticatedAccount,
            isAuthenticated: isAuthenticated,
            setAuthenticatedAccount: setAuthenticatedAccount,
            unauthenticate: unauthenticate
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
            }).then(registerSuccessFn, registerErrorFn);

            /**
             * @name registerSuccessFn
             * @desc Log the new user in
             */
            function registerSuccessFn(data, status, headers, config) {
                Authentication.login(email, password);
            }

            /**
             * @name registerErrorFn
             * @desc Log "Registration failure" to the console
             */
            function registerErrorFn(data, status, headers, config) {
                console.error('Registration failure!');
            }
        }

        /**
         * @name login
         * @desc login with email and password
         * @param email
         * @param password
         * @returns {Promise}
         */
        function login(email, password) {
            return $http.post('/api/v1/auth/login/', {
                email : email,
                password : password
            }).then(loginSuccessFn, loginErrorFn);
        }

        /**
         * @name getAuthenticatedAccount
         * @desc return the currently authenticated account
         * @returns {object|undefined} if authenticated else undefined
         * @memberOf social.authentication.services.Authentication
         */

        function getAuthenticatedAccount() {
            if(!$cookies.authenticatedAccount) {
                return;
            }
            return JSON.parse($cookies.authenticatedAccount);
        }

       /**
         * @name setAuthenticatedUser
         * @desc Stringify the account object and store it in a cookie
         * @param {Object} account
         * @returns {undefined}
         * @memberOf social.authentication.services.Authentication
         */
        function setAuthenticatedAccount(account) {
          $cookies.authenticatedAccount = JSON.stringify(account);
        }

        /**
         * @name isAuthenticated
         * @desc check if the current user is authenticated
         * @returns true if authenticated else false
         */

        function isAuthenticated() {
            return !!$cookies.authenticatedAccount;
        }

        /**
         * @name logout
         * @desc Try to log the user out
         * @returns {Promise}
         * @memberOf social.authentication.services.Authentication
         */
        function logout() {
          return $http.post('/api/v1/auth/logout/')
            .then(logoutSuccessFn, logoutErrorFn);

          /**
           * @name logoutSuccessFn
           * @desc Unauthenticate and redirect to index with page reload
           */
          function logoutSuccessFn(data, status, headers, config) {
            Authentication.unauthenticate();

            window.location = '/';
          }

          /**
           * @name logoutErrorFn
           * @desc Log "Logout failure!" to the console
           */
          function logoutErrorFn(data, status, headers, config) {
            console.error('Logout failure!');
          }
        }

        /**
         * @name unauthenticate
         * @desc Delete the cookie where the user object is stored
         * @returns {undefined}
         * @memberOf social.authentication.services.Authentication
         */
        function unauthenticate() {
            delete $cookies.authenitcatedAccount;
        }

        /**
         * @name loginSuccessFn
         * @desc set the authenticated account and redirect to index
         */

        function loginSuccessFn(data, status, headers, config) {
            Authentication.setAuthenticatedAccount(data);
            window.location = '/';
        }

        /**
         * @name loginErrorFn
         * @desc Log "Login failure" to the console
         */
        function loginErrorFn(data, status, headers, config) {
            console.error('Login failure');
        }

    }
})();
