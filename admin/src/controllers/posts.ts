import { Request, Response } from 'express';
import { IPost } from '@entities/Post';
import { writeNewPost } from '@daos/postDao';

export function index(req: Request, res: Response): void {
  res.render('post-form', { title: 'Create your content here' });
}

export async function createPost(req: Request, res: Response) {
 
  const postObject = req.body as IPost;
  const createdPostObject = await writeNewPost(postObject);

  res.render('post-detail', { postTitle: createdPostObject.postTitle, postContent: createdPostObject.postContent});

}

export async function getPosts(req: Request, res: Response) {
  
}