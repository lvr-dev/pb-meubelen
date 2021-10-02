import { Router } from 'express';
import { posts, createPost, updatePost } from '@controllers/posts';
const postsRouter = Router();

postsRouter.get('/', posts);

postsRouter.post('/', createPost)

postsRouter.get('/:slug', updatePost)



export default postsRouter;