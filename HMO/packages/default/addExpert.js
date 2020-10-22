let nimbella = require('nim')
let redis=nimbella.redis()


async function main(args) {
    let expertName = args.name || '';
    
    let status=""
    if(expertName!==''){
    status = await redis.setAsync(expertName,"Expert");
    }    

    return { body: status};
  }
  