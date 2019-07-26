const axios = require('axios');


function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect (sum(1, 2)).toBe(3);
});

test('gets response from server', () => {
    
    return axios.get('http://localhost:3003/test')
        .then(response => {
            expect(response.data).toEqual('done');
        })
})

// // test('retrieves test item from database', () => {
// //     return axios.get('http://localhost:3003/one')
// //         .then(response => {
// //             expect(response.data).toBe('test');
// //         })
// // })