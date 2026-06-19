import { coverData } from '../../data/personal'

export default function Cover() {
  return (
    <section className="w-full py-[40px] px-5 bg-pgreen">
      <div className="w-full max-w-site mx-auto flex items-center bg-white p-[6px] rounded-[5px] sm:flex-col sm:p-5">
        <div className="w-[250px] h-[250px] relative rounded-[5px] flex-shrink-0">
          <img
            src="/images/personal/profile-pic.jpg"
            alt="Profile Picture"
            className="w-full h-full object-cover rounded-[5px]"
          />
        </div>
        <div className="flex-1 px-[30px] relative sm:px-0 sm:w-full">
          <h1 className="mt-0 text-[36px] sm:text-center sm:mt-5 sm:mb-0">{coverData.name}</h1>
          <p className="text-[18px] leading-[33px] mb-0">{coverData.description}</p>
        </div>
      </div>
    </section>
  )
}
