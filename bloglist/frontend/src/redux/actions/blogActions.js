import blogService from "../../services/blogs";

export const deleteBlog = (id) => {
  return async (dispatch) => {
    await blogService.remove(id);
    dispatch({
      type: "DELETE_BLOG",
      data: id,
    });
  };
};

export const updateBlog = (id, blog) => {
  return async (dispatch) => {
    const blogUpdated = await blogService.update(id, blog);
    dispatch({
      type: "UPDATE_BLOG",
      data: blogUpdated,
    });
  };
};

export const newBlog = (blog) => {
  return async (dispatch) => {
    const blogCreated = await blogService.create(blog);
    dispatch({
      type: "NEW_BLOG",
      data: blogCreated,
    });
  };
};

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch({
      type: "INIT_BLOGS",
      data: blogs,
    });
  };
};
