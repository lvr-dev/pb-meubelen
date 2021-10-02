import * as showdown from 'showdown';
import { IPost, IPostInitial } from '@entities/Post';


export const buildPost = (post: IPostInitial): IPost => {
  const slug = getSlug(post.postTitle);
  const contentHtml = convertMdToHtml(post.postContent);
  console.log(contentHtml);
  const postDates = {
    dateCreated: new Date(),
    dateChanged: new Date(),
    slug,
    postContent: contentHtml
  };
  return { ...post, ...postDates }
}

const getSlug = (title: string) => {
  title = title.replace(/[&\/\\#*?]/g, '');
  return title.replace(/\s+/g, '-').toLowerCase();
}

const convertMdToHtml = (mdContent: string) => {
  const converter = new showdown.Converter();
  return converter.makeHtml(mdContent);
} 