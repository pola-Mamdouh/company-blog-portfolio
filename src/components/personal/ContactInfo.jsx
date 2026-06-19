import { contact } from '../../data/personal'

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-[5px] p-[15px_20px] min-h-[350px] w-full shadow-personal">
      <h2 className="font-bold m-0 mb-5 border-b border-[#d4d4d4] pb-[10px]">تواصل معي</h2>
      <p className="text-[18px] text-pdark">يمكنك التواصل معي عبر الوسائل الآتية</p>
      {contact.map((item) => (
        <div key={item.title} className="flex flex-col mb-5 last:mb-0">
          <div className="w-full flex items-center flex-wrap mb-[10px]">
            <i className={`${item.icon} ml-[10px] text-psec`} />
            <h3 className="m-0">{item.title}</h3>
          </div>
          <div>
            <p className="m-0 leading-[25px] text-[18px]">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
