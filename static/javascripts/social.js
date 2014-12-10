(function () {
  'use strict';
   angular
       .module('social', [
           'social.routes',
           'social.authentication'
       ]);

    angular
        .module('social.routes', ['ngRoute']);
})();
