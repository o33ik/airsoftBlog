Meteor.methods({
	'addComment': function (mediaId ,authorId, text) {
		Comments.insert({authorId: authorId, text: text, mediaId: mediaId, createdAt: new Date()});
	},
	'deleteComment': function (commentId, authorId) {
		var comment = Comments.findOne({_id: commentId});
		if (comment.authorId === authorId)
			Comments.remove({_id: commentId});
	}
});