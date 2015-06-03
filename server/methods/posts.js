Meteor.methods({
	'createPost': function (post) {
		if (Meteor.users.findOne({_id: post.authorId}))
			Posts.insert({
		        authorId: post.authorId,
		        title: post.title,
		        titleImg: post.titleImg,
		        category: post.category,
		        text: post.text,
		        createdAt: new Date()
			});
	}
});


    // var post = {
    //     authorId: authorId,
    //     title: title,
    //     titleImg: titleImg,
    //     category: category,
    //     text: text,
    //     createdAt: new Date()
    // };