let nimbella = require('nim')
let redis=nimbella.redis()


async function main(args) {
    let expertName = args.name || '';
    
    let status;
    if(expertName!==''){
    status = await redis.setAsync(`"`+expertName.toString()+`"`,"Expert");
    await redis.expireAsync(`"`+expertName.toString()+`"`, 600)
    }    

    return { body: "Success"};
  }
  