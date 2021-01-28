Template.UserPanel.events({
    'submit #newUser': function() {
        event.preventDefault();

        var userName = event.target.username.value;
        var email = event.target.email.value;
        var password = event.target.newPassword.value;
console.log("self respect "+userName);
Accounts.createUser({email:email,username:userName,password:password,profile:{username:userName}},function(error){});

//TODO latest plan to make this a regular method and just do it on the server (remember to validate)

/*
Accounts.createUser({
    email: email,
    password: password
}, function(error){
    if(error){
        console.log(error.reason); // Output error if registration fails
    } else {
        console.log("home"); // Redirect user if registration succeeds
    }
});
*/




        /*Accounts.changePassword(oldPW, newPW, function(error) {
            if(!error) {
                alert("Password has been changed.");
            }
        });*/
    }
});
