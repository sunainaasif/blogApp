import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoutes";
const app = express();

app.use(express.json())
app.use( "/api/user", router)
mongoose
  .connect(
    "mongodb+srv://admin:Sunaina1234@cluster0.ov3kqxg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Database connected and listening to the port 5000"))
  .catch((err) => console.log(err));


