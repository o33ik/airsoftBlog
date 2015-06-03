/*****************************************************************************/
/* Comments Publish Functions
/*****************************************************************************/

Meteor.publish('comments', function (mediaId) {
	return Comments.find({mediaId: mediaId}, {sort: {'createdAt': -1}});
});