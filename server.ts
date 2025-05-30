
import dotenv from 'dotenv';
import dbconnect from './config/db';
import routes from './routes';
import userRouter from './users/routes';
import passport from 'passport';
import './middlewares/google.js';

dotenv.config();

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT! || "5000";
const HOST = process.env.HOST || "localhost";
const app= express();

app.use(express.json());
app.use(passport.initialize());

app.use(cors(
  {
    origin: "*", 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  }
));

app.use('/api', routes);
app.use('/auth', passport.authenticate('auth-google', {
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email"
  ],
  session: false
}), userRouter);

dbconnect();

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});