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
		}
	}
);
