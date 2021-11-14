export enum PostType {
  Project = "werkstuk",
  Internship = "stage",
  About = "over Pippi",
}

export interface IPostInitial {
  postTitle: string;
  postType: Enumerator<PostType>;
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