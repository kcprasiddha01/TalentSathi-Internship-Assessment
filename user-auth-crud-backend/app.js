const express = require("express");
const connectDB = require("./config/db"); // Import the function
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Connect to the database
connectDB(); // Call the function

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
