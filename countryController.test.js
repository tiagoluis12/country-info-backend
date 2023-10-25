const request = require("supertest");
import app from "./src/app"; // Import your Express app

describe("GET /api/countries/:countryName", () => {
  it("responds with status 200", async () => {
    const response = await request(app).get("/api/countries/Brazil");
    expect(response.statusCode).toBe(200);
  });
});
