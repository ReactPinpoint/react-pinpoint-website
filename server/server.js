const express = require('express');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const dbname = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbport = process.env.DB_PORT

const sequelize = new Sequelize(dbname, username, password, {
  host: process.env.DB_URL,
  port: dbport,
  dialect: 'postgres',
  ssl: 'Amazon RDS',
});


app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Welcome to reactpp API'));

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}
)();