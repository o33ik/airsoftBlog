var LIMIT = 10;
var limit = new ReactiveVar(LIMIT);

/*****************************************************************************/
/* News: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.News.events({
    'click #news-toCreatePost': function (e, tmpl) {
        Router.go('/createPost');    
    },
    'click #loadMore': function (e, tmpl) {
        limit.set(limit.get() + LIMIT);
    }
});

Template.News.helpers({
    // we are trying to load data from collection and checking whether data exist
    'posts': function () {
        if (getPostsFromCollection(this.category, limit.get()))
            return getPostsFromCollection(this.category, limit.get());
    }
});

/*****************************************************************************/
/* News: Lifecycle Hooks */
/*****************************************************************************/
Template.News.created = function () {
};

Template.News.rendered = function () {
};

Template.News.destroyed = function () {
    console.log('destroyed');
};

function getPostsFromCollection (category, limit) {
    var data;

    if (category == 'news')
        data = Posts.find({}, {limit: limit, sort: {'createdAt': -1}});
    else
        data = Posts.find({category: category}, {limit: limit, sort: {'createdAt': -1}});
    return data;
}



// reactVar, that contains obj with properties and values such as 'post_id' = 'author_id'
var author_postReact = new ReactiveVar({});

Template.post.events({
    'click .post-author': function (e, tmpl) {
        Router.go('/user/' + tmpl.data.authorId);
    },
    'click .post-title': function (e, tmpl) {
        Router.go('/post/' + tmpl.data._id);
    }
});

Template.post.helpers({
    // get each author name and push it into reactVar
    'getAuthorName': function () {
        var self = this;
        Meteor.call('userName', this.authorId, function (error, result) {
            var author_post = author_postReact.get();
            author_post[self._id] = result;
            author_postReact.set(author_post);
        });
    },
    'authorName': function () {
        if (this._id in author_postReact.get())
           return author_postReact.get()[this._id].profile.name;
       return false;        
    }
});