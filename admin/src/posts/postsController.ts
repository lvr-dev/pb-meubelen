import { Request, Response } from 'express';
import { IPostInitial, IPost } from 'src/posts/Post';
import { writeNewPost, getCachedPosts, getPostByTitle, writeExistingPost } from 'src/posts/postsDao';
import { PostType } from 'src/posts/Post';

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
  await writeNewPost(postObject);
  
  const allPosts = await getCachedPosts();
  const postTypeArray = Object.entries(PostType);
  
  res.render('posts', { posts: allPosts, postTypes: postTypeArray});
}

export async function updatePost(req: Request, res: Response) {
  const postObject = req.body as IPost;
  await writeExistingPost(postObject);
  const allPosts = await getCachedPosts();
  res.redirect('/posts');
}

export async function editPost(req: Request, res: Response) {
  const post = await getPostByTitle(req.params.slug);
  const allPosts = await getCachedPosts();
  const postTypeArray = Object.entries(PostType);
  res.render('posts', { posts: allPosts, selectedPost: post, postTypes: postTypeArray, edit: true });
}