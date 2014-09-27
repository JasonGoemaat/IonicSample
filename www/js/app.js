// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  var cssPages = ["Header", "Content", "Footer", "Buttons", "ButtonsBlock", "ButtonsFullWidth",
    "ButtonsDifferentSizes", "ButtonsOutlined", "ButtonsClear", "ButtonsIcons", "ButtonBar",
    "List", "ListDividers", "ListIcons", "ListButtons", "ListAvatars", "ListThumbnails", "ListInset"];

  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.welcome', {
      url: "/welcome",
      views: {
        'menuContent' :{
          templateUrl: "templates/welcome.html"
        }
      }
    })

    .state('app.css', {
      url: "/css",
      views: {
        'menuContent' :{
          templateUrl: "templates/css.html"
        }
      }
    })

    .state('app.javascript', {
      url: "/javascript",
      views: {
        'menuContent' :{
          templateUrl: "templates/javascript.html"
        }
      }
    })

    .state('app.css_buttons2', {
      url: "/css/buttons2",
      views: {
        'menuContent' :{
          templateUrl: "templates/css/buttons.html"
        }
      }
    })
    ;

  for (i = 0; i < cssPages.length; i++) {
    $stateProvider.state('app.css_' + cssPages[i].toLowerCase(), {
      url: "/css/" + cssPages[i].toLowerCase(),
      views: {
        'menuContent' :{
          templateUrl: "templates/css/" + cssPages[i].toLowerCase() + ".html"
        }
      }
    });
  }
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});


angular.module('empty', ['ionic']);