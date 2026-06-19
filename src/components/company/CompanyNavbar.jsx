import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrolledNav from '../../hooks/useScrolledNav'

export default function CompanyNavbar({ isLandingPage = false }) {
  const scrolled = useScrolledNav()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  /* Close mobile menu when scrolled */
  useEffect(() => {
    if (scrolled) setMenuOpen(false)
  }, [scrolled])

  /* Scrollspy */
  useEffect(() => {
    if (!isLandingPage) return
    const onScroll = () => {
      const pos = document.documentElement.scrollTop + 75
      document.querySelectorAll('.section-container').forEach((el) => {
        if (el.offsetTop <= pos) setActiveId(el.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isLandingPage])

  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
  }

  const navLinks = [
    { id: 'hero', label: 'من نحن' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'projects', label: 'معرض الأعمال' },
    { id: 'contact-us', label: 'تواصل معنا' },
  ]

  const isShow = scrolled || menuOpen
  const navClass = `company-navbar-${scrolled ? 'scrolled' : menuOpen ? 'phone' : 'transparent'}`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[99999] py-[15px] px-5 transition-all duration-500 ${navClass}
        ${isShow ? 'bg-white shadow-nav' : 'bg-transparent'}`}
    >
      <div
        className={`w-full max-w-site mx-auto flex items-center
          ${isLandingPage ? 'justify-between' : 'justify-center'}`}
      >
        {/* Logo */}
        <Link to="/company" className="nav-logo flex items-center no-underline z-[2] transition-all duration-500">
          <i className="fab fa-cloudflare text-[45px] transition-all duration-500" />
          <b className="text-[30px] mr-[15px] transition-all duration-500">تقنية</b>
        </Link>

        {isLandingPage && (
          <>
            {/* Hamburger */}
            <i
              className={`fas fa-bars phone-menu-icon text-[25px] cursor-pointer transition-all duration-500 z-[2] md:hidden
                ${isShow ? 'text-cblue' : 'text-white'}`}
              onClick={() => setMenuOpen((o) => !o)}
            />

            {/* Nav links */}
            <ul
              className={`m-0 p-0 list-none md:inline-flex md:items-center
                absolute md:static top-full left-0 w-full bg-white py-[30px] px-5
                md:bg-transparent md:w-auto md:py-0 md:px-0
                transition-all duration-500 flex flex-col items-end md:flex-row
                ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 md:translate-y-0 md:opacity-100'}`}
            >
              {navLinks.map((link) => {
                const isActive = activeId === link.id
                return (
                  <li key={link.id} className="text-[20px] md:ml-7">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => scrollTo(e, link.id)}
                      className={`nav-link no-underline transition-all duration-500 py-[15px] px-[13px] rounded-[5px] block
                        md:py-[15px] md:px-[13px] py-2 px-0 md:text-[20px]
                        ${isActive ? 'active' : ''}`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </>
        )}
      </div>
    </nav>
  )
}
