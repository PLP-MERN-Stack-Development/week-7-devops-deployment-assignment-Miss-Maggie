jest.setTimeout(15000); // 15 seconds
const mongoose = require('mongoose');
const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  // Drop the users collection before each test
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});


describe('Auth Routes', () => {
  it('should register a user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      name: 'Test User',
      email: 'test@example.com',
      password: '123456',
    });
    console.log(res.body);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User registered successfully');
  });

  it('should fail if fields are missing', async () => {
    const res = await request(app).post('/api/auth/register').send({
      name: '',
      email: '',
      password: '',
    });

    console.log('FAIL TEST RESPONSE:', res.body);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('All fields are required');
  });

});
