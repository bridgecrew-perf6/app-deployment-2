import * as dotenv from 'dotenv';
const ENV_VARS = dotenv.config();

import express from 'express';
import cors, { CorsOptions } from 'cors';
import bodyParser from 'body-parser';

import { sequelize } from './sequelize';
import { IndexRouter } from './controllers/v0/index.router';
import { V0_FEED_MODELS, V0_USER_MODELS } from './controllers/v0/model.index';

const { NODE_ENV, HOST, PORT, API_URL } = process.env;

process.nextTick(async () => {
    await sequelize.addModels(V0_FEED_MODELS);
    await sequelize.addModels(V0_USER_MODELS);
    await sequelize.sync();
    console.log('Database Connected');
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v0/', IndexRouter);

// Root URI call
app.get('/', (req, res) => {
    res.json({
        status: 'UP',
    });
});

// Start the Server
app.listen(PORT, () => {
    const message =
        NODE_ENV === 'dev'
            ? `Server running on http://${HOST}:${PORT}`
            : `Server running on ${API_URL}`;

    console.info(message);
    console.info(`press CTRL+C to stop server`);
    if (NODE_ENV === 'dev') console.log(ENV_VARS.parsed);
});
