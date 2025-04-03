require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoutes = require("./routes");

const app = express();

// Middleware//
app.use(express.json());
app.use(cors());

// Routes
app.use("/students", studentRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    const PORT = process.env.PORT || 4003;
    app.listen(PORT, () => {
      console.log("Server sunning on Port");
    });
  })
  .catch(error => {
    console.error(" Database connection error:", error);
  });