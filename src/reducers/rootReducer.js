const initState = {
  posts: [
    {id: 1, title: 'Hello world', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, assumenda deleniti, distinctio est et facere illo impedit inventore, ipsam libero molestias natus necessitatibus nostrum nulla omnis pariatur quisquam recusandae tempore.'},
    {id: 2, title: 'Hello world 2', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, assumenda deleniti, distinctio est et facere illo impedit inventore, ipsam libero molestias natus necessitatibus nostrum nulla omnis pariatur quisquam recusandae tempore.'},
    {id: 3, title: 'Hello world 3', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, assumenda deleniti, distinctio est et facere illo impedit inventore, ipsam libero molestias natus necessitatibus nostrum nulla omnis pariatur quisquam recusandae tempore.'},
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;
