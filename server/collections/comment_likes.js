/*
 * Add query methods like this:
 *  CommentLikes.findPublic = function () {
 *    return CommentLikes.find({is_public: true});
 *  }
 */
CommentLikes.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});

CommentLikes.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});