const express = require('express');
const routes = require('./src/routes/userRoutes');
// const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())

// Middleware for parsing JSON
app.use(express.json());

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true}));

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(
//     bodyParser.urlencoded({
//         limit: '50mb',
//         extended: true,
//         parameterLimit: 50000,
//     })
// );

app.use('/users', routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});