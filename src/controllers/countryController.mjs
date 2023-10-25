import axios from "axios";

const fetchCountryInfo = async (countryName) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );

    if (response.data.length === 0) {
      // Log the error and return an error response
      console.error(`Country not found for: ${countryName}`);
      return { error: "Country not found" };
    } else {
      const countryInfo = response.data[0];
      return countryInfo;
    }
  } catch (error) {
    // Log the error and return an error response
    console.error("Error:", error);
    return { error: "Internal server error" };
  }
};

export { fetchCountryInfo };
