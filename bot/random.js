function random(lessThan) {
  return Math.floor(Math.random() * lessThan);
}

function randomFrom(arr) {
  return arr[random(arr.length)];
}

module.exports = randomFrom;
