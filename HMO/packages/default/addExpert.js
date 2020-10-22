let nimbella = require('nim')
let redis=nimbella.redis()


function main(args) {
    let expertName = args.name || '';
    
    let status="Done"
    if(expertName!==''){
    await redis.setAsync(expertName,"Expert");
    }    

    return { body: status};
  }
  