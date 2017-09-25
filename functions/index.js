// require('dotenv').config();
//
// const TWILIO_PHONE_NUMBER = +18055902198;
//
// //require the Twilio module and create a REST client
// var client = require('twilio')(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );
//
// client.messages.create(
//   {
//     from: TWILIO_PHONE_NUMBER,
//     to: process.env.masato,
//     body: 'Hello Dispatch!'
//   },
//   function(err, message) {
//     console.log(message.sid);
//   }
// );
//
// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);
//
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//
// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
// exports.sendMessage = functions.database.ref('/dispatches').onWrite(event => {
//   .onWrite(event => {
//
//   });

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.sendMessage = functions.database
  .ref('/ers-dispatch/test_dispatches')
  .onWrite(event => {
    // Grab the current value of what was written to the Realtime Database.
    console.log('event', event);
    const original = event.data.val();
    console.log('original', original);
    // const uppercase = original.toUpperCase();
    // You must return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to the Firebase Realtime Database.
    // Setting an "uppercase" sibling in the Realtime Database returns a Promise.

    return event.data.ref.parent.child('uppercase').set(uppercase);
  });
