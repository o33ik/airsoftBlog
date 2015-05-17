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
	'/', 
	{
		name: 'home', 
		template: 'Home'
	}
);

Router.route(
	'/news', 
	{
		name: 'news', 
		template: 'News',
		data: function () {
			var self = this;
			return {
				category: 'news'
			}
		}
	}
);

Router.route(
	'/news/:category',
	{
		template: 'News',
  		data: function () {
  			console.log('Router go');
 		   	var self = this;
   		 	return {
      			category: self.params.category
    		}
  		}
	}
)



Router.route('/:post', {name: 'post'});
