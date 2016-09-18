angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('snapMath2.snapMath', {
    url: '/snapMath',
    views: {
      'side-menu21': {
        templateUrl: 'templates/snapMath.html',
        controller: 'snapMathCtrl'
      }
    }
  })

  .state('snapMath2.history', {
    url: '/history',
    views: {
      'side-menu21': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('snapMath2.tips', {
    url: '/Tips',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tips.html',
        controller: 'tipsCtrl'
      }
    }
  })

  .state('snapMath2', {
    url: '/sidemenu',
    templateUrl: 'templates/snapMath2.html',
    controller: 'snapMath2Ctrl'
  })

$urlRouterProvider.otherwise('/sidemenu/snapMath')

  

});