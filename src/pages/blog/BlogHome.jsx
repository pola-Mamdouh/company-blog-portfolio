import BlogNavbar from '../../components/blog/BlogNavbar'
import BlogHero from '../../components/blog/BlogHero'
import PostCard from '../../components/blog/PostCard'
import BlogFooter from '../../components/blog/BlogFooter'
import { posts, heroData } from '../../data/blog'

export default function BlogHome() {
  const featured = posts.slice(0, 6)

  return (
    <div className="blog-site">
      <BlogNavbar />
      <BlogHero variant="landing" title={heroData.secondTitle} />

      {/* Featured posts – pulled up over the hero */}
      <section className="w-full px-5 pb-[10px] relative -mt-[55px]">
        <div className="w-full max-w-site mx-auto flex flex-col">
          <div className="flex flex-wrap -mx-5">
            {featured.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <BlogFooter />
    </div>
  )
}
