let nimbella = require('nim')
let redis=nimbella.redis()


function main(args) {
    let expertName = args.name || '';
    
    let status="ff"
    if(expertName!==''){
    redis.setAsync(expertName,JSON.stringify({expertName}));
    }    

    return { body: status};
  }
  