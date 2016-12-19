angular
    .module('ninja.user')
    .controller('edituserCtrl', function($scope, userService, $rootScope, $cookies, $stateParams, $state) {

        /*$scope.user = $rootScope.user;*/

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



$scope.editUser = function (user) {
userService.updateUser(user.id,user).then(function(x){
        console.log(x);
        $state.go('users');
        });

};
/*


contactService.getContact($scope.user.id)
        .then(function(contact){
          $scope.user = contact;
        });*/
    });
