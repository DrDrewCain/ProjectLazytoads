export type Image = {
    url: string;
    blurDataURL?: string;
  };
  
  export type Link = {
    url: string;
  };
  
  export type User = {
    id?: string;
    email?: string;
    name?: string | null;
    username?: string | null;
    createdAt?: number | null;
  };
