import dotenv from 'dotenv/config';
import express from 'express';
import mysql from 'mysql'
import {root} from "./src/routes/root";

const app = express();
const port = process.env.NODE_ENV || 3000;

mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
})

root(app);
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(process.env)
    console.log(123)
});

