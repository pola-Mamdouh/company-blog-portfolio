import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../../data/company'
import CompanyNavbar from '../../components/company/CompanyNavbar'
import CompanyFooter from '../../components/company/CompanyFooter'

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const [lightboxSrc, setLightboxSrc] = useState(null)

  if (!project) {
    return (
      <div className="company-site">
        <CompanyNavbar />
        <div className="pt-[120px] px-5 text-center text-[24px]">المشروع غير موجود</div>
        <CompanyFooter />
      </div>
    )
  }

  const galleryImages = [project.image2, project.image3, project.image4, project.image5]

  return (
    <div className="company-site">
      <CompanyNavbar />

      {/* Project hero */}
      <div className="pt-[100px] px-5 pb-0 bg-cblue">
        <div className="w-full max-w-site mx-auto flex flex-col items-center justify-center min-h-[300px]">
          <h1 className="text-white text-center">{project.title}</h1>
        </div>
      </div>

      {/* Project content */}
      <div className="pt-[70px] pb-[50px] px-5">
        <div className="w-full max-w-site mx-auto">
          <div
            className="[&_p]:text-[22px] [&_p]:text-justify [&_p]:mt-0 [&_p]:mb-[30px] [&_ul]:p-0 [&_ul]:list-none [&_ul]:mt-0 [&_ul]:mb-[30px] [&_ul_li]:text-[20px] [&_ul_li]:mb-1"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          <h2>صور المشروع</h2>

          {/* Gallery */}
          <div className="flex sm:flex-wrap -mx-[5px]">
            {/* Main large image */}
            <img
              src={project.image1}
              className="project-image w-1/2 sm:w-full h-[400px] object-cover p-[5px] cursor-pointer"
              alt="project"
              onClick={() => setLightboxSrc(project.image1)}
            />
            {/* 4 small images grid */}
            <div className="w-1/2 sm:w-full flex flex-wrap">
              {galleryImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="project-image w-1/2 sm:w-full h-[200px] sm:h-[400px] object-cover p-[5px] cursor-pointer"
                  alt="project"
                  onClick={() => setLightboxSrc(src)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={`lightbox ${lightboxSrc ? 'lightbox-open' : ''}`}
        onClick={() => setLightboxSrc(null)}
      >
        <div className="relative w-full max-w-site mx-auto h-full flex items-center">
          <i
            className="far fa-times-circle text-[35px] absolute top-0 left-0 right-0 mx-auto text-white cursor-pointer w-max"
          />
          {lightboxSrc && (
            <img
              src={lightboxSrc}
              alt="project"
              className="h-[610px] max-w-[720px] w-full object-contain mx-auto"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      </div>

      <CompanyFooter />
    </div>
  )
}
