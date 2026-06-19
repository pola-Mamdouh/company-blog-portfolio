import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'

import CompanyHome from './pages/company/CompanyHome'
import ServicePage from './pages/company/ServicePage'
import ProjectPage from './pages/company/ProjectPage'

import BlogHome from './pages/blog/BlogHome'
import PostsListPage from './pages/blog/PostsListPage'
import PostPage from './pages/blog/PostPage'
import TagsPage from './pages/blog/TagsPage'
import TagPage from './pages/blog/TagPage'
import CategoriesPage from './pages/blog/CategoriesPage'
import CategoryPage from './pages/blog/CategoryPage'

import PersonalHome from './pages/personal/PersonalHome'

function IndexPage() {
  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 font-tajawal"
    >
      <h1 className="text-3xl font-bold text-gray-800">اختر المشروع</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {[
          { to: '/company', label: 'موقع الشركة', color: 'bg-cblue' },
          { to: '/blog', label: 'المدونة', color: 'bg-bred' },
          { to: '/personal', label: 'الملف الشخصي', color: 'bg-pgreen' },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`${item.color} text-white text-xl font-bold no-underline py-4 px-8 rounded-lg transition-opacity hover:opacity-80`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        {/* Company site */}
        <Route path="/company" element={<CompanyHome />} />
        <Route path="/company/services/:id" element={<ServicePage />} />
        <Route path="/company/projects/:id" element={<ProjectPage />} />

        {/* Blog site */}
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/posts" element={<PostsListPage />} />
        <Route path="/blog/posts/:id" element={<PostPage />} />
        <Route path="/blog/tags" element={<TagsPage />} />
        <Route path="/blog/tags/:tag" element={<TagPage />} />
        <Route path="/blog/categories" element={<CategoriesPage />} />
        <Route path="/blog/categories/:category" element={<CategoryPage />} />

        {/* Personal site */}
        <Route path="/personal" element={<PersonalHome />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
