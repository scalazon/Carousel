const { MongoClient } = require('mongodb');
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASS;
//console.log(MONGO_PASSWORD)
const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@fec-ucjmx.mongodb.net/test?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true
};



function getAll() {
  const dbName = 'hackmazon';
  const collectionName = 'products';
  return MongoClient.connect(uri, options)
  .then(connection => {
    return connection
      .db(dbName)
      .collection(collectionName)
      .find({});
  })
  .then(result => {
    return result.toArray();
  })
  .catch(err => {
    console.log('Error in getAll', err);
  });
}

function getCategories() {
  const dbName = 'hackmazon';
  const collectionName = 'products';
  return MongoClient.connect(uri, options)
  .then(connection => {
    return connection
      .db(dbName)
      .collection(collectionName)
      .distinct('category', {});
  })
  .then(result => {
    return result;
  })
  .catch(err => {
    console.log('Error in getCategories', err);
  });
};

function getNavBarData() {
  const dbName = 'hackmazon';
  const collectionName = 'products';
  return MongoClient.connect(uri, options)
  .then(connection => {
    return connection
      .db(dbName)
      .collection(collectionName)
      .find({})
      .project({productTitle: 1, asin: 1, category: 1});
  })
  .then(result => {
    return result.toArray();
  })
  .catch(err => {
    console.log('Error in getNavBarData', err);
  });

};

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
    console.log('Error in getTest', err);
  });
}

module.exports = {
  dataLoader,
  deleteAllProducts,
  getAll,
  getNavBarData,
  getCategories
};