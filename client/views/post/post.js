/*****************************************************************************/
/* Post: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Post.events({
    'click .postPage-category': function (e, tmpl) {
        console.log('category clicked');
    },
    'click .postPage-author': function (e, tmpl) {
        console.log('author clicked');
    },
    'click .postPage-addComment-btn': function (e, tmpl) {
        $textArea = $('.postPage-comment-textArea');

        Meteor.call('addComment', this._id, Meteor.userId(), $textArea.val(), function (error, result) {});
        
        $textArea.val('');
    }
});

Template.Post.helpers({
    post: function () {
        if (Posts.findOne({_id: this.postId}))
            return Posts.findOne({_id: this.postId})
    },
    comments: function () {
        if (Comments.find({}).count() > 0)
            return Comments.find({});
    },
    commentsCnt: function () {
        return Comments.find({}).count();
    }
});

/*****************************************************************************/
/* Post: Lifecycle Hooks */
/*****************************************************************************/
Template.Post.created = function () {
};

Template.Post.rendered = function () {
};

Template.Post.destroyed = function () {
};



Template.Comment.onCreated(function () {
    this.author = new ReactiveVar();
    var self = this;
    Meteor.call('returnUser', this.data.comment.authorId, function (error, result) {
        self.author.set(result);
    });
});

Template.Comment.events({
    'mouseenter .comment': function (e, tmpl) {
        if (this.comment.authorId == Meteor.userId())
            $(e.currentTarget).find('.comment-delete').show();
    },
    'mouseleave .comment': function (e, tmpl) {
        $(e.currentTarget).find('.comment-delete').hide();
    },
    'click .comment-delete': function (e, tmpl) {
        Meteor.call('deleteComment', this.comment._id, Meteor.userId(), function (error, result) {});
    }
})

Template.Comment.helpers({
    isAuthorName: function () {
        if (Template.instance().author.get())
            return true;
        return false;
    },
    authorName: function () {
        return Template.instance().author.get().profile.name;
    },
    authorImage: function () {
        // body...
    },
    text: function () {
        return this.comment.text;
    },
    createdAt: function () {
        return this.comment.createdAt.toDateString();
    }
});