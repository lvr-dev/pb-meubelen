export enum PostType {
  project = "werkstuk",
  internship = "stage",
  about = "over Pippi",
}

export interface IPostInitial {
  postTitle: string;
  postType: PostType;
  htmlContent: string;
}

export interface IPost extends IPostInitial {
  id: string;
  dateCreated: Date;
  dateChanged: Date;
  slug: string;
  from?: Date;
  to?: Date;
}