const express = require('express');
const path = require('path');
const fs = require('fs');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
// app.use(logger);


// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API route
app.use('/api/members', require('./routes/api/member'));

PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`Server running on PORT: ${PORT}`));