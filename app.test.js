const request = require('supertest');
const app = require('./app'); 

describe('GET /', () => {
 it("Enviando respuesta desde node", async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Enviando respuesta desde node');
 });
});