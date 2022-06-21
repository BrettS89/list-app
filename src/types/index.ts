import { Paginated } from '@feathersjs/feathers';
import Resource from './resource';

export interface Navigation {
  navigation: {
    navigate(screen: string): void;
    goBack(): void;
  } 
}

export interface File extends Resource {
  meta: {
    extension: string;
    size: string;
    type: string;
  }
  urls: {
    storage: string;
    delivery: string;
  }
}

export interface User extends Resource {
  email: string;
  password: string;
  roleId: string;
  profile: {
    firstName: string;
    lastName: string;
    username: string;
    avatarId?: string;
    avatar?: File;
  }
}

export interface Comment extends Resource {
  userId: string;
  todoId: string;
  body: string;
  user?: User;
}

export interface Like extends Resource {
  userId: string;
  todoId: string;
}

export interface Todo extends Resource {
  userId: string;
  body: string;
  completed: boolean;
  public: boolean;
  fileId?: string;
  comments?: Comments;
  file?: File;
  user?: User;
  likes?: number;
  youLiked?: boolean
}

export interface Notification extends Resource {
  userId: string;
  fromUserId?: string;
  todoId?: string;
  seen: boolean;
  body: string;
  type: string;
  fromUser?: User;
  todo?: Todo;
}

export type Comments = Paginated<Comment>;
export type Files = Paginated<File>;
export type Likes = Paginated<Like>;
export type Notifications = Paginated<Notification>;
export type Todos = Paginated<Todo>;
export type Users = Paginated<User>;
