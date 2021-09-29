import { Router } from 'express';
import { index as postsIndex} from '@controllers/posts';
const postsRouter = Router();

postsRouter.get('/', postsIndex);

export default postsRouter;