Meteor.methods({
    createPost: function(title, body, postBody) {
        // check is user is 'admin' before creating post
        if(Roles.userIsInRole(Meteor.user(), 'admin')) {
            var id = Posts.insert({
                Title: title,
                Body: body,
                PostBody: postBody,
                CreatedAt: Date.now()
            });

            return id;
        } else {
            throw new Meteor.Error('Not authorized');
        }
    },
    editPost: function(postID, title, body) {
        if(Roles.userIsInRole(Meteor.user(), 'admin')) {
            Posts.update(postID, {
                $set:{
                    Title: title,
                    Body: body,
                    PostBody: postBody
                }
            });
        } else {
            throw new Meteor.Error('Not authorized');
        }
    },
    deletePost: function(postID) {
        if(Roles.userIsInRole(Meteor.user(), 'admin')) {
            Posts.remove(postID);
        } else {
            throw new Meteor.Error('Not authorized');
        }
    }
});
