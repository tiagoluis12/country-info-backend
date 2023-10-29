import app from "./src/app.js";
const port = process.env.PORT || 3002;

// Run the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
