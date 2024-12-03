const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); 
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
