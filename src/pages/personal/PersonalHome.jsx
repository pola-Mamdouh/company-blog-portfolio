import Cover from '../../components/personal/Cover'
import PersonalInfo from '../../components/personal/PersonalInfo'
import Learning from '../../components/personal/Learning'
import Skills from '../../components/personal/Skills'
import MyWork from '../../components/personal/MyWork'
import Reviews from '../../components/personal/Reviews'
import ContactInfo from '../../components/personal/ContactInfo'
import PersonalFooter from '../../components/personal/PersonalFooter'

export default function PersonalHome() {
  return (
    <div className="personal-site">
      <Cover />

      <div className="w-full py-[50px] px-5">
        <div className="w-full max-w-site mx-auto">
          {/* Row 1: Personal Info + Learning */}
          <div className="flex flex-wrap justify-between mb-[45px] sm:mb-0">
            <div className="w-[48%] sm:w-full sm:mb-[30px]">
              <PersonalInfo />
            </div>
            <div className="w-[48%] sm:w-full sm:mb-[30px]">
              <Learning />
            </div>
          </div>

          {/* Row 2: Skills (full width) */}
          <div className="flex flex-wrap justify-between mb-[45px] sm:mb-0">
            <div className="w-full sm:mb-[30px]">
              <Skills />
            </div>
          </div>

          {/* Row 3: My Work (full width) */}
          <div className="flex flex-wrap justify-between mb-[45px] sm:mb-0">
            <div className="w-full sm:mb-[30px]">
              <MyWork />
            </div>
          </div>

          {/* Row 4: Reviews + Contact */}
          <div className="flex flex-wrap justify-between">
            <div className="w-[48%] sm:w-full sm:mb-[30px]">
              <Reviews />
            </div>
            <div className="w-[48%] sm:w-full">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>

      <PersonalFooter />
    </div>
  )
}
