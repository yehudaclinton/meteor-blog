Template.AdminCreatePost.events({
    'submit #createPost' : function() {
        event.preventDefault();

        var title = event.target.postTitle.value;
        var body = event.target.postBody.value;
        var postBody = $('#summernote').summernote('code');

        // console.log(postBody);

        Meteor.call('createPost', title, body, postBody, function(error) {
            if(!error) {
                Router.go('/showposts');
            }
        });
    }
});
// Everytime the template renders
Template.AdminCreatePost.onRendered(function() {
    $(document).ready(function() {
        $('#summernote').summernote();
    });
});
