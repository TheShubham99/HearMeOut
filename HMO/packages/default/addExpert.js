let nimbella = require('nim')
let redis=nimbella.redis()


function main(args) {
    let expertName = args.name || '';
    
    let status="Done"
    if(expertName!==''){
    let a = await redis.setAsync(expertName,"Expert");
    }    

    return { body: status};
  }
  