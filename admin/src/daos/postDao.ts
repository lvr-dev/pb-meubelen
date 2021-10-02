import { writeFile, readdir, readFile } from 'fs/promises';
import { resolve } from 'path';
import { IPost, IPostInitial } from '@entities/Post';
import { createPostFileName } from '@shared/functions';
import { buildPost } from '@builders/postBuilder';

const contentUrl = '../content/';
let allPosts: Array<IPost> = [];


export async function getCachedPosts(): Promise<IPost[]> {
  if (allPosts.length === 0) {
    allPosts = await getAllPosts();
  }
  return allPosts;
}

export async function writeNewPost(post: IPostInitial): Promise<void> {
  const postData = buildPost(post);
  const postDataJson = JSON.stringify(postData);
  const fileName = createPostFileName(contentUrl, postData.slug);
  await writeFile(fileName, postDataJson);
  return emptyPostsCache();
}

export async function getPostByTitle(title: string) {
  const posts = await getCachedPosts();
  console.log('posts', posts, title);
  return posts.find(post => post.slug === title);
}

async function getAllPosts(): Promise<any> {
  const contentFiles = await readdir(contentUrl);
  return Promise.all(contentFiles.map(async (file) => {
    const fullFileName = resolve(contentUrl, file);
    const content = await readFile(fullFileName, 'utf-8');
    return JSON.parse(content);
  }));
}

function emptyPostsCache() {
  allPosts = [];
}