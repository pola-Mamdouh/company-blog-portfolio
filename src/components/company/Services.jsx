import { Link } from 'react-router-dom'
import { services } from '../../data/company'

export default function Services() {
  return (
    <section id="services" className="section-container pt-[120px] pb-[50px] px-5">
      <div className="w-full max-w-site mx-auto flex flex-col items-center">
        <h2 className="text-center mt-0 text-[35px] relative mb-5 section-title">خدماتنا</h2>
        <h3 className="mt-0 text-cgray max-md:text-center">نقدم العديد من الخدمات والتقنيات المختلفة</h3>

        <div className="w-full flex flex-wrap mt-[50px]">
          {services.map((service) => (
            <div key={service.id} className="w-1/2 max-md:w-full flex mb-[50px]">
              <div className="w-[18%]">
                <i className={`${service.icon} text-[70px] max-md:text-[50px] text-cblue`} />
              </div>
              <div className="flex-1 max-lg:pr-[10px]">
                <Link
                  to={`/company/services/${service.id}`}
                  className="text-[25px] text-black font-bold no-underline transition-all duration-500 hover:text-cblue block"
                >
                  {service.title}
                </Link>
                <p className="text-[18px] mb-0 mt-[5px] max-w-[80%] max-md:max-w-full">{service.prev}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
