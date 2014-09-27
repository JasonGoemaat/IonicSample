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

.controller('JsSamplesCtrl', function($scope, $ionicActionSheet, $timeout) {
  $scope.showSampleActionSheet = function() {
    // Show the action sheet
    var hideSheet = $ionicActionSheet.show(
      {
        buttons: [
          { text: '<b>Share</b> This' },
          { text: 'Move' }
        ],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function() {
            alert('cancelled');
        },
        buttonClicked: function(index) {
          alert('clicked index ' + index);;
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

  for (var i = 0; i < 5; i++) {
    $scope.addItem();
  }

  $scope.doRefresh = function() {
    console.log('doRefresh()');
    $timeout(function() { 
      $scope.addItem();
      $scope.$broadcast('scroll.refreshComplete'); 
    }, 2000);
  }


  // for ion-list:
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };

  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
