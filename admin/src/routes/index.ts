import { Request, Response } from 'express';
import express from 'express'
const BaseRouter = express.Router();



/* GET home page. */
BaseRouter.get('/', function(req: Request, res: Response) {
  res.redirect('/posts');
});


export default BaseRouter;