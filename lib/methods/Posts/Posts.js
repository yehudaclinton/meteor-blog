Meteor.methods({
    createPost: function(title, body) {
        var id = Posts.insert({
            Title: title,
            Body: body
        });

        return id;
    },
    editPost: function(postID, title, body) {
        Posts.update(postID, {
            $set:{
                Title: title,
                Body: body
            }
        });
    },
    deletePost: function(postID) {
        Posts.remove(postID);
    }
});
