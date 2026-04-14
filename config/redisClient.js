var {createClient} = require("redis")


var client = createClient({
    url : process.env.REDIS_URL
})

client.on("connect",()=>{
    console.log("connected to the redis");
})

client.on("error",(error)=>{
    console.log("Redis connection error:", error.message);
    console.log("Please check your REDIS_URL credentials in .env file");
})


var connectRedis = async()=>{
    try{
        await client.connect()

    }catch(error){
        console.log("error");
    }
}




module.exports = {
    client,connectRedis
}