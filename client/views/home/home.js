var currUser = new ReactiveVar();

/*****************************************************************************/
/* Home: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Home.events({
	/*
	 * Example:
	 *  'click .selector': function (e, tmpl) {
	 *
	 *  }
	 */
});

Template.Home.helpers({
	/*
	 * Example:
	 *  items: function () {
	 *    return Items.find();
	 *  }
	 */
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
	Meteor.call('userInfo', Meteor.userId(), function (error, result) {
		currUser.set(result);
		console.log(currUser.get());
	});
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};