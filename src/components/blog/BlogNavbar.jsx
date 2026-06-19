import { useState } from 'react'
import { Link } from 'react-router-dom'
import useScrolledNav from '../../hooks/useScrolledNav'

export default function BlogNavbar() {
  const scrolled = useScrolledNav()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-[9999] py-2 px-5 transition-all duration-400
        ${scrolled ? 'bg-white border-b border-[#e0e0e0]' : 'border-b border-transparent'}`}
    >
      <div className="mx-auto max-w-site w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/blog" className="text-bred no-underline text-[25px] z-[2]">
          <i className="fas fa-pen-square ml-1" />
          <b>مدونتي</b>
        </Link>

        {/* Hamburger – visible only on mobile (<768px) */}
        <i
          className="fas fa-bars flex md:hidden text-[20px] cursor-pointer z-[2]"
          onClick={() => setMenuOpen((o) => !o)}
        />

        {/* Nav links */}
        <ul
          className={`
            m-0 p-0 list-none
            absolute flex-col items-start w-full top-[54px] right-0 px-5
            bg-white border-b border-[#e0e0e0]
            transition-all duration-500
            md:relative md:flex md:flex-row md:items-center md:w-auto md:top-auto md:right-auto
            md:bg-transparent md:border-0 md:translate-y-0 md:opacity-100
            ${menuOpen ? 'flex translate-y-0 opacity-100' : 'hidden -translate-y-[200%] opacity-0'}
          `}
        >
          {[
            { to: '/blog/posts', icon: 'fas fa-rss', label: 'التدوينات' },
            { to: '/blog/tags', icon: 'fas fa-hashtag', label: 'المواضيع' },
            { to: '/blog/categories', icon: 'fas fa-th-large', label: 'الأقسام' },
          ].map((item) => (
            <li key={item.to} className="flex w-full md:w-auto">
              <Link
                to={item.to}
                className="text-black no-underline py-[10px] px-3 text-[18px] font-bold transition-all duration-400 hover:text-bpurple w-full md:w-auto md:px-3 px-0"
              >
                <i className={`${item.icon} ml-[3px] text-bred`} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
