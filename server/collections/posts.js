/*
 * Add query methods like this:
 *  Posts.findPublic = function () {
 *    return Posts.find({is_public: true});
 *  }
 */

Posts.allow({
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

Posts.deny({
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

Meteor.publish('posts', function () {
    return Posts.find();
});


var CATEGORIES = ['views', 'milsim', 'weapons', 'equipment'];

if(Posts.find().count() === 0) {
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '1', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '2', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '3', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '4', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '4', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '5', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '6', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '7', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '8', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '9', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '10', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '11', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '12', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '13', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '14', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '15', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '16', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '17', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '18', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '19', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '20', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: '21', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: 'View of authentic MK46', text: 'View of authentic MK46.', titleImg: 'https://pp.vk.me/c625824/v625824663/25549/RMwnb6M0Sfs.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[1], title: 'Kit-list for 75 Rangers Regiment 2007-2009', text: 'Kit-list for 75 Rangers Regiment 2007-2009', titleImg: 'https://pp.vk.me/c625824/v625824663/25551/4wx-fmcAG4E.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[3], title: 'Flyee LBT1961', text: 'Flyee LBT1961.', titleImg: 'http://i380.photobucket.com/albums/oo249/elvenastm6/gear2/DSC_0455.jpg', createdAt: new Date()});
  Posts.insert({likes: [], tags: [], comments: [], authorId: 'xiYQPv4c9FNovYepD', category: CATEGORIES[2], title: 'A&K SR-25', text: "I've owned an A&K SR25 full size for a few months now, and in a fit of weakness, insanity, or awesomeness, purchased a CA SR25K brand new from ASGI last week. It arrived tonight, and I decided I should do a comparison between the two, to aid future buyers and because frankly, I'm bored.  Laughing I won't go too terribly in depth with this review, as I don't feel like cracking open any gearboxes. However, I'll try to provide the best info I can, and I do have some chrono-verified numbers for everyone as well. As far as some background on myself, I've played airsoft for the better part of 5 years, if not longer now. I've owned all sorts of guns, and have bought and sold more than I can count. I have ZERO real life experience, but have played at numerous out of state and in-state operations, pickup games, and private games.", titleImg: 'http://i.ytimg.com/vi/wQ0Kb9w2GwE/maxresdefault.jpg', createdAt: new Date()});
};