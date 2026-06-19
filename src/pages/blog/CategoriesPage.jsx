import { Link } from 'react-router-dom'
import BlogNavbar from '../../components/blog/BlogNavbar'
import BlogHero from '../../components/blog/BlogHero'
import BlogFooter from '../../components/blog/BlogFooter'
import { posts } from '../../data/blog'

export default function CategoriesPage() {
  const categories = [...new Set(posts.flatMap((p) => p.categories))]

  return (
    <div className="blog-site">
      <BlogNavbar />
      <BlogHero variant="categories" title="الأقسام" />

      <div className="w-full py-[50px] px-5">
        <div className="w-full max-w-site mx-auto">
          <div className="flex flex-wrap -mx-5">
            {categories.map((cat) => (
              <div key={cat} className="w-1/3 sm:w-1/2 px-5 mb-[40px]">
                <Link
                  to={`/blog/categories/${cat}`}
                  className="py-[100px] sm:py-[50px] no-underline flex justify-center text-[33px] sm:text-[22px] text-white bg-bred font-bold transition-all duration-400 hover:bg-bpurple"
                >
                  {cat}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BlogFooter />
    </div>
  )
}
