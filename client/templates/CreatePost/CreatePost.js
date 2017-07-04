Template.CreatePost.events({
    'submit #createPost' : function() {
        event.preventDefault();

        var title = event.target.postTitle.value;
        var body = event.target.postBody.value;

        Posts.insert({
            Title: title,
            Body: body
        });
    }
});
