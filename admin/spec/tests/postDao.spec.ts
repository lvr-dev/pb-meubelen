import { getAllPosts } from '@daos/postDao';
import { expectCt } from 'helmet';

describe('PostDao getAllPosts', () => {
  it('should get an array of objects containing file contents', async () => {
    const fileContents = await getAllPosts();
    expect(fileContents).toBeInstanceOf(Array);
    expect(fileContents.length).toBeGreaterThanOrEqual(1);
  });
});