const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/Portfolio";
const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connection Done");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectToMongo;
