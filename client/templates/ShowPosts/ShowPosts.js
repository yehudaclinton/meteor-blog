Template.ShowPosts.helpers({
    posts: function() {
        return Posts.find();
    }
});

Template.ShowPosts.events({
    'click #readMore': function() {
        Router.go('/post/' + this._id);
    }
});
