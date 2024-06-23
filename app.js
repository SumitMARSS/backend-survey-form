import express from 'express';
import technology from './routes/technology.js';
export const app = express();
import cors from 'cors';

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the survey API!');
});

app.use('/technology', technology);