import CompanyNavbar from '../../components/company/CompanyNavbar'
import CompanyHero from '../../components/company/CompanyHero'
import Services from '../../components/company/Services'
import ProjectsSection from '../../components/company/ProjectsSection'
import ContactUs from '../../components/company/ContactUs'
import CompanyFooter from '../../components/company/CompanyFooter'

export default function CompanyHome() {
  return (
    <div className="company-site">
      <CompanyNavbar isLandingPage />
      <CompanyHero />
      <Services />
      <ProjectsSection />
      <ContactUs />
      <CompanyFooter />
    </div>
  )
}
