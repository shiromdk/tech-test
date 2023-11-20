import * as request from "supertest";
import getApp from "../src/app";
import { generateJobData } from "../src/feature/leads/helper";
import { createJob } from "../src/feature/leads/leads";
import redisClient from "../src/redis";


let app = getApp();;
beforeAll(async()=>{
  await redisClient.connect();
})
describe('Test status route', function(){
  it('respond to /status', async()=>{
    const res = await request(app).get('/status')
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual(JSON.stringify({ status: "OK" }))
  })
})


describe('respond to /api/leads' , function(){
  it('GET /leads', async()=>{
    const res = await request(app).get('/api/leads')
    expect(res.statusCode).toBe(200);
    expect(res.body.count).toBeGreaterThan(0)
  })
  it('GET /leads with status', async()=>{
    const res = await request(app).get('/api/leads?status=new')
    expect(res.statusCode).toBe(200);
    expect(res.body.data[0].status).toBe("new")
    expect(res.body.data[0].status).not.toBe("accepted")
  })
  it("GET /leads with limit and offset", async()=>{
    const res = await request(app).get('/api/leads?limit=1&page=1&status=new')
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toHaveLength(1)
    const firstEntry = res.body.data[0]
    // Checking that 2nd page is actually different from first page
    const secondRes = await request(app).get('/api/leads?limit=1&page=2&status=new')
    expect(secondRes.body.data).toHaveLength(1)
    expect(secondRes.body.data[0].id).not.toEqual(firstEntry.id)
  })
  it('PUT /leads', async()=>{
    const getRes = await request(app).get('/api/leads?status=new')
    const currentCount = getRes.body.count
    const putRes = await request(app).put(`/api/leads/${getRes.body.data[0].id}`).send({
      status: 'accepted'
    })
    expect(putRes.statusCode).toBe(200)
    const newRes = await request(app).get('/api/leads?status=new')
    expect(newRes.body.count).toBe(currentCount-1)
    
  } )
})

describe('create new job', function (){
  it('create new job successfully' ,async()=>{
    let job = generateJobData()
    const newJob =  createJob(job)
    console.log(newJob)
  })
})