const ejs = require('ejs');
const fs = require('fs');

const list = [
  { title: '어떤 마술의 금서목록 1화', date: '2016-08-29', quote: { jp: 'よし！グランドシーズン！', kr: '요시! 그란도시즌!' } },
];

const template = fs.readFileSync(__dirname + '/templates/index.ejs').toString();
console.log(ejs.render(template, { list }));
