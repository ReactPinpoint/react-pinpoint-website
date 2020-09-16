const express = require('express');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Welcome to reactpp API'));

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});