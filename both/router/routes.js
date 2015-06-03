/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  yieldTemplates: {
    'Top': {'to': 'top'},
    'Footer': {'to': 'footer'}
  }
});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/

Router.route(
	'home', 
	{
		path: '/',
		name: 'home', 
		template: 'Home'
	}
);

// skip object  
var SKIP = 10;

Router.route(
	'news', 
	{
		path: '/news', 
		template: 'News',
		data: function () {
			var self = this;
			return {
				category: 'news',
				skip: SKIP
			}
		},
		waitOn: function () {
  			console.log ('wait news');
			this.subscribe ('posts');
		}
	}
);

Router.route(
	'category',
	{
		path: '/news/:category',
		template: 'News',
  		data: function () {
  			console.log('Router go');
 		   	var self = this;
   		 	return {
      			category: self.params.category,
      			skip: SKIP
    		}
  		},
  		waitOn: function () {
  			console.log ('wait category');
  			this.subscribe ('posts', this.params.category);
  		}
	}
);


Router.route(
	'post', 
	{
		path: '/post/:id',	
		template: 'Post',
		data: function () {
			var self = this;
			return {
				postId: self.params.id
			}
		},
		waitOn: function () {
			this.subscribe ('post', this.params.id);
			this.subscribe ('comments', this.params.id);
		}
	}
);


Router.route(
	'user', 
	{	
		path: '/user/:id',
		template: 'User',
		data: function () {
  			console.log ('wait user')
			var self = this;
			return {
				userId: self.params.id
			}
		} 	
	}
);
Router.route(
	'createPost', 
	{
		path: '/createPost',
		template: 'CreatePost'
	});
