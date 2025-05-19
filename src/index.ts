import axios from "axios";
import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
app.use(cors());

const ESP32_IP = "http://192.168.1.65";

interface LedParams {
  state: string;
}

app.get("/led/:state", (req: Request<LedParams>, res: Response) => {
  const { state } = req.params;

  if (state !== "on" && state !== "off") {
    res.status(400).send('Invalid state. Use "on" or "off".');
    return;
  }

  axios
    .get(`${ESP32_IP}/${state}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error("Error reaching ESP32:", error);
      res.status(500).send("Failed to communicate with ESP32.");
    });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
