(function () {
    angular
        .module('social.config')
        .config(config);

    config.$inject = ['$locationProvider'];

    /**
     * @name config
     * @desc enable HTML5 routing
     */
    function config($locationProvider) {
        $locationProvider.html5mode(true);
        $locationProvider.hashPrefix('!');
    }

})();