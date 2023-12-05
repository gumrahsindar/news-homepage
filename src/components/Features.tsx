export default function Features() {
  return (
    <section id='features' className='mb-[72px] mt-14'>
      {/* features container */}
      <div className='grid gap-6 md:gap-8'>
        <img className='md:col-span-2 md:hidden' src='/images/image-web-3-mobile.jpg' alt='features image for mobile' />
        <img
          className='hidden md:col-span-2 md:block'
          src='/images/image-web-3-desktop.jpg'
          alt='features image for mobile'
        />
        <div className='row-start-2 grid md:col-span-2'>
          <div className='flex flex-col justify-between space-y-8 md:flex-row md:space-y-0'>
            <h1 className='text-3xl font-extrabold text-dark-blue md:max-w-xs md:text-4xl'>
              The Bright Future of Web 3.0?
            </h1>
            <div className='grid gap-8'>
              <p className='max-w-lg md:max-w-xs'>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the
                hands of the people. But is it really fulfilling its promise?
              </p>
              <button className='w-fit cursor-pointer bg-soft-red px-6 py-2 text-sm  uppercase tracking-[4px] text-off-white duration-200 hover:bg-dark-blue'>
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className='mt-12 grid gap-4 bg-dark-blue px-6 py-8 md:col-start-3 md:row-span-2 md:mt-0'>
          <h2 className='text-2xl font-bold  text-soft-orange md:text-3xl'>New</h2>
          <div className=''>
            <h3 className='text-xl font-bold text-off-white'>Hydrogen VS Electric Cars</h3>
            <p className='mt-2 max-w-xs text-grayish-blue'>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className='border-t-2 border-grayish-blue' />
          <div className=''>
            <h3 className='text-xl font-bold text-off-white'>The Downsides of AI Artistry</h3>
            <p className='mt-2 max-w-xs text-grayish-blue'>
              What are the possible adverse effects of on-demand AI image generation?
            </p>
          </div>
          <div className='border-t-2 border-grayish-blue' />
          <div className=''>
            <h3 className='text-xl font-bold text-off-white'>Is VC Funding Drying Up?</h3>
            <p className='mt-2 max-w-xs text-grayish-blue'>
              Private funding by VC firms is down 50% YOY. We take a look at what that means.
            </p>
          </div>
          <div className='border-b-0 border-gray-200'></div>
        </div>
      </div>
    </section>
  )
}
