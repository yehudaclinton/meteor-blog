Template.EditPost.events({
    'submit #editPost' : function() {
        event.preventDefault();

        var title = event.target.postTitle.value;
        var body = event.target.postBody.value;

        Meteor.call('editPost', this._id, title, body, function(error) {
            if(!error) {
                Router.go('/admin/posts');
            }
        });
    }
});
