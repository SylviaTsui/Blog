const urlLib = require('url');

exports.getWeather = (sUrl,success,error)=>{


    _req (sUrl)

    function _req (sUrl){
      let obj = urlLib.parse(sUrl);
      let mod = null;
    if(obj.protocol == 'http:'){
      mod = require('http');
    }else{
      mod = require('https');
    }

    let req = mod.request({
      hostname:obj.hostname,
      path:obj.path

    },(res)=>{
      if(res.statusCode == 200){
      let arr = [];
       res.on('data',(buffer)=>{
         arr.push(buffer);
       })
       res.on('end',()=>{
         let collect = Buffer.concat(arr);
         success && success(collect);
       })
     }else if (res.statusCode == 301 || res.statusCode == 302){
        _req(res.headers['location'])
     }else{
       console.log('error'+res.statusCode)
       error && error()
     }
    })

    req.on('error',(err)=>{
      error && error(err);
    })

    req.end();
    }
}
