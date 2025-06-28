//require('dotenv').config(); 
import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://admin:MONGODB_1471@cluster0.mljrfxn.mongodb.net/?retryWrites=true", {
      dbName: "REST_APP_FOOD",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
