import {client,toysCollection} from '../mongoConnect.js'

const addToy =  async () => {
  //client.connect()
const toy = {
  name: 'Optimus Prime',
  type: 'Transformer',
  cool: true,
  price: 40,
  description: 'Leader autobot, real cool blue semi truck with sword'

}
const insertResult = await toysCollection.insertOne(toy)
.catch(error=>console.error(error))
.then(result => console.log(result))
.finally(()=>{
  client.close()
})


}

addToy()