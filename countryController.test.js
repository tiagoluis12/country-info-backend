import request from "supertest";
import app from "./src/app";

describe("GET /api/countries/:countryName", () => {
  it("responds with status 200", async () => {
    const response = await request(app).get("/api/countries/Ireland");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /api/countries/:countryName", () => {
  it("responds with status 404", async () => {
    const response = await request(app).get("/api/countries/NotACountry");
    expect(response.statusCode).toBe(404);
  });
});
