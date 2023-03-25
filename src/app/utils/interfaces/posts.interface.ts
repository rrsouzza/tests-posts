export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostReady extends Post {
  username: string;
}
