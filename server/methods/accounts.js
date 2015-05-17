Meteor.methods({
	// return name about user by him id
	userName: function (userId) {
		console.log(userId);
		var user = Meteor.users.findOne({_id: userId});
		console.log(user);
		return user;
	}
});