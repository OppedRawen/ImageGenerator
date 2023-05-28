import express from 'express';
import * as dotenv from 'dotenv';
import {Configuration,OpenAIApi} from 'openai';


// make sure the environment variable is populated
dotenv.config();

const router = express.Router();