const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');

const { PORT, MONGO_URL } = require('./configs/config');
const { authRouter, carRouter, userRouter } = require('./routes');
const { mainErrorHandler } = require('./errors');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/cars', carRouter);
app.use('/users', userRouter);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('*', (req, res, next) => {
    next(new Error('Route not fount'));
});

app.use(mainErrorHandler);


app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('App listen', PORT);
    mongoose.set('strictQuery', true);
    mongoose.connect(MONGO_URL);
});