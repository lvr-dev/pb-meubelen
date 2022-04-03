import { IPost, PostType, IPostInitial } from "src/posts/Post";

export const newPost: IPostInitial = {
    postTitle: 'new blog test',
    postType: PostType.project,
    htmlContent: '<p>Content of blog test</p>',
}

export const updatedPostBasic: IPost = {
    postTitle: 'new blog test',
    postType: PostType.project,
    htmlContent: '<p>Content of an updated blog test</p>',
    id: '12309309',
    slug: 'new-blog-test',
    dateCreated: new Date('2021-12-02'),
    dateChanged: new Date('2021-12-03')
}

export const updatedPostTitle: IPost = {
    postTitle: 'updated blog test',
    postType: PostType.project,
    htmlContent: '<p>Content of blog test</p>',
    id: '12309309',
    slug: 'new-blog-test',
    dateCreated: new Date('2021-12-02'),
    dateChanged: new Date('2021-12-03')
}
