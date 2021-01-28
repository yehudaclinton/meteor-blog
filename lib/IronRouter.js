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
  console.log('alanning roles success !!');
}else{ console.log('fail to enter via alanning roles'); }
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

Router.route('/ChangePasswd', function() {
    if(Meteor.userId()) {
        this.render('ChangePasswd');
    } else {
        Route.go('/');
    }
});

Router.route('/admin/users', function() {
    if(Roles.userIsInRole(Meteor.user(), 'admin')) {
        this.render('UserPanel');
    } else {
        Route.go('/');
    }
});

Router.route('admin/createpost', function() {
    console.log("heellllllloooooooooooo ");//+Meteor.user().profile.name
    //this.userId//
    if(Roles.userIsInRole(Meteor.user(), 'admin')) {
    console.log("yyyeeeessssss yyyyyyyeeeeehuuuuuuuudaaaaaaa");
        this.render('AdminCreatePost');
    } else {
    console.log("baaaaaaaaaaaaaad yyyyyyyeeeeehuuuuuuuudaaaaaaa");
        Route.go('/');
    }
});
