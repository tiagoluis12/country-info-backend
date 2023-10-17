import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/api/countries/:countryName", async (req, res) => {
  try {
    const { countryName } = req.params;

    // I am using axios to request to the REST Countries API to get the country information
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    if (response.data.length === 0) {
      res.status(404).json({ error: "Country not found" });
    } else {
      const countryInfo = response.data[0];
      res.json(countryInfo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
