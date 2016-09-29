const ejs = require('ejs');
const fs = require('fs');
const yaml = require('js-yaml');

const list = fs.readdirSync(`${__dirname}/lists`)
  .sort()
  .reverse()
  .map(file => {
    const doc = yaml.safeLoad(fs.readFileSync(`${__dirname}/lists/${file}`, 'utf8'));
    return {
      date: file.replace('.yml', ''),
      episodes: Object.keys(doc).map(title => {
        const jps = doc[title].filter((_, i) => { return i%2 == 0 });
        const krs = doc[title].filter((_, i) => { return i%2 == 1 });
        return {
          title: title,
          quotes: jps.map((jp, i) => {
            return { jp: jp, kr: krs[i] };
          })
        };
      })
    };
  });

const template = fs.readFileSync(`${__dirname}/templates/index.ejs`).toString();
console.log(ejs.render(template, { list }));
