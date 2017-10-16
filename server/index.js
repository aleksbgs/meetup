import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { MetupRoutes, GroupRoutes } from './modules';

const app = express();

const PORT = process.env.PORT || 3000;

dbConfig();

middlewaresConfig(app);

app.use('/api', [MetupRoutes, GroupRoutes]);

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port : ${PORT}`);
  }
});
