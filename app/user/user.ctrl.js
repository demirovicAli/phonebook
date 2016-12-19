angular
  .module('ninja.user')
  .controller('UserCtrl', function($scope, $rootScope, $stateParams){
    /*$scope.user = $rootScope.user;
    */
    if ($stateParams.contact) {
      // Ako smo dobili citav kontakt u $stateParams onda koristimo njega
      $scope.user = $stateParams.contact;
    } else if ($stateParams.id) {
      // Ako smo dobili samo id u $stateParams onda dobavljamo kontakt sa APIja
      userService.getUser($stateParams.id)
        .then(function(contact){
          $scope.user = contact;
        });
    }
    
  });
