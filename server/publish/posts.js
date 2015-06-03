/*****************************************************************************/
/* Posts Publish Functions
/*****************************************************************************/


Meteor.publish('posts', function (category) {
	if (category)
		return Posts.find({category: category});	
    return Posts.find({});
});

Meteor.publish('post', function (postId) {
	console.log (postId);
	return Posts.find({_id: postId});
})