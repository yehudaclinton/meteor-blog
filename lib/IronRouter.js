Router.configure({
    layoutTemplate: 'AppLayout'
});

Router.route('/', function() {
    this.render('Home');
});

Router.route('/createpost', function() {
    this.render('CreatePost');
});

Router.route('/showposts', function() {
    this.render('ShowPosts');
});
