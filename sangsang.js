/**
 * Created by 5304-19 on 2016-06-16.
 */
if(Meteor.isClient) {

    Router.route('/', {name: 'home'});
    Router.route('/about', {name: 'about'});
    Router.route('/contact', {name: 'contact'});
}