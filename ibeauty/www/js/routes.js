angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.shop', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/shop.html',
        controller: 'shopCtrl'
      }
    }
  })

  .state('tabsController.myCart', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/myCart.html',
        controller: 'myCartCtrl'
      }
    }
  })

  .state('tabsController.location', {
    url: '/page4',
    views: {
      'tab4': {
        templateUrl: 'templates/location.html',
        controller: 'locationCtrl'
      }
    }
  })

  .state('tabsController.contactUs', {
    url: '/page9',
    views: {
      'tab3': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('slider', {
    url: '/page5',
    templateUrl: 'templates/slider.html',
    controller: 'sliderCtrl'
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page8',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.setting', {
    url: '/page10',
    views: {
      'tab5': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('itemDetail', {
    url: '/page11/:id',
    templateUrl: 'templates/itemDetail.html',
    controller: 'itemDetailCtrl'
  })

  .state('tabsController.aboutUs', {
    url: '/page12',
    views: {
      'tab5': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('tabsController.termsOfService', {
    url: '/page15',
    views: {
      'tab5': {
        templateUrl: 'templates/termsOfService.html',
        controller: 'termsOfServiceCtrl'
      }
    }
  })

  .state('tabsController.privacyPolicy', {
    url: '/page16',
    views: {
      'tab5': {
        templateUrl: 'templates/privacyPolicy.html',
        controller: 'privacyPolicyCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')

  

});