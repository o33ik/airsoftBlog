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
        console.log(this.skip);
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