Router.configure({
    layoutTemplate: 'AppLayout'
});

Router.route('/', function() {
    this.render('Home');
});

Router.route('/showposts', function() {
    this.render('ShowPosts');
});

Router.route('/post/:_id', function() {
    this.render('SinglePost', {
        data: function() {
            return Posts.findOne({_id: this.params._id});
        }
    });
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

Router.route('admin/createpost', function() {
    if(Roles.userIsInRole(Meteor.user(), 'admin')) {
        this.render('AdminCreatePost');
    } else {
        Route.go('/');
    }
});
