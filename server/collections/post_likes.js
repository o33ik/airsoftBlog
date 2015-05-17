/*
 * Add query methods like this:
 *  PostLikes.findPublic = function () {
 *    return PostLikes.find({is_public: true});
 *  }
 */
PostLikes.allow({
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

PostLikes.deny({
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