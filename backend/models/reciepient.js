var thinky = require('thinky')();
var {type}  = thinky;


const Recipient= thinky.createModel("Recipient",{
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = Recipient;