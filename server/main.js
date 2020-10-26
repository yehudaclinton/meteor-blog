import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

/*

Accounts.onCreateUser((options, user) => {
  const customizedUser = Object.assign({
    dexterity: _.random(1, 6) + _.random(1, 6) + _.random(1, 6),
  }, user);

  // We still want the default hook's 'profile' behavior.
  if (options.profile) {
    customizedUser.profile = options.profile;
  }

  return customizedUser;
});

*/
