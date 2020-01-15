const express = require('express');
const path = require('path')
const fs = require('fs');
const env = require('dotenv');

const app = express();
let PORT = 8080;

app.listen(process.env.PORT || PORT, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    require('./Utils/DB');

    console.log(`CORS-enabled web server is now running in ${process.env.NODE_ENV} on port ${process.env.PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/**
 * Read all routes from route folder
 * @return void
 */
const Routes = fs.readdirSync(`${__dirname}/Routes`)
Routes.map(route => require(`./Routes/${route}`)(app))

/**
 * Config .env file
 */
env.config({
    path: './.env'
})