import api from '../../../api';

export const getDataOnAuthentication = (userId: string) => {
  const myTodos = api.service('content/to-do').find({
    query: {
      userId: userId,
      completed: false,
      $limit: 20,
    },
  });

  const feedTodos = api.service('content/to-do').find({
    query: {
      friends: true,
      $sort: { updatedAt: -1 },
      completed: true,
      public: true,
      $limit: 20,
      $resolve: {
        file: true,
        user: true,
        comments: true,
        likes: true,
        youLiked: true,
      },
    },
  });

  const discoverTodos = api.service('content/to-do').find({
    query: {
      $sort: { updatedAt: -1 },
      completed: true,
      public: true,
      $limit: 20,
      $resolve: {
        file: true,
        user: true,
        comments: true,
        likes: true,
        youLiked: true,
      },
    },
  });

  const notifications = api.service('communication/notification').find({
    query: {
      userId: userId,
      $sort: { _id: -1 },
      $resolve: {
        fromUser: true,
        todo: true,
      }
    },
  });

  const users = api.service('security/user').find({
    query: {
      $sort: { _id: -1 },
      $limit: 10,
      $resolve: {
        avatar: true,
      }
    },
  });

  return [myTodos, feedTodos, discoverTodos, notifications, users];
};
