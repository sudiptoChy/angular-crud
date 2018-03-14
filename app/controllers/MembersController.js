(function () {

    var MembersController = function ($scope, MembersFactory) {

        $scope.sortBy = "";
        $scope.members = [];
        $scope.reverse = false;
        $scope.newMember = false;
        $scope.showInfo = true;
        $scope.singleMember = {};
        $scope.guid = function () {
            return parseInt(Date.now() + Math.random());
        }

        function init() {
            $scope.members = MembersFactory.getMembers();
        }
        init();

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        }

        $scope.createNewMember = function () {
            var obj = {
                id: $scope.guid(),
                first_name: $scope.newMember.first_name,
                last_name: $scope.newMember.last_name,
                email: $scope.newMember.email,
                d_o_b: $scope.newMember.d_o_b,
                designation: $scope.newMember.designation
            }

            MembersFactory.storeMember(obj);
            $scope.members = MembersFactory.getMembers();
            $scope.singleMember = {};
            $scope.closeDialog('addnewModal', 'hide');
        }

        $scope.showMember = function (member) {
            $scope.singleMember = MembersFactory.getSingleMember(member);
            $scope.closeDialog('showModal');
        }

        $scope.editMember = function (member) {
            $scope.singleMember = MembersFactory.getSingleMember(member);
            $scope.closeDialog('editModal');
        }

        $scope.updateMember = function () {
            MembersFactory.updateMember($scope.singleMember);
            $scope.members = MembersFactory.getMembers();
            $scope.closeDialog('editModal', 'hide');
        }

        $scope.deleteMember = function (member) {
            MembersFactory.deleteMember(member);
            $scope.members = MembersFactory.getMembers();
        }

        $scope.closeDialog = function (DialogName, command) {
            $('#'+DialogName).modal(command);
        }
    };

    MembersController.$inject = ['$scope', 'MembersFactory'];

    angular.module('angularCrudApp')
        .controller('MembersController', MembersController);

}())