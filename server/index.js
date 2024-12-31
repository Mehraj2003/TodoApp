import express from "express";
import mongoose from "mongoose";
import AuthRoute from "./routes/Auth.js";
import TodosRoutes from "./routes/Todos.js";
const app = express();
const port = 5000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello Mehraj");
})

app.use("/api/auth",AuthRoute);
app.use("/api/todos",TodosRoutes);

mongoose
    .connect("mongodb://127.0.0.1:27017/todoList")
    .then(()=>{
        console.log("Connected to MongoDb");
    })
    .catch((err)=>{
        console.log(err);
    })
app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
});