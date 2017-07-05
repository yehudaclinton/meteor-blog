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

Router.route('/admin', function() {
    this.render('AdminPanel');
});

Router.route('/admin/posts', function() {
    this.render('AdminPosts');
});
