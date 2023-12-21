import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config.js";
import router from "./routes/postRoutes.js";

const app = express();
 
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);


app.listen(PORT, () => {
    console.log(`The show must go on http://localhost:${PORT} `);
  });
  