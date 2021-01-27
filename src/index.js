const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { port } = require('./config');
const { accountRoutes, hotelRoutes, reservationRoutes } = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/account', accountRoutes);
app.use('/hotel', hotelRoutes);
app.use('/reservation', reservationRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
