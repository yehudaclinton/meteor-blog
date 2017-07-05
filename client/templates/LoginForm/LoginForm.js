Template.LoginForm.events({
    'submit #loginForm': function() {
        event.preventDefault();

        var username = event.target.username.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(username, password); // built-in Meteor function
    },
    'submit #registerForm': function() {
        event.preventDefault();

        var username = event.target.registration_username.value;
        var email = event.target.registration_email.value;
        var password = event.target.registration_password.value;

        var id = Accounts.createUser({
            profile:{name: username},
            email: email,
            password: password
        });
    }
});
