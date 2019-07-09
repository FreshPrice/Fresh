import { Mongo } from "meteor/mongo";

const db = new MongoInternals.RemoteCollectionDriver(process.env.MONGO_URL);
const Users = new Mongo.Collection("USERS", { _driver: db });

export default Users;