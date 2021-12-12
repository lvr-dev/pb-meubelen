import { writeFile, readdir, readFile, unlink } from 'fs/promises';
import { resolve } from 'path';
import { IPost, IPostInitial } from 'src/posts/Post';
import { createPostFileName } from '@shared/functions';
import { buildPost, buildUpdatePost } from 'src/posts/postBuilder';


let allPosts: Array<IPost> = [];


export async function writeNewPost(post: IPostInitial, path = '../content/'): Promise<void> {
  const postData = buildPost(post);
  await writePostToFile(postData, path);
  return emptyPostsCache();
}

export async function writeExistingPost(post: IPost, path = '../content/'): Promise<void> {
  const existingPost = await getPostById(post.id);
  if (existingPost) { 
    const updatedPost = buildUpdatePost(post, existingPost);
    await updateFile(post, updatedPost, path);
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

export async function getCachedPosts(): Promise<IPost[]> {
  if (allPosts.length === 0) {
    allPosts = await getAllPosts();
  }
  return allPosts;
}

export async function getAllPosts(path = '../content/'): Promise<any> {
  const contentFiles = await readdir(path);
  return Promise.all(contentFiles.map(async (file) => {
    const fullFileName = resolve(path, file);
    const content = await readFile(fullFileName, 'utf-8');
    return JSON.parse(content);
  }));
}

async function updateFile(post: IPost, updatedPost: IPost, path: string): Promise<void | Error> {
  return writePostToFile(updatedPost, path).then( async () => {
    if (post.slug !== updatedPost.slug) {
      return deleteFile(post.slug, path);
    }
  });
}

async function writePostToFile(post: IPost, path: string): Promise<void> {
  const fullPath = createPostFileName(path, post.slug);
  try {
    return writeFile(fullPath, JSON.stringify(post));
  } catch (error) {
    throw new Error(`Error writing file ${fullPath}`);
  }
}

async function deleteFile(slug: string, path: string): Promise<void> {
  const fullPath = createPostFileName(path, slug);
  try {
    return unlink(fullPath);
  } catch (error) {
    throw new Error(`Error deleting file ${fullPath}`);
  }
}

function emptyPostsCache() {
  allPosts = [];
}

