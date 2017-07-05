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
    if(Roles.userIsInRole(Meteor.user(), 'admin')) {
        this.render('AdminPanel');
    } else {
        Route.go('/');
    }
});

Router.route('/admin/posts', function() {
    if(Roles.userIsInRole(Meteor.user(), 'admin')) {
        this.render('AdminPosts');
    } else {
        Route.go('/');
    }
});

Router.route('/admin/posts/:_id', function() {
    if(Roles.userIsInRole(Meteor.user(), 'admin')) {
        this.render('EditPost', {
            data: function() {
                return Posts.findOne({_id: this.params._id});
            }
        });
    } else {
        Route.go('/');
    }
});

Router.route('/userpanel', function() {
    if(Meteor.userId()) {
        this.render('UserPanel');
    } else {
        Route.go('/');
    }
});
