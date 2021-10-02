
export interface IPostInitial {
  postTitle: string;
  postContent: string;
}

export interface IPost extends IPostInitial {
  dateCreated: Date;
  dateChanged: Date;
  slug: string;
}
