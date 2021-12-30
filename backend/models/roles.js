var thinky =require('thinky')();
var {type}= thinky;

var Role =thinky.createModel("Role",{
id:type.String(),
roleName:type.String(),
permissionId:type.string()


})

Role.hasMany(Permissions,"permissions","permissionId","id");
