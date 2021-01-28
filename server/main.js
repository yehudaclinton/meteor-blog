import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

//https://github.com/meteor-useraccounts/core/blob/master/Guide.md#options
//https://stackoverflow.com/questions/36168563/accountstemplates-is-not-defined
});
//var addrole = function(userId, info) {
//  console.log("new user " + userId);
//}
//AccountsTemplates.configure({
//  postSignUpHook: addrole
//});


/*var addrole = function(userId, info) {
  console.log("new user " + userId);
}*/


Accounts.onCreateUser(function(options,user){
console.log("test"+jsonoptions);
});


/*Accounts.onCreateUser((options, user) => {//
console.log("on create "+this.userId);
Roles.addUsersToRoles(this.userId,'admin');

  const customizedUser = Object.assign({
    dexterity: _.random(1, 6) + _.random(1, 6) + _.random(1, 6),
  }, user);

  // We still want the default hook's 'profile' behavior.
  if (options.profile) {
    customizedUser.profile = options.profile;
  }

  return customizedUser;
});*/


