import { Mongo } from "meteor/mongo";

const db = new MongoInternals.RemoteCollectionDriver(process.env.MONGO_URL);
const ShoppingList = new Mongo.Collection("SHOPPING_LIST", { _driver: db });

export default ShoppingList;