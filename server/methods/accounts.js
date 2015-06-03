Meteor.methods({
	// return name about user by him id
	userName: function (userId) {
		var user = Meteor.users.findOne({_id: userId});
		return user;
	},
	'returnUser': function (userId) {
		return Meteor.users.findOne({_id: userId});
	}
});