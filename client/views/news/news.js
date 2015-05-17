var posts = new ReactiveVar();
/*****************************************************************************/
/* News: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.News.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.News.helpers({
    'isPosts': function () {
        var data = Posts.find();
        if (data.count() == 0) 
            return false;
        posts.set(data.fetch());
        return true;
    },
    'posts': function () {
        return posts.get();
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
};