/* eslint-disable brace-style */
/* eslint-disable camelcase */
// CONFIG===============================================
/* Uses the slack button feature to offer a real time bot to multiple teams */
var Botkit = require('botkit')
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/botkit-demo'
var db = require('../../config/db')({mongoUri: mongoUri})
const Wreck = require('wreck');

var controller = Botkit.facebookbot({
  debug: true,
  access_token: process.env.FACEBOOK_PAGE_TOKEN,
  verify_token: process.env.FACEBOOK_VERIFY_TOKEN,
  storage: db
})

var bot = controller.spawn({})

// // Retrieve
// var MongoClient = require('mongodb').MongoClient;

// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
//   if(!err) {
//     console.log("We are connected");
//   }
// });

// SETUP
require('./facebook_setup')(controller)

// Conversation logic
require('./conversations')(controller)


var showFirstQuestions = function (message) {
  
    var formData = {
        "recipient":{
            "id":""+message.user
        },
        "message":{
            "text":"Bạn không phải bê đê chứ?",
            "quick_replies":[
                {
                    "content_type":"text",
                    "title":"Ừa, chuẩn đực",
                    "payload":"chuan_duc",
                    "image_url":"https://www.upinns.com/media/images/page/five-ame-ac-pink.png"
                },
                {
                    "content_type":"text",
                    "title":"Ừa, chuẩn cái",
                    "payload":"chuan_cai",
                    "image_url":"https://www.upinns.com/media/images/page/five-ame-wifi-pink.png"
                }
            ]
        }
    };

    Wreck.post('https://graph.facebook.com/v2.6/me/messages?access_token='+process.env.FACEBOOK_PAGE_TOKEN, { payload: formData }, (err, res, payload) => {
      /* do stuff */
    });
};


var showMunSelection = function (message) {
    var formData = {
        "recipient":{
            "id":""+message.user
        },
        "message":{
            "text":"Mụn của bạn thuộc loại nào?",
            "quick_replies":[
                {
                    "content_type":"text",
                    "title":"Mụn cám",
                    "payload":"mun_cam",
                    "image_url":"https://www.upinns.com/media/images/page/five-ame-ac-pink.png"
                },
                {
                    "content_type":"text",
                    "title":"Mụn đầu đen",
                    "payload":"mun_dau_den",
                    "image_url":"https://www.upinns.com/media/images/page/five-ame-wifi-pink.png"
                },
                {
                    "content_type":"text",
                    "title":"Mụn Đầu Trắng",
                    "payload":"mun_dau_trang",
                    "image_url":"https://www.upinns.com/media/images/page/five-ame-ac-pink.png"
                },
                {
                    "content_type":"text",
                    "title":"Mụn Sưng Viêm",
                    "payload":"mun_sung_viem",
                    "image_url":"https://www.upinns.com/media/images/page/five-ame-wifi-pink.png"
                }
            ]
        }
    };

    Wreck.post('https://graph.facebook.com/v2.6/me/messages?access_token='+process.env.FACEBOOK_PAGE_TOKEN, { payload: formData }, (err, res, payload) => {
      /* do stuff */
    });
}

var showDaSelection = function (message) {
    var formData = {
        "recipient":{
            "id":""+message.user
        },
        "message":{
            "text":"Da của bạn thuộc loại nào?",
            "quick_replies":[
                {
                    "content_type":"text",
                    "title":"Da dầu nhiều",
                    "payload":"da_dau_nhieu",
                    "image_url":"https://www.upinns.com/media/images/page/five-ame-ac-pink.png"
                },
                {
                    "content_type":"text",
                    "title":"Da dầu ít",
                    "payload":"da_dau_it",
                    "image_url":"https://www.upinns.com/media/images/page/five-ame-wifi-pink.png"
                },
                {
                    "content_type":"text",
                    "title":"Da dầu nhiều ở vùng chữ T, khô hai bên má",
                    "payload":"da_chu_T",
                    "image_url":"https://www.upinns.com/media/images/page/five-ame-ac-pink.png"
                },
                {
                    "content_type":"text",
                    "title":"Da nhạy cảm",
                    "payload":"da_nhay_cam",
                    "image_url":"https://www.upinns.com/media/images/page/five-ame-wifi-pink.png"
                }
            ]
        }
    };

    Wreck.post('https://graph.facebook.com/v2.6/me/messages?access_token='+process.env.FACEBOOK_PAGE_TOKEN, { payload: formData }, (err, res, payload) => {
      /* do stuff */
    });
}

var showKetQua = function (message) {
    console.log('và kết quả là :');
};

var detectPayload = function (message) {

    switch (message.payload){
        case 'chuan_duc':
        case 'chuan_cai': 
            showMunSelection(message);
            break;
        case 'mun_cam':
        case 'mun_dau_den':
        case 'mun_dau_trang':
        case 'mun_sung_viem':
            showDaSelection(message);
            break;
        case 'da_dau_it':
        case 'da_dau_nhieu':
        case 'da_nhay_cam':
        case 'da_chu_T':
            showKetQua(message);
            break;
    }
};



// this function processes the POST request to the webhook
var handler = function (obj) {
  controller.debug('Message received from FB')
  var message
  if (obj.entry) {
    for (var e = 0; e < obj.entry.length; e++) {
      for (var m = 0; m < obj.entry[e].messaging.length; m++) {
        var facebook_message = obj.entry[e].messaging[m]

        console.log(facebook_message)

        // normal message
        if (facebook_message.message) {
          message = {
            text: facebook_message.message.text,
            user: facebook_message.sender.id,
            channel: facebook_message.sender.id,
            timestamp: facebook_message.timestamp,
            seq: facebook_message.message.seq,
            mid: facebook_message.message.mid,
            attachments: facebook_message.message.attachments
          }

          // save if user comes from m.me adress or Facebook search
          create_user_if_new(facebook_message.sender.id, facebook_message.timestamp)
          
          if (facebook_message.message.quick_reply){
            var tmpMessage = message;
            tmpMessage.payload = facebook_message.message.quick_reply.payload;
            detectPayload(tmpMessage); 
          }else{
            // showFirstQuestions(message);
          }

          controller.receiveMessage(bot, message)
        }
        // When a user clicks on "Send to Messenger"
        else if (facebook_message.optin ||
                (facebook_message.postback && facebook_message.postback.payload === 'optin')) {
          message = {
            optin: facebook_message.optin,
            user: facebook_message.sender.id,
            channel: facebook_message.sender.id,
            timestamp: facebook_message.timestamp
          }

            // save if user comes from "Send to Messenger"
          create_user_if_new(facebook_message.sender.id, facebook_message.timestamp)
          
          showFirstQuestions(message);

          controller.trigger('facebook_optin', [bot, message])
        }
        // clicks on a postback action in an attachment
        else if (facebook_message.postback) {
          // trigger BOTH a facebook_postback event
          // and a normal message received event.
          // this allows developers to receive postbacks as part of a conversation.
          message = {
            payload: facebook_message.postback.payload,
            user: facebook_message.sender.id,
            channel: facebook_message.sender.id,
            timestamp: facebook_message.timestamp
          }

          controller.trigger('facebook_postback', [bot, message])

            detectPayload(message);
            
          // message = {
          //   text: facebook_message.postback.payload,
          //   user: facebook_message.sender.id,
          //   channel: facebook_message.sender.id,
          //   timestamp: facebook_message.timestamp
          // }

          // controller.receiveMessage(bot, message)
        }
        // message delivered callback
        else if (facebook_message.delivery) {
          message = {
            optin: facebook_message.delivery,
            user: facebook_message.sender.id,
            channel: facebook_message.sender.id,
            timestamp: facebook_message.timestamp
          }

          controller.trigger('message_delivered', [bot, message])
        }
        else {
          controller.log('Got an unexpected message from Facebook: ', facebook_message)
        }
      }
    }
  }
}

var create_user_if_new = function (id, ts) {
  controller.storage.users.get(id, function (err, user) {
    if (err) {
      console.log(err)
    }
    else if (!user) {
      controller.storage.users.save({id: id, created_at: ts})
    }
  })
}

exports.handler = handler
/* eslint-disable brace-style */
/* eslint-disable camelcase */
