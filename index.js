const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static("public"));

// Route to serve the Coca-Cola ad page
app.get("/coca", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "cocacola3.html"));
});

app.listen(PORT, () => {
    console.log(`REFRESH YOUR MOMENT AT http://localhost:${PORT}`);
});
