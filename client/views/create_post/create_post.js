/*****************************************************************************/
/* CreatePost: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreatePost.events({
  'click #createPost-btn': function (e, tmpl) {
    var title, titleImg, category, authorId, text;

    authorId = Meteor.userId();
    
    title = $('.createPost-title').val();
    $('.createPost-title').val('');

    titleImg = $('.createPost-titleImg').val();
    $('.createPost-titleImg').val('');
    
    category = $('.createPost-category').val();

    text = $('#summernote').code();
    $('#summernote').code('');

    var post = {
        authorId: authorId,
        title: title,
        titleImg: titleImg,
        category: category,
        text: text
    };
    
    Meteor.call('createPost', post, function (error, result) {});
  }
});

Template.CreatePost.helpers({
});

/*****************************************************************************/
/* CreatePost: Lifecycle Hooks */
/*****************************************************************************/
Template.CreatePost.created = function () {
};

Template.CreatePost.rendered = function () {
  $(document).ready(function() {
    $('#summernote').summernote();
  });
};

Template.CreatePost.destroyed = function () {
};