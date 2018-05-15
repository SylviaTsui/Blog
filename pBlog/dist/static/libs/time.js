module.exports = (time) => {

  function toDou(n) {
    return n < 10 ? '0' + n : n;
  }

  let formatTime = new Date();
  formatTime.setTime(time);

  let outputTime = formatTime.getFullYear() + '-' + toDou(formatTime.getMonth() + 1) + '-' + toDou(formatTime.getDate()) + ' ' + formatTime.getHours() + ':' + formatTime.getMinutes() + ':' + formatTime.getSeconds();

  return outputTime;

}
