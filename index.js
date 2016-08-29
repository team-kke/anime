const ejs = require('ejs');
const fs = require('fs');

const list = fs.readdirSync(`${__dirname}/lists`)
  .sort()
  .reverse()
  .map(file => {
    const lines = fs.readFileSync(`${__dirname}/lists/${file}`).toString().split('\n');
    return {
      title: lines[0],
      date: file,
      quote: {
        jp: lines[1],
        kr: lines[2],
      },
    };
  });

const template = fs.readFileSync(`${__dirname}/templates/index.ejs`).toString();
console.log(ejs.render(template, { list }));
