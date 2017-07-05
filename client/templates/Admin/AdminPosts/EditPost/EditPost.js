Template.EditPost.events({
    'submit #editPost' : function() {
        event.preventDefault();

        var title = event.target.postTitle.value;
        var body = event.target.postBody.value;
        var postBody = $('#summernote').summernote('code');



        Meteor.call('editPost', this._id, title, body, postBody, function(error) {
            if(!error) {
                Router.go('/admin/posts');
            }
        });
    }
});

Template.EditPost.onRendered(function() {
    $(document).ready(function() {
        $('#summernote').summernote();
    });
});
