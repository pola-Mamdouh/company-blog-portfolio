import { useState } from 'react'
import { skills } from '../../data/personal'

export default function Skills() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <div className="bg-white rounded-[5px] p-[15px_20px] min-h-[350px] w-full shadow-personal">
      <h2 className="font-bold m-0 mb-5 border-b border-[#d4d4d4] pb-[10px]">المهارات</h2>
      <div className="flex flex-wrap justify-between">
        {skills.map((skill, idx) => {
          const isLast2 = idx >= skills.length - 2
          return (
            <div
              key={skill.title}
              className={`flex items-center w-full md:w-[48%] sm:w-full ${!isLast2 ? 'mb-5' : ''} sm:mb-5 sm:last:mb-0`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="w-full flex flex-col">
                <div className="flex items-center justify-between">
                  <h2 className="m-0 text-[18px]">{skill.title}</h2>
                  <span className="font-bold">{skill.percent}</span>
                </div>
                <div className="relative w-full h-[15px] mt-[5px] bg-pgray">
                  <span
                    className="skill-bar-fill"
                    style={{
                      width: skill.percent,
                      backgroundColor: hoveredIdx === idx ? '#9bcab8' : skill.color,
                    }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
