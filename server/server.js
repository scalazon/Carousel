const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { PORT } = require('../config.js');
const app = express();
const { findCategory, sameCategoryItems } = require('../database/db')

const port = process.env.PORT || 3003;
app.use(express.static('dist'));
app.use(
  bodyParser.json({
    strict: false
  })
);



app.get('/api/items', (req, res) => {
  let ASIN = req.body;
  findCategory(ASIN)
  .then(result => {
    console.log('success in server getting current item', result)
    return someCategoryItems(result)
  })
  .then(items => {
    console.log('items in server: ', items);
    res.send(items)
  })
  .catch(err => {
    console.log('Err in server getting category: ', err)
    res.end();
  })
})


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
