import app from "./src/app.js";
const port = process.env.PORT || 3001;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
