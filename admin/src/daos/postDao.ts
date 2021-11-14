import { writeFile, readdir, readFile, rename } from 'fs/promises';
import { resolve } from 'path';
import { IPost, IPostInitial } from '@entities/Post';
import { createPostFileName } from '@shared/functions';
import { buildPost, updatePost } from '@builders/postBuilder';


const contentUrl = '../content/';
let allPosts: Array<IPost> = [];


export async function getCachedPosts(): Promise<IPost[]> {
  if (allPosts.length === 0) {
    allPosts = await getAllPosts();
  }
  return allPosts;
}

export async function createNewPostFile(post: IPostInitial): Promise<void> {
  const postData = buildPost(post);
  console.log('postData', postData);
  const fileName = createPostFileName(contentUrl, postData.id);
  await writeFile(fileName, JSON.stringify(postData));
  return emptyPostsCache();
}

export async function updatePostFile(post: IPost): Promise<void> {
  const existingPost = await getPostById(post.id);
  if (existingPost) { 
    const updatedPost = updatePost(post, existingPost);
    const fileName = createPostFileName(contentUrl, updatedPost.id);
    await writeFile(fileName, JSON.stringify(updatedPost));
    return emptyPostsCache();
  }
  return emptyPostsCache();
}

export async function getPostByTitle(title: string): Promise<IPost | IPost | undefined> {
  const posts = await getCachedPosts();
  return posts.find(post => post.slug === title);
}

export async function getPostById(id: string): Promise<IPost | IPost | undefined> {
  const posts = await getCachedPosts();
  return posts.find(post => post.id === id);
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

