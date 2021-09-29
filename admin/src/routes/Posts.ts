import { Router } from 'express';
import { index as postsIndex, createPost } from '@controllers/posts';
const postsRouter = Router();

postsRouter.get('/', postsIndex);

postsRouter.post('/', createPost)

export default postsRouter;