import mongoose from 'mongoose';

export async function connectToMongoDB() {
  try {
    mongoose
      .connect(
        `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@products-app.vpsizlm.mongodb.net/?retryWrites=true&w=majority`
      )
      .then(() => console.log('connected to DB'));
  } catch (err) {
    console.log(err);
  }
}
