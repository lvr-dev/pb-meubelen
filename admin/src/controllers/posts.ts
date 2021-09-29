import { Request, Response } from 'express';


export function index(req: Request, res: Response): void {
  res.render('post-form', { title: 'Create your content here' });
}