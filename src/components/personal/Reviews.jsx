import { reviews } from '../../data/personal'
import Slider from './Slider'

export default function Reviews() {
  return (
    <div className="bg-white rounded-[5px] p-[15px_20px] min-h-[350px] w-full shadow-personal">
      <h2 className="font-bold m-0 mb-5 border-b border-[#d4d4d4] pb-[10px]">آراء العملاء</h2>
      <Slider
        slides={reviews}
        reviewMode
        renderSlide={(review) => (
          <div className="h-[350px] px-[50px] flex justify-center items-center flex-col">
            <p className="relative m-0 text-[18px] leading-[28px] pr-5 review-quote">
              {review.content}
            </p>
            <h3 className="mt-[10px] mb-0 text-[20px]">{review.title}</h3>
          </div>
        )}
      />
    </div>
  )
}
