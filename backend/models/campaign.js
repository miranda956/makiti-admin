var thinky = require('thinky')();
var {type}  = thinky;


const Recipient = require('./reciepient');

const survey = thinky.createModel("survey",{
  title: String,
  body: String,
  subject: String,
  recipients: [Recipient],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  dateSent: Date,
  lastResponded: Date
});

module.exports=survey;