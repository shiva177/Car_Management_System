import connectToMongo from "./db.js";
import  express  from "express";
import router1 from "./routes/auth.js";
import router2 from "./routes/car.js";
import router3 from "./routes/docs.js"
import cors from 'cors';
connectToMongo();

const app = express()

const port = 5000
app.use(cors());
app.use(express.json())

app.use('/api/auth',router1)
app.use('/api/car',router2)
app.use('/api/docs',router3)

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
