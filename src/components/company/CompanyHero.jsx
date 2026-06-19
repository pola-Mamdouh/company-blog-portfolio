import { heroData } from '../../data/company'

export default function CompanyHero() {
  const scrollToServices = (e) => {
    e.preventDefault()
    const el = document.getElementById('services')
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="section-container pt-[100px] max-lg:px-5 px-[90px] pb-0 relative"
      style={{
        backgroundImage:
          'linear-gradient(rgb(99 99 99 / 60%), rgb(0 0 0 / 60%)), url("/images/company/hero.jpg")',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full max-w-site mx-auto min-h-[550px] flex flex-col items-center justify-center">
        <h1 className="mb-[15px] mt-0 text-[70px] max-lg:text-[45px] max-md:text-[36px] font-bold text-white text-center">
          {heroData.title}
        </h1>
        <h3 className="m-0 text-center text-white text-[22px] max-lg:text-[20px] max-md:text-[18px] leading-[35px]">
          {heroData.content}
        </h3>
        <a
          href="#services"
          onClick={scrollToServices}
          className="absolute bottom-[45px] text-[30px] text-cblue"
        >
          <i className="fas fa-chevron-down" />
        </a>
      </div>
    </section>
  )
}
