import { mkdtemp, rm } from 'fs/promises';
import { existsSync } from 'fs';

import { getAllPosts, writeNewPost } from '../../src/posts/postsDao';
import { newPost } from '../mocks';


describe('PostDao', () => {
  describe('get list of all post', () => {
    it('should get an array of objects containing file contents', async function() {
      const fileContents = await getAllPosts();
      expect(fileContents).toBeInstanceOf(Array);
      expect(fileContents.length).toBeGreaterThanOrEqual(0);
    });
  });
  describe('create and update files', () => {
    let tmpFileDir: string;

    beforeAll(async () => {
      tmpFileDir = await mkdtemp('postDaoTest-');
    });

    afterAll(async () => {
      await rm(tmpFileDir, { recursive: true, force: true });
    })

    it('for a new post, it creates a file', async function() {
      await writeNewPost(newPost, tmpFileDir);
      const file = `${tmpFileDir}/${newPost.slug}.json`;
      const fileExists = existsSync(file);
      expect(fileExists).toBeTrue();
    });

  });

});