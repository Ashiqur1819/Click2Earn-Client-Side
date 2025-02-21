import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Maximize Your Earnings on Click2Earn",
      description:
        "Learn the best tips and tricks to earn more by completing tasks on Click2Earn. Maximize your rewards and stay ahead!",
      image:
        "https://i.ibb.co.com/CKk6Wrpy/How-to-Maximize-Your-Earnings-on-Click2-Earn.png",
      link: "/blog/how-to-maximize-earnings",
    },
    {
      id: 2,
      title: "Top 5 Tasks You Can Complete in 2025",
      description:
        "Discover the top tasks you can do to start earning rewards quickly in 2025. Stay updated with new task categories!",
      image:
        "https://i.ibb.co.com/6JTHq54j/Top-5-Tasks-You-Can-Complete-in-2025.webp",
      link: "/blog/top-5-tasks-2025",
    },
    {
      id: 3,
      title: "The Future of Online Micro Tasks: What to Expect",
      description:
        "Discover trends shaping the micro-tasking industry and how Click2Earn is evolving for better opportunities.",
      image:
        "https://i.ibb.co.com/nM17Njbb/The-Future-of-Online-Micro-Tasks.png",
      link: "/blog/future-of-micro-tasks",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
          From Our Blog
        </h2>
        <p className="max-w-3xl mx-auto text-center mt-3 text-gray-800">
          Stay updated with the latest insights, tips, and trends from our blog.
          Learn how to maximize your earnings and make the most of Click2Earn!
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-sm shadow-sm overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
