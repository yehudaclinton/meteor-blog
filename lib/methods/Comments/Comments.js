Meteor.methods({
    addComment: function(comment, postID) {
        // Get user
        var user = Meteor.user();

        if(!user) {
            throw new Meteor.Error("You must be logged in to comment.");
        }

        if(!comment) {
            throw new Meteor.Error("Comment field cannot be empty.");
        }

        if(!postID) {
            throw new Meteor.Error("Post ID is undefined.");
        }

        // console.log(user.profile.name + ', ' + comment + ', ' + user._id + ', ' + postID + ', ' + Date.now());

        // user._id and postID are foreign keys
        Comments.insert({
            Author: user.profile.name,
            Comment: comment,
            UserId: user._id,
            PostId: postID,
            CreatedAt: Date.now()
        });
    },
    deleteComment: function(commentId) {
        if(!commentId) {
            throw new Meteor.Error("Comment ID is undefined.");
        }

        Comments.remove(commentId);
    }
});
