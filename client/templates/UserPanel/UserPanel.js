Template.UserPanel.events({
    'submit #newUser': function() {
        event.preventDefault();

        var userName = event.target.username.value;
        var email = event.target.email.value;
        var password = event.target.newPassword.value;

Accounts.createUser({username: userName, email: email, password: password});

        /*Accounts.changePassword(oldPW, newPW, function(error) {
            if(!error) {
                alert("Password has been changed.");
            }
        });*/
    }
});
