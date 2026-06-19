import { useParams } from 'react-router-dom'
import BlogNavbar from '../../components/blog/BlogNavbar'
import BlogHero from '../../components/blog/BlogHero'
import PostCard from '../../components/blog/PostCard'
import BlogFooter from '../../components/blog/BlogFooter'
import { posts } from '../../data/blog'

export default function TagPage() {
  const { tag } = useParams()
  const filtered = posts.filter((p) => p.tags.includes(tag))

  return (
    <div className="blog-site">
      <BlogNavbar />
      <BlogHero variant="default" title={`#${tag}`} />

      <div className="w-full py-[50px] px-5">
        <div className="w-full max-w-site mx-auto">
          <div className="flex flex-wrap -mx-5">
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      <BlogFooter />
    </div>
  )
}
