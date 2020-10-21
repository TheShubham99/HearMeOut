const nimbella = require('nim')
let redis=nimbella.redis()


function main(args) {
    let expertName = args.name || '';
    
    let status="f";
    
    if(expertName!==''){
      status = await redis.getAsync(expertName) 
    }    

    return { body: status };

  }
  