import * as redis from 'redis'


// Redis Client - wrapped in a class and exported as a singleton so we 
// dont end up having multiple connections to redis

const client = redis.createClient({
  url: 'redis://cache:6379'
  });

export class RedisSingleton {
    static instance: RedisSingleton;
    constructor() {
        if (!RedisSingleton.instance) {
          RedisSingleton.instance = this;
        }
       
        return RedisSingleton.instance;
    }
    async connect(){
  
        await client.connect()
    
    }
    async setData(key:string, value:string) {
      await client.set(key,value)
    }

    async getData(key:string){
        const value = await client.get(key)
        return value
    }    

    async incrementData(key:string){
      const increment = await client.incr(key)
      return increment
    }

    async expireData(key:string, timeInSeconds:number){
      client.expire(key, timeInSeconds)
    }
}


const redisClient = new RedisSingleton()


export default redisClient
