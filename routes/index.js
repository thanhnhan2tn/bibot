const binance = require('node-binance-api');
const express = require('express');
const router = express.Router();
const http = require('http');
// var AWS = require('aws-sdk');
const TelegramBot = require('node-telegram-bot-api');

const _ = require('lodash');

const token = process.env.teleKey;
const teleId = process.env.teleChanel; //1121576537;
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {
  polling: true
});



binance.options({
  'APIKEY': process.env.binanceKey,
  'APISECRET': process.env.binanceSecret
});

function execution_update(data) {
  let {
    x: executionType,
    s: symbol,
    p: price,
    q: quantity,
    S: side,
    o: orderType,
    i: orderId,
    X: orderStatus
  } = data;
  let message = '';
  const key = executionType + '-' + orderId;
  let counter = 0;
  //
  message = '#' + symbol + ', ' + side + ' ' + orderType + ' ' + price + ' ' + quantity;
  if (executionType.indexOf('TRADE') < 0) {
    console.log(message);
    return;
  }
  // AWS.config.region = process.env.awsSNSRegion;
  // AWS.config.update({
  // 	accessKeyId: process.env.awsKeyId,
  // 	secretAccessKey: process.env.awsSecret
  // });

  // const sns = new AWS.SNS();
  // const params = {
  // 	Message: message,
  // 	MessageStructure: 'string',
  // 	PhoneNumber: process.env.phoneNumber,
  // 	Subject: 'Order Alert'
  // };

  // sns.publish(params, function (err, data) {
  // 	if (err) { console.log(err, err.stack); } // an error occurred
  // 	else { console.log(data); }
  // });

  try {
    bot.sendMessage(teleId, message).catch((error) => {
      console.log(error.code); // => 'ETELEGRAM'
      console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
    });

  } catch (error) {
    console.log(error);
  }
}


try {
  binance.websockets.userData(function () {
    console.log('1');
  }, execution_update);
  bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
  });

  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
  });
} catch (e) {
  console.log(e);
}

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get("/debug-sentry", function mainHandler(req, res) {
  console.error("My first Sentry error!");
});


module.exports = router;