import { Request, Response } from 'express';
import { IPostInitial } from '@entities/Post';
import { writeNewPost, getCachedPosts, getPostByTitle } from '@daos/postDao';

export async function posts(req: Request, res: Response): Promise<void> {
  const allPosts = await getCachedPosts();
  res.render('posts', { title: 'Pippi\'s Posts', posts: allPosts});
}

export async function createPost(req: Request, res: Response) {
  const postObject = req.body as IPostInitial;
  await writeNewPost(postObject);
  const allPosts = await getCachedPosts();
  res.render('posts', { title: 'Pippi\'s Posts', posts: allPosts });
}

export async function updatePost(req: Request, res: Response) {
  const post = await getPostByTitle(req.params.slug);
  console.log('the post', post);
  const allPosts = await getCachedPosts();
  res.render('posts', { "title": "Pippi\'s Posts", posts: allPosts, selectedPost: post });
}

