const mongoose = require('mongoose');
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASS;
//console.log(MONGO_PASSWORD)
const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@fec-ucjmx.mongodb.net/hackmazon?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true
};

mongoose.connect(uri, options)


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to MongoDB')
});

const productsSchema = new mongoose.Schema({
  url: String,
  asin: String,
  productTitle: String,
  bulletPoints: String,
  price: Number,
  category: String,
  attributes: String,
  imageNbame: String,
  TotalImages: Number


});
//finds the category of the currently displayed item
function findCategory(ASIN) {
  const dbName = 'hackmazon';
  const collectionName = 'products';
  return MongoClient.connect(uri, options)
    .then(connection => {
      return connection
        .db(dbName)
        .collection(collectionName)
        .find({ 'asin' : ASIN })
    })
    .then(result => {
      return result;
    })
    .catch( err => {
      console.log('Err in findCategory(db) :', err)
    })
}



//function to get all of the items with the same category as
//the given ASIN(called category in parameter)
function sameCategoryItems(category) {
  const dbName = 'hackmazon';
  const collectionName = 'products';
  return MongoClient.connect(uri, options)
    .then(connection => {
      return connection
      .db(dbName)
      .collection(collectionName)
      .find({'category' : category})
    })
    .then( result => {
      return result.toArray();
    })
    .catch(err => {
      console.log('Err in sameCategoryItems(db): ', err)
    })
}

// function getNavBarData() {
//   const dbName = 'hackmazon';
//   const collectionName = 'products';
//   return MongoClient.connect(uri, options)
//   .then(connection => {
//     return connection
//       .db(dbName)
//       .collection(collectionName)
//       .find({})
//       .project({productTitle: 1, asin: 1, category: 1});
//   })
//   .then(result => {
//     return result.toArray();
//   })
//   .catch(err => {
//     console.log('Error in getNavBarData', err);
//   });

// };






//functions to populate database using the seedDbServer file
function dataLoader(JSONarray) {
  const dbName = 'hackmazon';
  const collectionName = 'products';
  return MongoClient.connect(uri, options)
  .then(connection => {
    return connection
      .db(dbName)
      .collection(collectionName)
      .insertMany(JSONarray);
  })
  .then(result => {
    return result;
  })
  .catch(err => {
    console.log('Error in data loader', err);
  });
}

function deleteAllProducts() {
  const dbName = 'hackmazon';
  const collectionName = 'products';
  return MongoClient.connect(uri, options)
  .then(connection => {
    return connection
      .db(dbName)
      .collection(collectionName)
      .remove({});
  })
  .then(result => {
    return result;
  })
  .catch(err => {
    console.log('Error in deleteAllProducts', err);
  });
}

module.exports = {
  dataLoader,
  deleteAllProducts,
  getAll,
  findCategory,
  sameCategoryItems,
  //getNavBarData,
  getCategories
};