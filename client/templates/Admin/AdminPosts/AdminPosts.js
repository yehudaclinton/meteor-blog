Template.AdminPosts.helpers({
    posts: function() {
        return Posts.find();
    }
});

Template.AdminPosts.events({
    'click #editPost': function() {
        Router.go('/admin/posts/' + this._id);
    },
    'click #deletePost': function() {
        Meteor.call('deletePost', this._id);
    }
});
