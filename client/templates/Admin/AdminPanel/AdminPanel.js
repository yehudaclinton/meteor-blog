Template.AdminPanel.helpers({
    nposts: function() {
        return Posts.find().fetch().length;
    }
});
