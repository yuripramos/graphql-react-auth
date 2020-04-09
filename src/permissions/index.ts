import { rule, shield } from 'graphql-shield';
import { getUserId } from '../utils';

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  isPostOwner: rule()(async (parent, { postId }, context) => {
    const userId = getUserId(context);
    console.log('id inside rules', postId);
    const author = await context.prisma.post
      .findOne({
        where: {
          id: postId,
        },
      })
      .author();
    return userId === author.id;
  }),
};

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
    filterPosts: rules.isAuthenticatedUser,
    post: rules.isAuthenticatedUser,
  },
  Mutation: {
    createDraft: rules.isAuthenticatedUser,
    deletePost: rules.isPostOwner,
    publish: rules.isPostOwner,
  },
});
