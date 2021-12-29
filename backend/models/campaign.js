var thinky = require('thinky')();
var {type}  = thinky;
var r= thinky.r;


const Recipient = require('./reciepient');

const survey = thinky.createModel("survey",{
  title: type.string(),
  body: type.string(),
  subject: type.string(),
  recipients: [Recipient],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  dateSent: Date,
  lastResponded: Date,
  createdAt:type.date().default(r.now())

});

module.exports=survey;