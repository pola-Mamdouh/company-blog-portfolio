import { Link } from 'react-router-dom'
import { projects } from '../../data/company'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-container pt-[70px] pb-[50px] px-5">
      <div className="w-full max-w-site mx-auto flex flex-col items-center">
        <h2 className="text-center mt-0 text-[35px] relative mb-5 section-title">معرض الأعمال</h2>
        <h3 className="mt-0 text-cgray">أحدث الأعمال التى قمنا بتنفيذها</h3>

        <div className="mt-[50px] w-full">
          <div className="flex flex-wrap -mr-[21px] -ml-[21px]">
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-1/3 max-lg:w-1/2 max-md:w-full px-5 mb-[40px]"
              >
                <div className="bg-white p-[10px] rounded-[5px] shadow-project transition-all duration-500 hover:shadow-project-hover">
                  <div className="block relative h-[250px] overflow-hidden rounded-[5px] mb-[25px]">
                    <Link to={`/company/projects/${project.id}`}>
                      <img
                        src={project.thumb}
                        alt="project"
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </div>
                  <Link
                    to={`/company/projects/${project.id}`}
                    className="inline-block no-underline font-bold text-[22px] text-black transition-all duration-500 hover:text-cblue"
                  >
                    {project.title}
                  </Link>
                  <p className="text-[18px] leading-[25px]">
                    {project.summary.substring(0, 60)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
