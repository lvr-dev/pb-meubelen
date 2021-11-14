import { v4 as uuidv4 } from 'uuid';
import { IPost, IPostInitial } from '@entities/Post';


export const buildPost = (post: IPostInitial): IPost => {
  const slug = getSlug(post.postTitle);
  const id = uuidv4();
  const postDates = {
    id,
    dateCreated: new Date(),
    dateChanged: new Date(),
    slug,
  };
  return { ...post, ...postDates };
}

export const updatePost = (post: IPost, existingPost: Partial<IPost>): IPost => {
  const slug = getSlug(post.postTitle);
  const updatedValues = {
    ...{
      dateChanged: new Date(),
      slug
    },
    ...post
  };
  return { ...existingPost, ...updatedValues };
}

const getSlug = (title: string) => {
  title = title.replace(/[&\/\\#*?]/g, '');
  return title.replace(/\s+/g, '-').toLowerCase();
}
