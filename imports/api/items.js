import { Mongo } from "meteor/mongo";

const db = new MongoInternals.RemoteCollectionDriver(process.env.MONGO_URL);
const Items = new Mongo.Collection("ITEMS", { _driver: db });

export default Items;
