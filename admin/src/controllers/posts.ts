import { Request, Response } from 'express';
import { IPostInitial, IPost } from '@entities/Post';
import { createNewPostFile, getCachedPosts, getPostByTitle, updatePostFile } from '@daos/postDao';
import { PostType } from '@entities/Post';

export async function posts(req: Request, res: Response): Promise<void> {
  const allPosts = await getCachedPosts();
  const postTypeArray = Object.entries(PostType);
  res.render('posts', { posts: allPosts, postTypes: postTypeArray });
}

export async function getPost(req: Request, res: Response) {
  const post = await getPostByTitle(req.params.slug);
  const allPosts = await getCachedPosts();
  res.render('posts', { posts: allPosts, selectedPost: post });
}

export async function createPost(req: Request, res: Response) {
  const postObject = req.body as IPostInitial;
  await createNewPostFile(postObject);
  
  const allPosts = await getCachedPosts();
  const postTypeArray = Object.entries(PostType);
  
  res.render('posts', { posts: allPosts, postTypes: postTypeArray});
}

export async function updatePost(req: Request, res: Response) {
  const postObject = req.body as IPost;
  await updatePostFile(postObject);
  const allPosts = await getCachedPosts();
  res.redirect('/posts');
}

export async function editPost(req: Request, res: Response) {
  const post = await getPostByTitle(req.params.slug);
  const allPosts = await getCachedPosts();
  const postTypeArray = Object.entries(PostType);
  res.render('posts', { posts: allPosts, selectedPost: post, postTypes: postTypeArray, edit: true });
}