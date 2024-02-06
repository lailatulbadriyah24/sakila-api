const Sequelize = require('sequelize');

// Defina Sequelize configuration
const sequelize = new Sequelize('sakila_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false, // Disable Sequelize's default timestamp fields
    },
});

// Test the connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully');
    })
    .catch((err) => {
        console.log('Unable to connect to the database', err);
    });

module.exports = sequelize;