var thinky = require('thinky')();
var {type}  = thinky;


var Invoice = thinky.createModel("Invoice",{
id:type.String(),
name:type.string(),
created:Date.now(),
CustomerId:type.string(),
CustomerName:type.string(),
status:type.Boolean(),
purchaseOrder:type.string(),
paymentDueby:type.Date(),
BussinessName:type.string(),
address:type.String(),
contact:type.string(),
price:type.Number(),
planType:type.String(),
totalAmount:type.Number(),

});

module.exports=Invoice;

