const GitHubAPI = require('github');
const moment = require('moment');

const github = new GitHubAPI();

function didCommitToday() {
  return github.repos
    .getCommits({
      user: 'team-kke',
      repo: 'anime',
      path: 'docs/index.html',
      author: 'anime@yuiazu.net',
      since: moment().subtract(17, 'hours').toISOString(),
    })
    .then(commits => {
      return commits.length > 0;
    });
}

module.exports = didCommitToday;
