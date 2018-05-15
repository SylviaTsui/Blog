var crypto = require('crypto');

var obj = crypto.createHash('md5');
var str = '123456'

obj.update(str+'bhdejwbd帧名*……#DFK434》：“legal”');

console.log(obj.digest('hex'));
