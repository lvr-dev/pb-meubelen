import { Request, Response } from 'express';
import express from 'express'

import postsRouter from './Posts';

const BaseRouter = express.Router();

BaseRouter.use('/posts', postsRouter);

/* GET home page. */
BaseRouter.get('/', function (req: Request, res: Response) {
  console.log('the baserouter');
  res.redirect('/posts');
});


export default BaseRouter;