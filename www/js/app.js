// Ionic Starter App

var my = {
  categories: [
    {
      name: "css",
      display: "Css",
      description: "Shows the design elements available with ionic",
      samples: [
        { name: 'header', description: 'Header' },
        { name: 'icons', description: 'Icons' },
        { name: 'buttonsicons', description: 'Buttons (icons)' },
        { name: 'buttonbar', description: 'Button Bar' },
        { name: 'cardshowcase', description: 'Card Showcase' },
        { name: 'listicons', description: 'Advanced List' },
        { name: 'formlabels', description: 'Form Labels' },
        { name: 'formother', description: 'Form (other)' },
        { name: 'othercontrols', description: 'Other Controls' },
        { name: 'buttonsblock', description: 'Buttons (block)' },
        { name: 'buttonsfullwidth', description: 'Buttons (full width)' },
        { name: 'buttonsdifferentSizes', description: 'Buttons (sizes)' },
        { name: 'buttonsoutlined', description: 'Buttons (outline)' },
        { name: 'buttonsclear', description: 'Buttons (clear)' },
        { name: 'list', description: 'List' },
        { name: 'listdividers', description: 'List (dividers)' },
        { name: 'listbuttons', description: 'List (buttons)' },
        { name: 'listavatars', description: 'List (avatars)' },
        { name: 'listthumbnails', description: 'List (thumbnails)' },
        { name: 'listinset', description: 'List (inset)' },
        { name: 'cards', description: 'Card' },
        { name: 'cardlists', description: 'Card (list)' },
        { name: 'cardimages', description: 'Card (image)' }
      ]
    },
    {
      name: "js",
      display: "Javascript",
      description: "Shows javascript events and utilities",
      samples: [
        { name: 'list', description: 'List' },
        { name: 'slidebox', description: 'Slide Box' },
        { name: 'events', description: 'Events' },
        { name: 'modal', description: 'Modal' },
        { name: 'popover', description: 'Popover' }
      ]
    },
    {
      name: "cordova",
      display: "Cordova",
      description: "Interactions with the phone hardware",
      samples: [
        { name: 'browser', description: 'Browser' },
        { name: 'camera', description: 'Camera' },
      ]
    }
  ]
};

my.categoriesByName = { "css": my.categories[0], "js": my.categories[1], "cordova": my.categories[2] };

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.value('categories', my.categories)

.value('categoriesByName', my.categoriesByName)

.run(function($ionicPlatform, $rootScope) {
  $rootScope.categories = my.categories; // for menu
  $rootScope.sideMenuSwipeEnabled = true;

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
  var categories = my.categories;
  var categoriesByName = my.categoriesByName;

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

    .state('app.category', {
      url: "/category/{name}", // note: since it is a child of app, it will actually be /app/category/{name}
      views: {
        'menuContent': {
          templateUrl: "templates/category.html"
        }
      }
    })

    ;

  for (i = 0; i < categories.length; i++) {
    var category = categories[i];
    for (j = 0; j < category.samples.length; j++) {
      var sample = category.samples[j];
      $stateProvider.state('app.' + category.name + '_' + sample.name, {
        url: "/" + category.name + "/" + sample.name,
        views: {
          "menuContent": {
            templateUrl: "templates/" + category.name + "/" + sample.name + ".html"
          }
        }
      });
    }
  }

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});


angular.module('empty', ['ionic']);