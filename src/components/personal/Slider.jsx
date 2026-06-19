import { useState } from 'react'

export default function Slider({ slides, renderSlide, reviewMode = false }) {
  const [pos, setPos] = useState(0)

  const prev = () => setPos((p) => (p === 0 ? slides.length - 1 : p - 1))
  const next = () => setPos((p) => (p === slides.length - 1 ? 0 : p + 1))

  return (
    <div className="relative">
      <div>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`fade-slide ${idx === pos ? 'block' : 'hidden'}`}
          >
            {renderSlide(slide)}
          </div>
        ))}
      </div>
      {/* Prev / Next buttons */}
      <div className="absolute top-0 bottom-0 my-auto h-[23px] z-[3] flex items-center justify-between w-full">
        <span className="px-5 cursor-pointer" onClick={next}>
          <i className={`fas fa-chevron-right text-[40px] ${reviewMode ? 'text-black' : 'text-white'}`} />
        </span>
        <span className={`cursor-pointer ${reviewMode ? 'px-[10px]' : 'px-5'}`} onClick={prev}>
          <i className={`fas fa-chevron-left text-[40px] ${reviewMode ? 'text-black' : 'text-white'}`} />
        </span>
      </div>
    </div>
  )
}
