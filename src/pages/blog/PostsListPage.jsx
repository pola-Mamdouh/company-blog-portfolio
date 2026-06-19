import { useState } from 'react'
import BlogNavbar from '../../components/blog/BlogNavbar'
import BlogHero from '../../components/blog/BlogHero'
import PostCard from '../../components/blog/PostCard'
import BlogFooter from '../../components/blog/BlogFooter'
import { posts } from '../../data/blog'

const PAGE_SIZE = 9

export default function PostsListPage() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(posts.length / PAGE_SIZE)
  const pagePosts = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="blog-site">
      <BlogNavbar />
      <BlogHero variant="posts" title="التدوينات" />

      <div className="w-full py-[50px] px-5 pb-[45px]">
        <div className="w-full max-w-site mx-auto">
          <div className="flex flex-wrap -mx-5">
            {pagePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="flex justify-center flex-row-reverse gap-3 mt-4">
              {page > 1 && (
                <button
                  onClick={() => setPage((p) => p - 1)}
                  className="no-underline text-white bg-bred py-[10px] px-5 flex items-center transition-all duration-400 hover:bg-bpurple rounded-[5px] border-none cursor-pointer font-tajawal text-[16px]"
                >
                  <span className="mx-2 text-[18px]">السابق</span>
                  <i className="fas fa-long-arrow-alt-left" />
                </button>
              )}
              {page < totalPages && (
                <button
                  onClick={() => setPage((p) => p + 1)}
                  className="no-underline text-white bg-bred py-[10px] px-5 flex items-center transition-all duration-400 hover:bg-bpurple rounded-[5px] border-none cursor-pointer font-tajawal text-[16px]"
                >
                  <i className="fas fa-long-arrow-alt-right" />
                  <span className="mx-2 text-[18px]">التالي</span>
                </button>
              )}
            </nav>
          )}
        </div>
      </div>

      <BlogFooter />
    </div>
  )
}
