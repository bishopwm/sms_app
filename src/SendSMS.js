let plivo = require('plivo');
let client = new plivo.Client('auth_id','auth_token');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const authId = process.env.AUTH_ID;
const authToken = process.env.AUTH_TOKEN;

client.messages.create(
  'plivo_src_number',
  'your_destination_number',
  'Hello, world!'
).then(function(message_created) {
  console.log(message_created)
});