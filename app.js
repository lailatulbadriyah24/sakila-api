const express = require('express');
const routesUser = require('./src/routes/userRoutes');
const routerAuth = require('./src/routes/authRoute');
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

app.use('/users', routesUser);
app.use('/auth', routerAuth);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});