import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
  const title = post.title.length > 30 ? post.title.substring(0, 30) + '…' : post.title
  const summary = post.summary.length > 60 ? post.summary.substring(0, 60) + '…' : post.summary

  return (
    <div className="w-1/3 max-lg:w-1/2 max-md:w-full px-5 mb-[45px]">
      <div className="bg-white rounded-[5px] shadow-card p-[10px]">
        <div className="w-full h-[200px]">
          <img src={post.thumb} alt="post" className="w-full h-full object-cover" />
        </div>
        <div>
          <Link
            to={`/blog/posts/${post.id}`}
            className="mb-[5px] no-underline mt-[15px] inline-flex text-[20px] text-black font-bold transition-all duration-400 hover:text-bred"
          >
            {title}
          </Link>
          <div className="flex">
            {post.tags.slice(0, 2).map((tag) => (
              <Link
                key={tag}
                to={`/blog/tags/${tag}`}
                className="text-bgray no-underline transition-all duration-400 hover:text-bred ml-[10px]"
              >
                #{tag}
              </Link>
            ))}
            {post.categories.map((cat) => (
              <Link
                key={cat}
                to={`/blog/categories/${cat}`}
                className="text-bgray no-underline transition-all duration-400 hover:text-bred ml-[10px]"
              >
                {cat}
              </Link>
            ))}
            <b className="text-bgray">{post.date}</b>
          </div>
          <p className="text-[16px]">{summary}</p>
        </div>
      </div>
    </div>
  )
}
