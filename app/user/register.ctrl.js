angular
    .module('ninja.user')
    .controller('RegisterCtrl', function($scope, $state, $q, userService) {

        $scope.userCredentials = {
            username: '',
            password: '',
            repeatPassword: ''
        };
        $scope.errors = [];

        $scope.sendUserCredentials = function() {
            //TODO provjeriti da li su password i repeatPassword isti

            if ($scope.userCredentials.password === $scope.userCredentials.repeatPassword) {
                userService.createUser({
                        username: $scope.userCredentials.username,
                        password: $scope.userCredentials.password
                    })
                    .then(function(user) {
                        $state.go('login');
                    })
                    .catch(function(e) {
                        console.error(e);
                        console.log(e);
                          $scope.errors.push(e.data.errors);
                    });
            } else {
                alert("password i repeatPassword nisu isti");
            }


        };

    });
