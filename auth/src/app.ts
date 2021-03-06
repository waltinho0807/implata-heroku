import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';

import cookieSession from 'cookie-session';


import{currentUserRouter} from './routes/current-user';
import{signInRouter} from './routes/signin';
import{signoutRouter} from './routes/signout';
import{signUpRouter} from './routes/signup';
import{errorHandler, NotFoundError} from '@wctickets/common'

 

const app = express();
app.set('trust proxy', true)
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: false
    })
)

app.use(signInRouter);
app.use(signUpRouter);
app.use(currentUserRouter);
app.use(signoutRouter);

app.all('*', (req, res)=>{
    throw new NotFoundError();
})

app.use(errorHandler);

export {app};