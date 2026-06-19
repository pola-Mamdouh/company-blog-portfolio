import { Link } from 'react-router-dom'

/* variant: 'landing' | 'posts' | 'tags' | 'categories' | 'post' | 'default' */
export default function BlogHero({ variant = 'landing', title, tags = [], thumb }) {
  const bgMap = {
    landing: `linear-gradient(rgb(255 255 255 / 50%), rgb(255 255 255 / 80%)), url("/images/blog/hero.jpg")`,
    posts: `linear-gradient(rgb(255 255 255 / 80%), rgb(255 255 255 / 90%)), url("/images/blog/hero-posts.jpg")`,
    tags: `linear-gradient(rgb(255 255 255 / 80%), rgb(255 255 255 / 90%)), url("/images/blog/hero-tags.jpg")`,
    categories: `linear-gradient(rgb(255 255 255 / 60%), rgb(255 255 255 / 80%)), url("/images/blog/hero-categories.jpg")`,
    post: thumb
      ? `linear-gradient(rgb(255 255 255 / 70%), rgb(255 255 255 / 90%)), url("${thumb}")`
      : undefined,
    default: undefined,
  }

  const heightMap = {
    landing: 'h-[580px]',
    posts: 'h-[350px]',
    tags: 'h-[350px]',
    categories: 'h-[350px]',
    post: 'h-[430px]',
    default: 'h-[430px]',
  }

  return (
    <div
      className={`relative ${heightMap[variant]} pt-[75px] px-5 pb-[50px]
        bg-cover bg-center bg-no-repeat flex items-center justify-center`}
      style={bgMap[variant] ? { backgroundImage: bgMap[variant] } : {}}
    >
      <div className="w-full max-w-site mx-auto flex items-center justify-center flex-col">
        {variant === 'landing' && (
          <>
            <h1 className="m-0 text-center text-[40px] sm:text-[30px]">مدونتي</h1>
            <p className="mt-5 mb-[40px] text-[20px] text-center leading-[33px] max-w-[80%]">
              {title}
            </p>
            <Link
              to="/blog/posts"
              className="text-[20px] no-underline py-[6px] px-[22px] rounded-[5px] bg-bred text-white transition-all duration-400 hover:bg-bpurple"
            >
              جميع التدوينات
            </Link>
          </>
        )}

        {(variant === 'posts' || variant === 'tags' || variant === 'categories') && (
          <h1 className="m-0 text-center text-[40px] text-bred sm:text-[30px]">{title}</h1>
        )}

        {variant === 'post' && (
          <>
            <h1 className="m-0 text-center text-[40px] text-bred sm:text-[30px]">{title}</h1>
            {tags.length > 0 && (
              <ul className="flex mt-[30px] m-0 p-0 list-none">
                {tags.map((tag) => (
                  <li key={tag} className="ml-[10px] first:ml-0">
                    <Link
                      to={`/blog/tags/${tag}`}
                      className="flex py-[10px] px-5 no-underline bg-bred text-white transition-all duration-400 hover:bg-bpurple rounded-[5px]"
                    >
                      #{tag}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {variant === 'default' && (
          <h1 className="m-0 text-center text-[40px] text-bred sm:text-[30px]">
            <span className="text-bpurple">كل مايخص</span> {title}
          </h1>
        )}
      </div>
    </div>
  )
}
