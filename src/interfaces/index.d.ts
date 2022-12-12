export interface ICategory {
  id: number;
  title: string;
}
export interface IStatus {
  id: number;
  title: string;
}
export interface IProduct {
  id: number;
  title: string;
  statuses: IStatus;
  createdAt: string;
  category: ICategory;
  description:string;
  images?:string[]
}
