const initState = {
  posts: [
    {id: 1, title: 'Hello world', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, assumenda deleniti, distinctio est et facere illo impedit inventore, ipsam libero molestias natus necessitatibus nostrum nulla omnis pariatur quisquam recusandae tempore.'},
    {id: 2, title: 'Hello world 2', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, assumenda deleniti, distinctio est et facere illo impedit inventore, ipsam libero molestias natus necessitatibus nostrum nulla omnis pariatur quisquam recusandae tempore.'},
    {id: 3, title: 'Hello world 3', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, assumenda deleniti, distinctio est et facere illo impedit inventore, ipsam libero molestias natus necessitatibus nostrum nulla omnis pariatur quisquam recusandae tempore.'},
  ]
}

const rootReducer = (state = initState, action) => {
  console.log('action', action)
  if(action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
};

export default rootReducer;
