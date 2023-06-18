import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hero from "../../Images/blog.jpg";
import axios from "axios";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    tags: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [showForm, setShowForm] = useState(false);

      
  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/getAllBlogs"
      );
      setBlogPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {


    fetchBlogPosts();
  }, []);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreatePost = async () => {
    const newPost = {
      _id: blogPosts.length + 1,
      ...formData,
    };

    newPost.date = new Date(newPost.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/createNewBlog",
        newPost
      );
      fetchBlogPosts()
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    setShowForm(false);
  };
  const handleCancel = () => {
    setShowForm(false);
  };
  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${hero})`,
          height: "500px",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>

            <nav className="text-white mb-8">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="text-amber-500">
                    Home
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
                <li>About Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="grid gap-10 lg:gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mx-6">
        {blogPosts.map((post) => (
          <div
            key={post._id}
            className="dark:bg-gray-800 dark:text-gray-100 my-6"
          >
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <span className="text-sm dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">
                  {post.tags}
                </span>
              </div>
              <div className="mt-3">
                <span className="text-2xl font-bold">{post.title}</span>
                <div className={`mt-2 truncate`}>
                  <p>{post.content}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="w-full">
                  <div>
                    <p className="dark:text-violet-400">{post.author}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-8">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-6"
        >
          Create New Post
        </button>
      </div>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-md z-50">
            <h2 className="text-2xl font-bold mb-4">Create New Blog Post</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  maxLength={50}
                  value={formData.content}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="author"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="tags"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleCreatePost}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Create Post
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
