/*****************************************************************************/
/* Top: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Top.events({
    'click #news-link': function (e, tmpl) {
        Router.go('news');
    },
    'click #milsim-link': function (e, tmpl) {
        Router.go('/news/milsim');
    },
    'click #weapons-link': function (e, tmpl) {
        Router.go('/news/weapons');
    },
    'click #equipment-link': function (e, tmpl) {
        Router.go('/news/equipment');
    },
    'click #map-link': function (e, tmpl) {
        // will be soon
        Router.go('/');
    }
});

Template.Top.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Top: Lifecycle Hooks */
/*****************************************************************************/
Template.Top.created = function () {
};

Template.Top.rendered = function () {
};

Template.Top.destroyed = function () {
};