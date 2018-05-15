var crypto = require('crypto');

module.exports = {
  MD5_SUFFIX:'bhdejwbd帧名*……#DFK434》：“legal”',
  md5(str){
    var obj = crypto.createHash('md5');
    //灌数据加密
    obj.update(str);
    //输出
    return obj.digest('hex');
  }
}


//密码必须在后台添加上去，不然的话有可能被别人注册了
