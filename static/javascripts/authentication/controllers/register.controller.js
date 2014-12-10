/**
 * Register controller
 * @namespace social.authentication.controllers
 */
(function () {
  'use strict';

  angular
    .module('social.authentication.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];

  /**
   * @namespace RegisterController
   */
  function RegisterController($location, $scope, Authentication) {
    var vm = this;

    vm.register = register;

    /**
     * @name register
     * @desc Register a new user
     * @memberOf social.authentication.controllers.RegisterController
     */
    function register() {
      Authentication.register(vm.email, vm.password, vm.username);
    }
  }
})();
