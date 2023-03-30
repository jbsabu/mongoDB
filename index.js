import {client} from './mongoConnect.js'
// connect to client
client.connect();

// connect to db - or create if there is none
const database = client.db("products");

// connect to collection
const collection = database.collection("fruits");

const addFruit = async () => {
  const myFruit = {
    name: "Pear",
    taste: "Juicy",
    price: 420_102,
    stock: 5,
  };

  const addedFruit = await collection.insertOne(myFruit);

  console.log(addedFruit);
};

//addFruit()

const editFruit = async () => {
  // collection.findOne({name: 'Pear'})
  const updatedFruit = await collection.findOneAndUpdate(
    { name: "Pear" },
    { $set: { name: "pineapple" } }
  );
  console.log(updatedFruit);
};

const getAllFruits = async () => {
  const allFruits = await collection
    .find()
    .toArray()
    .then((items) => console.log(items))
    .catch((err) => console.log(err));
  console.log(allFruits);
};

getAllFruits();
//editFruit()

const deleteFruit = async () => {
  const result = await collection.deleteOne({ name: "pineapple" });
  console.log(result);
};
//deleteFruit()
