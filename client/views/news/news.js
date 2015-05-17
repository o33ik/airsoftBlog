var postsReact = new ReactiveVar();

var skipReact = new ReactiveVar(10);
/*****************************************************************************/
/* News: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.News.events({
    'click #loadMore': function (e, tmpl) {
        var data = getPostsFromCollection(this.category, skipReact.get());
        // append existing data(posts) with loaded
        postsReact.set(postsReact.get().concat(data.fetch()));
        skipReact.set(skipReact.get() + 10);
    }
});

Template.News.helpers({
    // we are trying to load data from collection and checking whether data exist
    'isPosts': function () {
        var category = this.category;        
        var data;

        data = getPostsFromCollection(category, 0);

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
        data = Posts.find({}, {skip: skip, limit: 10});
    else
        data = Posts.find({category: category}, {skip: skip, limit: 10});
    return data;
}