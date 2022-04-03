import { mkdtemp, rm, readdir} from 'fs/promises';
import { existsSync } from 'fs';

import { getAllPosts, writeNewPost, writeExistingPost } from '@posts/postsDao';
import { newPost, updatedPostBasic, updatedPostTitle } from '../mocks';


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

    it('for a new post, it creates a file', async () => {
      await writeNewPost(newPost, tmpFileDir);
      const file = `${tmpFileDir}/${newPost.slug}.json`;
      const fileExists = existsSync(file);
      expect(fileExists).toBeTrue();
    });

    it('for an existing post, it updates the contents', async () => {
      await writeExistingPost(updatedPostBasic, tmpFileDir);
      const fileEntries = await readdir(tmpFileDir);
      expect(fileEntries.length).toEqual(1);
    });

    it('replaces the file if an updated post gets a new title', async () => {
      await writeExistingPost(updatedPostTitle, tmpFileDir);
      const fileEntries = await readdir(tmpFileDir);
      expect(fileEntries.length).toEqual(1);
    })
  });

});