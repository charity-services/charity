const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const userRouts = require('./routes/userRouter');
const aboutUsRouts = require('./routes/aboutUsRouter');
const paymentRouts = require('./routes/paymentRouter');
const BlogRouts = require('./routes/blogRouter');

const beneficiaryRouter = require('./routes/beneficiaryRouter');
const notFoundHandler = require('./middleware/404');
const dbURI = "mongodb+srv://majdishomali1997:uVxsL6cXyv6CIZv8@cluster0.pacgw6a.mongodb.net/charity"
// const dbURI = "mongodb+srv://majdishomali1997:L7bIRY3eoLP6Z74K@cluster0.alsqxnc.mongodb.net/charity"

const errorHandler = require('./middleware/500')
const Protected = require('./middleware/Protected')
const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));


app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(userRouts);
app.use(beneficiaryRouter);
app.use(aboutUsRouts);
app.use(paymentRouts);
app.use(BlogRouts);
app.use('*',notFoundHandler);
app.use(errorHandler);
app.use(Protected)







module.exports = {
  server: app,
  start: () => {
    mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        app.listen(PORT, () => {
          console.log(`Starting server on port ${PORT}`);
        });
      });
  },
};




