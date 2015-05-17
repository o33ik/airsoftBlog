Meteor.methods({
	// return data about currentUser
	userInfo: function (userId) {
		var user = Meteor.users.findOne({_id: userId});
		return user;
	}
});