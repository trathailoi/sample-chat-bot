/* eslint-disable brace-style */
/* eslint-disable camelcase */
const Wreck = require('wreck');

module.exports = function (controller) {
    // this is triggered when a user clicks the send-to-messenger plugin
    controller.on('facebook_optin', function (bot, message) {
        // bot.reply(message, 'Welcome, friend')
        bot.startConversation(message, function(err, convo) {
            convo.ask({
                attachment:{
                    "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
            
           {
            "title":"Similac Mom Eye-Q",
            "image_url":"https://static.abbottnutrition.com/cms-prod/anisimilac.com.vn-2016/img/sua-similac-mom_tcm1313-71507.jpg",
            "subtitle":"Thực phẩm bổ sung cho bà mẹ mang thai và cho con bú",
            "default_action": {
              "type": "web_url",
              "url": "https://similac.com.vn/san-pham/similac-mom?ref=fbbot",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://similac.com.vn/"
            },
            "buttons":[
              {
                "type":"web_url",
                "url":"https://similac.com.vn/san-pham/similac-mom?ref=fbbot",
                "title":"Tìm hiểu thêm"
              },{
                "type":"postback",
                "title":"Start Chatting",
                "payload":"chuan_duc"
              }              
            ]      
          },
           {
            "title":"Nhà nghỉ ở Đà Lạt",
            "image_url":"https://www.upinns.com/media/hotels/369/84_02062017115255.jpg",
            "subtitle":"Cuối tuần rồi, yolo thôi các mẹ eiii !!",
            "default_action": {
              "type": "web_url",
              "url": "https://www.upinns.com/vi/room/795-phong-up-inns-795-da-lat-gan-ho-xuan-huong?checkin=25/10/2017&checkout=26/10/2017&rooms=1&guest=1",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://www.upinns.com/"
            },
            "buttons":[
              {
                "type":"web_url",
                "url":"https://www.upinns.com/vi/room/795-phong-up-inns-795-da-lat-gan-ho-xuan-huong?checkin=25/10/2017&checkout=26/10/2017&rooms=1&guest=1",
                "title":"View Website"
              },{
                "type":"postback",
                "title":"Start Chatting",
                "payload":"chuan_duc"
              }              
            ]      
          },
          
          
           {
            "title":"Nhà nghỉ ở Đà Lạt",
            "image_url":"https://www.upinns.com/media/hotels/369/84_02062017115255.jpg",
            "subtitle":"Cuối tuần rồi, yolo thôi các mẹ eiii !!",
            "default_action": {
              "type": "web_url",
              "url": "https://www.upinns.com/vi/room/795-phong-up-inns-795-da-lat-gan-ho-xuan-huong?checkin=25/10/2017&checkout=26/10/2017&rooms=1&guest=1",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://www.upinns.com/"
            },
            "buttons":[
              {
                "type":"web_url",
                "url":"https://www.upinns.com/vi/room/795-phong-up-inns-795-da-lat-gan-ho-xuan-huong?checkin=25/10/2017&checkout=26/10/2017&rooms=1&guest=1",
                "title":"View Website"
              },{
                "type":"postback",
                "title":"Start Chatting",
                "payload":"chuan_duc"
              }              
            ]      
          },
          
          
          
           {
            "title":"Nhà nghỉ ở Đà Lạt",
            "image_url":"https://www.upinns.com/media/hotels/369/84_02062017115255.jpg",
            "subtitle":"Cuối tuần rồi, yolo thôi các mẹ eiii !!",
            "default_action": {
              "type": "web_url",
              "url": "https://www.upinns.com/vi/room/795-phong-up-inns-795-da-lat-gan-ho-xuan-huong?checkin=25/10/2017&checkout=26/10/2017&rooms=1&guest=1",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://www.upinns.com/"
            },
            "buttons":[
              {
                "type":"web_url",
                "url":"https://www.upinns.com/vi/room/795-phong-up-inns-795-da-lat-gan-ho-xuan-huong?checkin=25/10/2017&checkout=26/10/2017&rooms=1&guest=1",
                "title":"View Website"
              },{
                "type":"postback",
                "title":"Start Chatting",
                "payload":"chuan_duc"
              }              
            ]      
          },
          
          
          
          
           {
            "title":"Nhà nghỉ ở Đà Lạt",
            "image_url":"https://www.upinns.com/media/hotels/369/84_02062017115255.jpg",
            "subtitle":"Cuối tuần rồi, yolo thôi các mẹ eiii !!",
            "default_action": {
              "type": "web_url",
              "url": "https://www.upinns.com/vi/room/795-phong-up-inns-795-da-lat-gan-ho-xuan-huong?checkin=25/10/2017&checkout=26/10/2017&rooms=1&guest=1",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://www.upinns.com/"
            },
            "buttons":[
              {
                "type":"web_url",
                "url":"https://www.upinns.com/vi/room/795-phong-up-inns-795-da-lat-gan-ho-xuan-huong?checkin=25/10/2017&checkout=26/10/2017&rooms=1&guest=1",
                "title":"View Website"
              },{
                "type":"postback",
                "title":"Start Chatting",
                "payload":"chuan_duc"
              }              
            ]      
          },
          
          
          
           {
            "title":"Nhà nghỉ ở Đà Lạt",
            "image_url":"https://www.upinns.com/media/hotels/369/84_02062017115255.jpg",
            "subtitle":"Cuối tuần rồi, yolo thôi các mẹ eiii !!",
            "default_action": {
              "type": "web_url",
              "url": "https://www.upinns.com/vi/room/795-phong-up-inns-795-da-lat-gan-ho-xuan-huong?checkin=25/10/2017&checkout=26/10/2017&rooms=1&guest=1",
              "messenger_extensions": true,
              "webview_height_ratio": "tall",
              "fallback_url": "https://www.upinns.com/"
            },
            "buttons":[
              {
                "type":"web_url",
                "url":"https://www.upinns.com/vi/room/795-phong-up-inns-795-da-lat-gan-ho-xuan-huong?checkin=25/10/2017&checkout=26/10/2017&rooms=1&guest=1",
                "title":"View Website"
              },{
                "type":"postback",
                "title":"Start Chatting",
                "payload":"chuan_duc"
              }              
            ]      
          }
        ]
      }
                }
            }, function(response, convo) {
                // whoa, I got the postback payload as a response to my convo.ask!
                convo.next();
            });
        });

    })

    // user said hello
    controller.on('facebook_postback', function (bot, message) {
        console.log('message', message);
    })
    
    // user said hello
    controller.hears(['alo'], 'message_received', function (bot, message) {
        bot.reply(message, 'alo gì thým ?')
    })

    // user said hello
    controller.hears(['dua_hau'], 'message_received', function (bot, message) {
        bot.reply(message, 'hết dưa hấu rồi má, chọn món khác đê')
    })

    // user said hello
    controller.hears(['hi'], 'message_received', function (bot, message) {
       controller.trigger('facebook_optin', [bot, message])

    })

    // user said hello
    controller.hears(['chuan_duc'], 'message_received', function (bot, message) {
        bot.reply(message, 'Tui support Cái thôi, Đực quên đi, lêu lêu')
    })

    // user says anything else
    controller.hears('(.*)', 'message_received', function (bot, message) {
        bot.reply(message, 'ừa, Lợi cũng nghĩ là : ' + message.match[1])
    })

}
