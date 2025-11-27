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
    <section
      id="blog"
      className="py-20 bg-gradient-to-br from-white via-[#E9F8FF] to-[#E9FFF5] relative overflow-hidden"
    >

      {/* Soft Glow Background Bubbles */}
      <div className="absolute w-96 h-96 bg-blue-200/20 blur-3xl -top-16 -left-10 rounded-full"></div>
      <div className="absolute w-80 h-80 bg-green-200/25 blur-3xl bottom-10 right-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold tracking-wide">
            Our Blog
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-slate-900">
            Latest Articles & Insights
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {blogs.map((blog, index) => (
            <article
              key={index}
              className="rounded-2xl overflow-hidden backdrop-blur-md bg-white/60 border border-blue-100 
              shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* Top Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-700"
                />
                {/* Date Pill */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs 
                                flex items-center gap-1 font-medium shadow-lg">
                  <Calendar size={14} />
                  {blog.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-all line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                <button className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 
                transition-all text-sm group-hover:text-blue-700">
                  Read More <ArrowRight size={16} />
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
