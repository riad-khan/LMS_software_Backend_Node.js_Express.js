const express = require('express');
const cors = require('cors');
const app = express();

require('./middlewares')(app);
require('./routes')(app);


module.exports = app