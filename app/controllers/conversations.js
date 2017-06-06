/* eslint-disable brace-style */
/* eslint-disable camelcase */
const Wreck = require('wreck');

module.exports = function (controller) {
    // this is triggered when a user clicks the send-to-messenger plugin
    controller.on('facebook_optin', function (bot, message) {
        // bot.reply(message, 'Welcome, friend')
        bot.startConversation(message, function(err, convo) {
            convo.ask({
                attachment: {
                    'type': 'template',
                    'payload': {
                        'template_type': 'button',
                        "text":"Hỏi thiệt nha, bạn là đực hay cái?",
                        "buttons":[
                            {
                                "type":"postback",
                                "payload":"chuan_duc",
                                "title":"Chuẩn Đực"
                            },
                            {
                                "type":"postback",
                                "title":"Chuẩn Cái",
                                "payload":"chuan_cai"
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
