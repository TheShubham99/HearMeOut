const nimbella = require('nim')
let redis=nimbella.redis()


async function  main(args) {
    let expertName = args.name || '';
    
    let status="None";
    

    if(expertName!==''){
      try{
      status = await redis.getAsync(expertName)
      }catch{
        return {body:"Nah"}
      }
    }    

    if(status!=="Expert"){
      return { body: "None" };

    }
    return { body: status };

  }
  