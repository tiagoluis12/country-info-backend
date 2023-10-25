import express from "express";
import { check, validationResult } from "express-validator";
import { fetchCountryInfo } from "../controllers/countryController.mjs";

const router = express.Router();

router.get(
  "/api/countries/:countryName",
  [
    check("countryName")
      .isAlpha("en-US", { ignore: " " })
      .withMessage("Country name must contain only alphabetic characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { countryName } = req.params;

    // Use the fetchCountryInfo function from countryController
    const countryInfo = await fetchCountryInfo(countryName);

    if (countryInfo.error) {
      // Handle the error response
      res.status(404).json({ error: countryInfo.error });
    } else {
      // Send the country information
      res.json(countryInfo);
    }
  }
);

export default router;
