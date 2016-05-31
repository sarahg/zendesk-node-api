var Zendesk = require('./src/zendesk.js');

var zendesk = new Zendesk({
  url: 'http://z3n3310.zendesk.com',
  email: 'agray@zendesk.com'
});

zendesk.tickets.list().then(function(tickets){
  console.log(tickets);
})
