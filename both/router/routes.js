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

Router.route('/', {name: 'home', template: 'Home'});
Router.route('/news', {
	name: 'news', 
	template: 'News'
});
Router.route('/:post', {name: 'post'});
