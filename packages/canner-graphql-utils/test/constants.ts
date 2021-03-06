import { Field } from '../src/schema/types';
import { createSchema } from '../src/schema/utils';

export const schema = {
  posts: {
    type: 'array',
    items: {
      type: 'object',
      items: {
        id: {
          type: 'id',
        },
        title: {
          type: 'string'
        },
        author: {
          type: 'relation',
          relation: {
            type: 'toOne',
            to: 'users'
          }
        },
        notes: {
          type: 'array',
          items: {
            type: 'object',
            items: {
              text: {
                type: 'string'
              }
            }
          }
        }
      }
    }
  },

  // users
  users: {
    type: 'array',
    items: {
      type: 'object',
      items: {
        id: {
          type: 'id'
        },
        age: {
          type: 'int'
        },
        name: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
        images: {
          type: 'array',
          items: {
            type: 'image'
          }
        },
        posts: {
          type: 'relation',
          relation: {
            type: 'toMany',
            to: 'posts'
          }
        }
      }
    }
  },

  // home
  home: {
    type: 'object',
    items: {
      header: {
        type: 'object',
        items: {
          title: {
            type: 'string'
          },
          subTitle: {
            type: 'string'
          }
        }
      },
      count: {
        type: 'int'
      },
      navs: {
        type: 'array',
        items: {
          type: 'object',
          items: {
            text: {
              type: 'string'
            }
          }
        }
      },
      staredPosts: {
        type: 'relation',
        relation: {
          type: 'toMany',
          to: 'posts'
        }
      },
      bestAuthor: {
        type: 'relation',
        relation: {
          type: 'toOne',
          to: 'users'
        }
      }
    }
  }
};

export const field = createSchema(schema);
