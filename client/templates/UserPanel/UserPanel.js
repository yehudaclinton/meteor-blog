Template.UserPanel.events({
    'submit #changePassword': function() {
        event.preventDefault();

        var oldPW = event.target.oldPassword.value;
        var newPW = event.target.newPassword.value;

        Accounts.changePassword(oldPW, newPW, function(error) {
            if(!error) {
                alert("Password has been changed.");
            }
        });
    }
});
