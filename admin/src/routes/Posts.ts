import { Router } from 'express';
import { posts, createPost, getPost, updatePost, editPost } from '@posts/postsController';

const postsRouter = Router();

postsRouter.get('/', posts);

postsRouter.post('/', createPost);

postsRouter.post('/:slug', updatePost);

postsRouter.get('/:slug/edit', editPost);

postsRouter.get('/:slug', getPost);


export default postsRouter;