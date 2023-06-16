export type FormData = {
  id?: number;
  title: string;
  description: string;
  items: Item[];
  author: string;
};

export type Item = {
  id?: number;
  title: string;
  description: string;
  author: string;
  votes?: Vote[];
};

export type Vote = {
  id: number;
  userId: string;
};
