export default function ContactUs() {
  return (
    <div id="contact-us" className="section-container pt-[100px] pb-[50px] px-5">
      <div className="w-full max-w-site mx-auto flex flex-col">
        <h2 className="text-center mt-0 text-[35px] relative mb-5 section-title">تواصل معنا</h2>

        <div className="flex flex-row-reverse mt-[70px] max-lg:flex-col-reverse max-lg:flex-wrap">
          {/* Contact form */}
          <div className="w-1/2 max-lg:w-full pr-[25px] max-lg:pr-0 max-lg:mt-[45px]">
            <form className="flex flex-col">
              <label className="flex flex-col">
                <span className="text-[18px] mb-[15px]">الاسم</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="h-[42px] border-none bg-[#eaeaea] mb-[20px] px-5 text-[18px] rounded-[5px] outline-none"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-[18px] mb-[15px]">البريد الإلكتروني</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="h-[42px] border-none bg-[#eaeaea] mb-[20px] px-5 text-[18px] rounded-[5px] outline-none"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-[18px] mb-[15px]">الرسالة</span>
                <textarea
                  cols="30"
                  rows="15"
                  required
                  className="border-none bg-[#eaeaea] p-5 text-[18px] rounded-[5px] resize-none outline-none"
                />
              </label>
              <button
                type="submit"
                className="font-tajawal py-[10px] px-[5px] border-none mt-5 bg-cblue text-white text-[18px] font-bold rounded-[5px] cursor-pointer"
              >
                إرسال
              </button>
            </form>
          </div>

          {/* Map + info */}
          <div className="w-1/2 max-lg:w-full pl-[25px] max-lg:pl-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1788705042555!2d55.272!3d25.197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzQ5LjIiTiA1NcKwMTYnMTkuMiJF!5e0!3m2!1sen!2s!4v1619000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
            />
            <div className="mt-[38px]">
              {[
                {
                  icon: 'fas fa-map-marker-alt',
                  label: 'العنوان',
                  text: '1 بوليفارد الشيخ محمد بن راشد - وسط مدينة دبي - دبي',
                },
                { icon: 'fas fa-envelope', label: 'البريد الإلكتروني', text: 'example@example.com' },
                { icon: 'fas fa-phone', label: 'الهاتف', text: '00 00000 000000' },
              ].map((item) => (
                <div key={item.label} className="mb-5 last:mb-0">
                  <span className="flex items-center">
                    <i className={`${item.icon} text-cblue ml-[5px] text-[18px]`} />
                    <b className="text-[20px]">{item.label}</b>
                  </span>
                  <h3 className="mt-[10px] mb-0 text-[19px] font-normal">{item.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
