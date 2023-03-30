const password = "bcpassword";
const MONGOURI = `mongodb+srv://sundfo057:${password}@products-database.l1thsh9.mongodb.net/test`;

import { MongoClient } from "mongodb";

// create instance of Mongo
export const client = new MongoClient(MONGOURI); //  use the URI path

