import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes';
import connection from './configs/dbConnection';
import sockets from './utils/sockets';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 9091;

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors({}));

connection();

app.use('/api/v1', router);

const server = sockets(app);

server.listen(PORT, () => {
    console.log(`🚀 Server started at http://localhost:${PORT}`);
});
