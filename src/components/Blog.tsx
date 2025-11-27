import { Calendar, ArrowRight } from 'lucide-react';

function Blog() {
  const blogs = [
    {
      date: "01 Sep",
      title: "Bright Minds: Leaving India or Coming Back?",
      excerpt: "For decades, India has grappled with the challenge of brain drain—the steady migration of its brightest minds...",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
    },
    {
      date: "12 Aug",
      title: "Entrepreneurship Development Program: Fueling the Next Generation",
      excerpt: "In today's fast-evolving, interconnected world, more people than ever are choosing to relocate in search of greater opportunities...",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80"
    },
    {
      date: "12 Aug",
      title: "Why Permanent Residency is the Gateway to Opportunities",
      excerpt: "In today's fast-evolving, interconnected world, more people than ever are choosing to relocate in search of greater opportunities...",
      image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=600&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Blog
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Latest News & Blog
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                  <Calendar size={16} />
                  {blog.date}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
