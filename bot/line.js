const request = require('request-promise-native');

const TOKEN = process.env.PERSONAL_ACCESS_TOKEN;

function send(message, imageUrl) {
  return request({
    uri: 'https://notify-api.line.me/api/notify',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    form: {
      message,
      imageFullsize: imageUrl,
      imageThumbnail: imageUrl,
    },
  });
}

module.exports = send;
