export default function CompanyFooter() {
  return (
    <footer className="w-full py-[25px] px-5 bg-csemib">
      <div className="w-full max-w-site mx-auto flex flex-row-reverse max-md:flex-col-reverse max-md:flex-wrap">
        <div className="w-1/2 max-md:w-full flex items-center justify-end max-md:justify-center">
          <p className="m-0 text-[18px] text-white">
            جميع الحقوق محفوظة &copy; أكاديمية حسوب
          </p>
        </div>
        <div className="w-1/2 max-md:w-full flex items-center justify-start max-md:justify-center max-md:mb-[23px]">
          <ul className="flex justify-start items-center m-0 p-0 list-none">
            {[
              { icon: 'fab fa-facebook-square', href: '#' },
              { icon: 'fab fa-twitter-square', href: '#' },
              { icon: 'fab fa-linkedin', href: '#' },
            ].map((item) => (
              <li key={item.icon} className="ml-[15px] first:ml-0">
                <a
                  href={item.href}
                  className="flex text-white no-underline transition-all duration-500 hover:text-cblue"
                >
                  <i className={`${item.icon} text-[29px]`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
