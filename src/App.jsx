
function App() {

  return (
    <>
      <main>
        <section >
          <div className="container px-7 mx-auto">

            <div className=" pt-20 flex flex-col items-center mb-[4.5rem] md:mb-[6rem] ">
              <img src="/logo.svg" alt="" className="w-14 mb-8 md:w-[5.625rem] md:mb-10" />
              <h1 className="text-[1.375rem] leading-8 font-light text-light-gray mb-4 text-blue-1 md:text-5xl md:leading-[1.25em] ">We are launching <span className="text-dark-blue font-bold">soon!</span></h1>
              <h2 className="text-sm text-dark-blue mb-8 md:text-xl md:mb-10">Subscribe and get notified</h2>
              <form action="#" className="flex flex-col px-5 w-full md:max-w-[40rem] md:flex-row md:items-center md:gap-x-4 ">
                <input type="text" name="" id="" placeholder="Your email address…" className="mb-[10px] rounded-full placeholder:text-light-blue-2 border border-light-blue-1 leading-5 text-xs px-8 py-[10px] outline-none md:flex-1 md:text-xl md:leading-5 md:py-4 md:mb-0  w-full " />
                <button className="bg-light-blue-3 rounded-full  text-white leading-4 py-3 shadow-[0_5px_10px_2px] shadow-light-blue-3/20 text-xs md:px-[3.875rem] md:text-[1rem] md:py-5 md:shadow-none w-full md:w-auto ">Notify Me</button>
              </form>
            </div>

            <div className="w-full md:max-w-[40rem] mx-auto md:mb-[4.5rem] mb-[7.5rem] ">
              <img src="/illustration-dashboard.png" alt="" />
            </div>

            <div className="flex flex-col item-center ">

              <ul className="flex justify-center gap-x-3 mb-7">
                <li>
                  <a href="#" className="border border-light-blue-1 text-light-blue-3 flex items-center justify-center rounded-full text-sm w-8 h-8  " ><i class="fa-brands fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#" className="border border-light-blue-1 text-light-blue-3 flex items-center justify-center rounded-full text-sm w-8 h-8"><i class="fa-brands fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#" className="border border-light-blue-1 text-light-blue-3 flex items-center justify-center rounded-full text-sm w-8 h-8"><i class="fa-brands fa-instagram"></i></a>
                </li>
              </ul>

              <span className="text-light-gray text-center text-[10px] md:text-xs">© Copyright Ping. All rights reserved.</span>
            </div>

          </div>

        </section>
      </main>
    </>
  )
}

export default App
