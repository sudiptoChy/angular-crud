(function () {

    var MembersFactory = function ($http) {
        var factory = {};

        factory.getMembers = function () {
            var memberRecord = localStorage.getItem("members");
            var members = [];
            if (!memberRecord) {
                return members;
            } else {
                members = JSON.parse(memberRecord);
                return members;
            }
        }

        factory.getSingleMember = function (member) {
            var members = this.getMembers(); 
            var member = members.find(function (item) {
                return item.id == member.id;
            })
            return member;
        }

        factory.storeMember = function (data) {
            var members = this.getMembers();
            members.push(data);
            this.formatAndSaveToLocalStorage(members);
        }

        factory.deleteMember = function (member) {
            var members = this.getMembers();
            var membersAfterDeletion = members.filter(function (item, index) {
                return item.id != member.id;
            })
            this.formatAndSaveToLocalStorage(membersAfterDeletion);
        }

        factory.updateMember = function (member) {
            var members = this.getMembers();

            var editedMember = members.find(function (item) {
                return item.id == member.id;
            })

            editedMember.first_name = member.first_name;
            editedMember.last_name = member.last_name;
            editedMember.email = member.email;
            editedMember.d_o_b = member.d_o_b;
            editedMember.designation = member.designation;

            this.formatAndSaveToLocalStorage(members);

        }

        factory.formatAndSaveToLocalStorage = function (memberData) {
            var data = JSON.stringify(memberData);
            localStorage.setItem("members", data);
        }

        return factory;
    };

    MembersFactory.$inject = ['$http'];

    angular.module('angularCrudApp')
    .factory('MembersFactory', MembersFactory);

}())