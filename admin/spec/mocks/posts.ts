import { IPost, PostType } from "src/posts/Post";

export const newPost: IPost = {
    postTitle: 'new blog test',
    postType: PostType.project,
    htmlContent: '<p>Content of blog test</p>',
    id: '12309309',
    slug: 'new-blog-test',
    dateCreated: new Date('2021-12-02'),
    dateChanged: new Date('2021-12-02')
}

export const updatedPost: IPost = {
    postTitle: 'updated blog test',
    postType: PostType.project,
    htmlContent: '<p>Content of blog test</p>',
    id: '12309309',
    slug: 'updated-blog-test',
    dateCreated: new Date('2021-12-02'),
    dateChanged: new Date('2021-12-03')
}
