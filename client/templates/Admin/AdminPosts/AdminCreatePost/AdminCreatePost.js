Template.CreatePost.events({
    'submit #createPost' : function() {
        event.preventDefault();

        var title = event.target.postTitle.value;
        var body = event.target.postBody.value;

        Meteor.call('createPost', title, body, function(error) {
            if(!error) {
                Router.go('/showposts');
            }
        });
    }
});
