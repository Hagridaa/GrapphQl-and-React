import logger from '../../helpers/logger';

/* let posts = [{
    id:2,
    text: 'Lorem ipsum',
    user: {
        avatar: '',
        username: 'test user'
    }
},

{
    id: 1,
    text: 'lorem ipsum',
    user: {
        avatar: '',
        username: 'Test User 2'
    }

}];
 */
export default function resolver() {
    const { db } = this;
    const { Post } = db.models;

    const resolvers = {
        Post: {
            user(post, args, context) {
              return post.getUser();
            },
        },
        
        RootQuery: {
            posts(root, args, context) {
                return Post.findAll({order: [['createdAt', 'DESC']]});
            },

            },

            RootMutation: {
                addPost (root, { post, user }, context) {
                    const postObject = {
                        ...post, 
                        user,
                        id: posts.length + 1,
                    };
                    posts.push(postObject);
                    logger.log({ level: 'info', message: 'Post was created'});
                    return postObject;
                },
        },
        
    };

    return resolvers
}

