const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_BLOG": {
      const blogId = action.data;
      return state.filter((blog) => blog.id !== blogId);
    }
    case "UPDATE_BLOG": {
      const updatedBlog = action.data;
      return state.map((blog) =>
        blog.id !== updatedBlog.id ? blog : updatedBlog
      );
    }
    case "NEW_BLOG":
      return state.concat(action.data);
    case "INIT_BLOGS":
      return action.data;
    default:
      return state;
  }
};

export default reducer;
