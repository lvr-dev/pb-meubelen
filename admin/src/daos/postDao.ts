import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { IPost, IPostSaved } from '@entities/Post';
import { getSlug } from '@shared/functions';


export async function writeNewPost(post: IPost): Promise<IPostSaved> {
  const postDates = {
    dateCreated: new Date(),
    dateChanged: new Date()
  }
  const postData = { ...postDates, ...post };
  const postDataJson = JSON.stringify(postData);
  const fileName = getSlug(post.postTitle);
  const filePath = resolve('../content', fileName);
  console.log('filePath', filePath);
  await writeFile(filePath, postDataJson);
  return postData;
}



