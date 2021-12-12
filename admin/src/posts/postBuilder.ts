import { v1 as uuidv1 } from 'uuid';
import { IPost, IPostInitial } from 'src/posts/Post';


export const buildPost = (post: IPostInitial): IPost => {
  const slug = getSlug(post.postTitle);
  const id = uuidv1();
  const postDates = {
    id,
    dateCreated: new Date(),
    dateChanged: new Date(),
    slug,
  };
  return { ...post, ...postDates };
}

export const buildUpdatePost = (post: IPost, existingPost: Partial<IPost>): IPost => {
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
