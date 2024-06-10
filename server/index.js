import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectToDb from "./database/db.js";
import router from "./routes/routes.js";
const PORT = 8080;
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

Promise.all([connectToDb()])
  .then(() => app.listen(PORT, () => console.log(`server is live`)))
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
