const express = require('express');

const apiRoutes = require("./routes/api_routes");
const htmlRoutes = require("./routes/html_routes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, () => {
    console.log(`Server started! At http://localhost:${PORT}`);
});