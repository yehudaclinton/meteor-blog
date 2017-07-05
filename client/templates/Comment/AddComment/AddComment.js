Template.AddComment.events({
    'submit #addCommentForm': function(event, template) {
        event.preventDefault();

        var comment = event.target.addComment.value;
        var postID = template.data._id; // Retrieve post's ID to use as foreign key

        console.log(comment + '//' + postID);

        Meteor.call('addComment', comment, postID, function(error) {
            if(!error) {
                alert("Comment added.");
            } else {
                alert("Comment could not be submitted.");
            }
        });
    }
});
