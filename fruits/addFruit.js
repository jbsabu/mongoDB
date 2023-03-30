import {client,fruitsCollection} from "../mongoConnect.js"


const addFruit = async () => {
  const myFruit = {
    name: "Pear",
    taste: "Juicy",
    price: 420_102,
    stock: 5,
  };
  try { 
    await client.connect()
    const addedFruit = await fruitsCollection.insertOne(myFruit);
    console.log(addedFruit)

  }catch(err){
    console.log(err)
  } finally {
  await client.close()
  }

  //console.log(addedFruit);
};

addFruit()