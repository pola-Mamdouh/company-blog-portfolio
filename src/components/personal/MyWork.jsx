import { work } from '../../data/personal'
import Slider from './Slider'

export default function MyWork() {
  return (
    <div className="bg-white rounded-[5px] p-[15px_20px] min-h-[350px] w-full shadow-personal">
      <h2 className="font-bold m-0 mb-5 border-b border-[#d4d4d4] pb-[10px]">أعمالي السابقة</h2>
      <Slider
        slides={work}
        renderSlide={(slide) => (
          <div className="w-full h-[500px]">
            <img src={slide.src} alt="معرض الاعمال" className="w-full h-full object-cover" />
          </div>
        )}
      />
    </div>
  )
}
