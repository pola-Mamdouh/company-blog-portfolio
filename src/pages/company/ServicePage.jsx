import { useParams } from 'react-router-dom'
import { services } from '../../data/company'
import CompanyNavbar from '../../components/company/CompanyNavbar'
import CompanyFooter from '../../components/company/CompanyFooter'

export default function ServicePage() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  if (!service) {
    return (
      <div className="company-site">
        <CompanyNavbar />
        <div className="pt-[120px] px-5 text-center text-[24px]">الخدمة غير موجودة</div>
        <CompanyFooter />
      </div>
    )
  }

  return (
    <div className="company-site">
      <CompanyNavbar />

      {/* Service header */}
      <div
        className="pt-[100px] px-5 pb-0 flex flex-col items-center justify-center min-h-[420px] bg-cblue"
      >
        <i className={`${service.icon} text-[80px] text-white`} />
        <h1 className="text-white mt-[15px] mb-0 text-center sm:text-center">{service.title}</h1>
      </div>

      {/* Service content */}
      <div className="py-[50px] px-5 w-full">
        <div
          className="w-full max-w-site mx-auto text-[22px] leading-[34px] [&_ul]:p-0 [&_ul]:list-none [&_ul]:mt-0 [&_ul]:mb-[30px] [&_ul_li]:text-[20px] [&_ul_li]:mb-1 [&_p]:text-[22px] [&_p]:leading-[34px]"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />
      </div>

      <CompanyFooter />
    </div>
  )
}
