const axios = require('axios');
// const request = require('supertest')
// const app = require('../server/server.js')


function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect (sum(1, 2)).toBe(3);
});

// test('gets response from server', (done) => {
    
//     request(app)
//     .get('http://localhost:3003/test')
        
//     .expect(response.data).toEqual('done')
//     .end((err, res) => {
//         if (err) throw err;
//     })

// })

// test('retrieves test item from database', () => {
//     return axios.get('http://localhost:3003/one')
//         .then(response => {
//             expect(response.data).toBe('test');
//         })
// })