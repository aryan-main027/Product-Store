import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import path from "path"
import connectdb from './config/db.js'
import router from './routes/product.route.js'

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use('/api/products',router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}


app.listen(process.env.PORT,()=>{
  connectdb();
  console.log("Server start at http://localhost:5000");
})