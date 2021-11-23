import { MongoClient } from "mongodb"

const user = 'dan';
const userPassword = 's8t3TlMm6fefdVVf';
const cluster = 'cluster0.xcjgj';
const dbConnectionUrl = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
    // const client = await MongoClient.connect(dbConnectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    const client = await MongoClient.connect(dbConnectionUrl);
    const db = client.db('main');

    return {
        listings: db.collection('test_listings')
    }

}