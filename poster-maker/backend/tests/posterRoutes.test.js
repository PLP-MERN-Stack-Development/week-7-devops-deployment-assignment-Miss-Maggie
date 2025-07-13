jest.setTimeout(15000); // 15 seconds
const request = require('supertest');
const app = require('../app');
const mongoose = require ('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;


beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('POST /api/posters', () => {
  it('should create a new poster', async () => {
    const response = await request(app).post('/api/posters').send({
      title: 'Sample Poster',
      description: 'This is a test poster',
    });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Sample Poster');
  });
});
