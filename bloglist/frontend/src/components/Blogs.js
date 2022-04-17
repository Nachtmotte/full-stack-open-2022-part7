import NewBlogForm from "./NewBlogForm";
import Notification from "./Notification";
import BlogList from "./BlogList";

const Blogs = () => {
  return (
    <>
      <Notification />
      <NewBlogForm />
      <BlogList />
    </>
  );
};

export default Blogs;
