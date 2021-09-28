import { Request, Response } from 'express';


exports.index = function (req: Request, res: Response): void {
  res.render('post-form', { title: 'Create your content here' });
}