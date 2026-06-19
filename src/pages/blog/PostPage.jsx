import { useParams } from 'react-router-dom'
import BlogNavbar from '../../components/blog/BlogNavbar'
import BlogHero from '../../components/blog/BlogHero'
import BlogFooter from '../../components/blog/BlogFooter'
import { posts } from '../../data/blog'

export default function PostPage() {
  const { id } = useParams()
  const post = posts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="blog-site">
        <BlogNavbar />
        <div className="pt-[120px] px-5 text-center text-[24px]">التدوينة غير موجودة</div>
        <BlogFooter />
      </div>
    )
  }

  return (
    <div className="blog-site">
      <BlogNavbar />
      <BlogHero variant="post" title={post.title} tags={post.tags} thumb={post.thumb} />

      <div className="w-full py-[50px] px-5">
        <div
          className="w-full max-w-site mx-auto [&_p]:text-[18px] [&_p]:leading-[30px] [&_ol_li]:text-[18px] [&_ol_li]:leading-[30px] [&_h1]:text-[32px] [&_h3]:text-[22px]"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>

      <BlogFooter />
    </div>
  )
}
