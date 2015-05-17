/* 
    limit - count of posts, that displaying per one loading, 
    skip - when we loading oldest post, we should skip posts, which are loading already
*/
var LIMIT = 10;
var SKIP = LIMIT;

var postsReact = new ReactiveVar();

/*****************************************************************************/
/* News: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.News.events({
    'click #loadMore': function (e, tmpl) {
        var data = getPostsFromCollection(this.category, this.skip);

        postsReact.set(postsReact.get().concat(data.fetch()));

        // every loading of new posts, we are increasing number of skipping posts 
        this.skip += SKIP;
    }
});

Template.News.helpers({
    // we are trying to load data from collection and checking whether data exist
    'isPosts': function () { 
        var data = getPostsFromCollection(this.category, 0);

        if (data.count() == 0) 
            return false;
        postsReact.set(data.fetch());
        return true;
    },
    'posts': function () {
        return postsReact.get();
    }
});

/*****************************************************************************/
/* News: Lifecycle Hooks */
/*****************************************************************************/
Template.News.created = function () {
    Meteor.subscribe('posts');
};

Template.News.rendered = function () {
};

Template.News.destroyed = function () {
    console.log('destroyed');
};

function getPostsFromCollection (category, skip) {
    var data;

    if (category == 'news')
        data = Posts.find({}, {skip: skip, limit: LIMIT});
    else
        data = Posts.find({category: category}, {skip: skip, limit: LIMIT});
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