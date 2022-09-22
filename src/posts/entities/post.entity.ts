import { Post } from '@prisma/client';

export class PostEntity implements Post {
  id: number;
  published: boolean;
  title: string;
  content: string;
  createdAT: Date;
  updatedAt: Date;
  authorId: number;
}
