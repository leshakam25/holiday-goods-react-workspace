export interface ICategory {
  id: number;
  title: string;
}
export interface ITags {
  id: number;
  title: string;
}
export interface IProduct {
  id: number;
  article: number;
  title: string;
  tags: ITags;
  createdAt: string;
  category: ICategory;
  description:string;
  images?:string[]
}
