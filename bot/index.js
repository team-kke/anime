const didCommitToday = require('./github');
const send = require('./line');
const randomFrom = require('./random');

function goodJobMan() {
  const list = [
    { message: 'ハラショー！', imageUrl: 'http://i.imgur.com/bttHnts.jpg' },
    { message: 'ファイトだよ！', imageUrl: 'http://i.imgur.com/zU3IBtV.jpg' },
  ];
  return randomFrom(list);
}

function saiteiDesu() {
  const list = [
    { message: '最低です', imageUrl: 'http://i.imgur.com/GYIiFjH.jpg' },
    { message: 'ハラショー…', imageUrl: 'http://i.imgur.com/C8EQ7Tm.jpg' },
  ];
  return randomFrom(list);
}

didCommitToday()
  .then(didYou => didYou ? goodJobMan() : saiteiDesu())
  .then(result => send(result.message, result.imageUrl));
