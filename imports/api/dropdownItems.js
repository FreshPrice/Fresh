import { Mongo } from "meteor/mongo";

const db = new MongoInternals.RemoteCollectionDriver(process.env.MONGO_URL);
const DropdownItems = new Mongo.Collection("DROPDOWN_ITEMS", { _driver: db });

export default DropdownItems;
