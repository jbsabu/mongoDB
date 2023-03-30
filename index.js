  import {client} from './mongoConnect.js'
  // connect to client
  // client.connect();



  const addFruit = async () => {
    const myFruit = {
      name: "Pear",
      taste: "Juicy",
      price: 420_102,
      stock: 5,
    };
    try { 
      await client.connect()
      const addedFruit = await collection.insertOne(myFruit);
      console.log(addedFruit)

    }catch(err){
      console.log(err)
    } finally {
    await client.close()
    }

    //console.log(addedFruit);
  };

  addFruit()

  const editFruit = async () => {
    // collection.findOne({name: 'Pear'})
    const updatedFruit = await collection.findOneAndUpdate(
      { name: "Pear" },
      { $set: { name: "pineapple" } }
    );
    console.log(updatedFruit);
  };

  const getAllFruits = async () => {
    try{
    const allFruits = await collection
      .find()
      .toArray()
      console.log(allFruits)
    } catch(error){
      console.log(error)
    } finally {
      client.close()
    }
  };

  //getAllFruits();
  //editFruit()

  const deleteFruit = async () => {
    try { 
    //await client.connect()
    const result = await collection.deleteOne({ name: "pineapple" });
    console.log(result);
    } catch (err){
      console.error(err)
    }finally {
   client.close()
    }
  };


  deleteFruit()
