const mongoose = require("mongoose");

const connectDatabse = () => {
  mongoose
    .connect(process.env.DB_URI, {
      // useNewUrlParser: true,
      // useUnifieldTopology: true,
      // useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host} `);
    })
    
};

module.exports = connectDatabse;
