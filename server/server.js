const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { PORT } = require('../config.js');
const app = express();
const { getRandomSample, getOne } = require('../database/db')
var cors = require('cors')

const port = /*process.env.PORT|| */3003;
app.use(cors());
app.use('/', express.static('dist'));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.get('/test', (req, res) => {
  res.send('done');
})

app.get('/one', (req, res) => {
  
  getOne()
  .then(result => res.json(result.productTitle))
  .catch(err => console.error('whoops'))
})

app.get('/api/items', (req, res) => {
  getRandomSample()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    console.log('Error in server: ', err)
  })
})


// app.get('/api/items', (req, res) => {
//   let ASIN = req.body;
//   findCategory(ASIN)
//   .then(result => {
//     console.log('success in server getting current item', result)
//     return someCategoryItems(result)
//   })
//   .then(items => {
//     console.log('items in server: ', items);
//     res.send(items)
//   })
//   .catch(err => {
//     console.log('Err in server getting category: ', err)
//     res.end();
//   })
// })


// app.get('/allItemsCategory', (req, res) => {
//   let category = req.body.category;
//   sameCategoryItems(category)
//   .then(result => {
//     console.log('success in server getting all items')
//     res.send(result);
//   })
//   .catch(err => {
//     console.log('Err in server getting allitems: ', err)
//   })
// })


app.listen(port, () => {
  console.log(`The shenanigans have started on aisle ${port}`);
});
