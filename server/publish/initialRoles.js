Meteor.startup(function () { 
  if(Meteor.users.find().count() < 1) {
  
    Roles.createRole('user');
    Roles.createRole('admin');
    Roles.createRole('USERS_VIEW');
    Roles.createRole('POST_EDIT');
    Roles.addRolesToParent('USERS_VIEW', 'admin');
    Roles.addRolesToParent('POST_EDIT', 'admin');
    Roles.addRolesToParent('POST_EDIT', 'user');
  
    var id = Accounts.createUser({
      email: 'admin@admin.com',
      password: '123',
      profile:{name:'Administrator'}
    });
    console.log('admin role created '+id+'  admin');
    Roles.addUsersToRoles(id,'admin');
  }

});
 Meteor.publish(null, function () {
  if (this.userId) {
    Roles.addUsersToRoles(this.userId, 'admin');
    console.log('roles published \n'+JSON.stringify(Meteor.roleAssignment.findOne()));
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  } else {
    this.ready()
  }
 })

/*Exception from sub id undefined Error: Role 'admin' does not exist*/
//create role fixed it !!!!! 714.19
