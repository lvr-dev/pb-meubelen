
export interface IPost {
  postTitle: string;
  postContent: string;
}

export interface IPostSaved extends IPost{
  dateCreated: Date;
  dateChanged: Date;
}
