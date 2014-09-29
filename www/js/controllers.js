angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  $scope.href = window.location.href;

  $scope.cssPages = ["Header", "Content", "Footer", "Buttons", "ButtonsBlock", "ButtonsFullWidth",
    "ButtonsDifferentSizes", "ButtonsOutlined", "ButtonsClear", "ButtonsIcons", "ButtonsHeadersFooters",
    "ClearButtonsInHeaders", "ButtonBar"];

  $scope.jsPages = [];

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CategoryCtrl', function($scope, $stateParams, categoriesByName) {
  $scope.category = categoriesByName[$stateParams.name];
})

.controller('JsSamplesCtrl', function($scope, $timeout, $ionicActionSheet, $ionicLoading) {
  $scope.showSampleActionSheet = function() {
    // Show the action sheet
    var hideSheet = $ionicActionSheet.show(
      {
        titleText: 'Modify your album',
        buttons: [
          { text: '<b>Share</b> This' },
          { text: 'Move' }
        ],
        destructiveText: 'Delete',
        cancelText: 'Cancel',
        cancel: function() {
          $scope.message = 'Action Sheet cancelled';
        },
        buttonClicked: function(index) {
          console.log('buttonClicked', index);
          $scope.message = 'Action Sheet clicked index ' + index;
          return true; // hide sheet
        },
        destructiveButtonClicked: function() {
          console.log('destructiveButtonClicked');
          $scope.message = 'Action Sheet destructive button clicked';
          return true; // hide sheet
        }
      }
    );
  };

  $scope.hideRefresh = function() {
    console.log('hideRefresh()');
    $scope.$broadcast('scroll.refreshComplete'); 
  };

  $scope.addItem = function() {
    $scope.items = $scope.items || [];
    $scope.id = $scope.id || 1;
    $scope.items.push( { id: $scope.id++ } );
  };

  for (var i = 0; i < 3; i++) {
    $scope.addItem();
  }

  $scope.doRefresh = function() {
    console.log('doRefresh()');
    $timeout(function() { 
      $scope.addItem();
      $scope.$broadcast('scroll.refreshComplete'); 
    }, 2000);
  };

  $scope.showLoading = function() {
    $ionicLoading.show({
      template: "This blocking screen will go away in 4 seconds"
    });

    $timeout($scope.hideLoading, 4000);
  };

  $scope.hideLoading = function() {
    $ionicLoading.hide();
  };

  // for ion-list:
  $scope.edit = function(item) {
    $scope.message = 'Edit Item: ' + item.id;
  };

  $scope.share = function(item) {
    $scope.message = 'Share Item: ' + item.id;
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
})

// special modal view
.controller('JsModalCtrl', function($scope, $ionicModal) {
  // first we have to set up modal
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: "slide-in-up"
  }).then(function(modal) {
    // whem modal is set up, we will have it on our scope
    $scope.modal = modal;
  });

  $scope.showModal = function() {
    $scope.modal.show();
  };

  $scope.hideModal = function() {
    $scope.modal.hide();
  };

  // NEED TO CLEAN UP THE MODAL WHEN DONE
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  // can do some things when modal is hidden or removed
  $scope.$on('modal.hidden', function() {
    console.log('modal.hidden');
  });

  $scope.$on('modal.removed', function() {
    console.log('modal.removed');
  });
})

// special popover view
.controller('JsPopoverCtrl', function($scope, $ionicPopover) {
  // first we have to set up modal
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope,
    animation: "slide-in-up"
  }).then(function(popover) {
    // whem modal is set up, we will have it on our scope
    $scope.popover = popover;
  });

  $scope.showPopover = function() {
    $scope.popover.show();
  };

  $scope.hidePopover = function() {
    $scope.popover.hide();
  };

  // NEED TO CLEAN UP THE POPOVER WHEN DONE
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });

  // can do some things when modal is hidden or removed
  $scope.$on('popover.hidden', function() {
    console.log('popover.hidden');
  });

  $scope.$on('popover.removed', function() {
    console.log('popover.removed');
  });
})

// special popover view
.controller('JsEventsCtrl', function($scope, $rootScope, $ionicSideMenuDelegate) {
  $rootScope.sideMenuSwipeEnabled = false;
  console.log('JsEventsCtrl scope created!  Side menu swiping should be DISABLED');
  $scope.$on('$destroy', function() {
    $rootScope.sideMenuSwipeEnabled = true;
    console.log('JsEventsCtrl scope destroyed!  Side menu swiping should be enabled again');
  });
  $scope.flags = {
    hold: false,
    tap: false,
    touch: false,
    release: false,
    drag: false,
    dragUp: false,
    dragRight: false,
    dragDown: false,
    dragLef: false,
    swipe: false,
    swipeUp: false,
    swipeRight: false,
    swipeDown: false,
    swipeLeft: false
  };
  //$ionicSideMenuDelegate.canDragContent(false);
  //$scope.on('$destroy', function() {
//    $ionicSideMenuDelegate.canDragContent(true);
//  });
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});
