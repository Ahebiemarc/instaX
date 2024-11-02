import  express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

import userRouter from './src/Router/User';

const app = express();

const port = process.env.PORT || 5000;
const server_host = process.env.API_HOST;
const DB_URL = process.env.DB_HOST 


app.use(cors());
app.use(compression());
//app.use(cookieParser());
app.use(bodyParser.json());

// Servez les fichiers statiques du dossier './uploads/elector' './uploads/candidate'
//app.use('/uploads', express.static('uploads'));

app.use('/api/v1', userRouter);


const server = http.createServer(app);


mongoose.Promise = Promise;
mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connexion à la base de données MongoDB établie avec succès');
    server.listen(port, () => {
      console.log(`Serveur en cours d'exécution sur sur le port : ${port}`);
    });
  })
  .catch((error: Error) => {
    console.error('Erreur lors de la connexion à la base de données MongoDB :', error.message);
    process.exit(1); // Arrêter le processus Node.js en cas d'erreur de connexion
  });

mongoose.connection.once('error', (error : Error) => console.log(error.message));






