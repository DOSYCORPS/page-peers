"use strict";
{
  const express = require('express');
  const app = express();
  app.use('/', express.static('./'));
  const server = app.listen(process.env.PORT || 8080, () => console.log(`Server up at ${process.env.PORT || 8080}`));
}


