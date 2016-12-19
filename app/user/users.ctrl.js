angular
    .module('ninja.user')
    .controller('usersCtrl', function($scope, $state, userService, $rootScope, $cookies, helper) {

        $scope.contacts = [];

        userService.getAllUsers()
            .then(function(contacts) {
                $scope.contacts = contacts;
            })
            .catch(function(e) {
                console.error(e);
            });

        $scope.open = function(contact) {
            $rootScope.user = contact;
            $state.go('user-profile', {
                contact: contact,
                id: contact.id
            });
        };

        /* Otvara state edit-contact i prosledjuje mu Contact objekat i id kontakta */
        $scope.edit = function(contact) {
            $state.go('user-edit', {
                contact: contact,
                id: contact.id

            });
        };

        /* Brisemo kontakt sa APIja pa onda iz lokalne liste */
        $scope.delete = function(contact) {
            userService.deleteUser(contact.id)
                .then(function() {

                    helper.removeFromList(contact, $scope.contacts);
                    /* $state.go('users');*/

                }).catch(function(e) {
                    console.error(e);
                });
        };

        $scope.sortField = 'firstName';
        $scope.order = 'asc';

        $scope.sort = function(sortField) {
            if ($scope.sortField == sortField) {
                $scope.toggleSortOrder();
            } else {
                $scope.sortField = sortField;
            }
        };

        $scope.toggleSortOrder = function() {
            $scope.order = ($scope.order == 'asc') ? 'desc' : 'asc';
        };

    });
