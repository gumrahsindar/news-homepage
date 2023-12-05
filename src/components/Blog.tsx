export default function Blog() {
  return (
    <section id='blog' className='mt-16 md:mt-20'>
      {/* blog container */}
      <div className='flex flex-col justify-between space-y-8 md:flex-row md:space-x-6 md:space-y-0'>
        {/* blog-1 */}
        <div className='flex space-x-6 '>
          <div>
            <img className='h-32 w-[120px] md:w-auto' src='/images/image-retro-pcs.jpg' alt='retro pcs image' />
          </div>
          <div className='flex flex-col justify-between '>
            <span className='text-2xl font-bold text-grayish-blue'>01</span>
            <h3 className='cursor-pointer text-lg font-extrabold text-dark-blue duration-200 hover:text-soft-red'>
              Reviving Retro PCs
            </h3>
            <p className='text-dark-grayish-blue md:max-w-[23ch]'>
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        {/* blog-2 */}
        <div className='flex space-x-6'>
          <div>
            <img className='h-32' src='/images/image-top-laptops.jpg' alt='retro pcs image' />
          </div>
          <div className='flex flex-col justify-between'>
            <span className='text-2xl font-bold text-grayish-blue'>02</span>
            <h3 className='cursor-pointer text-lg font-extrabold text-dark-blue duration-200 hover:text-soft-red'>
              Top 10 Laptops of 2022
            </h3>
            <p className='text-dark-grayish-blue md:max-w-[23ch]'>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        {/* blog-3 */}
        <div className='flex space-x-6'>
          <div>
            <img className='h-32 w-28' src='/images/image-gaming-growth.jpg' alt='retro pcs image' />
          </div>
          <div className='flex flex-col justify-between'>
            <span className='text-2xl font-bold text-grayish-blue'>03</span>
            <h3 className='cursor-pointer text-lg font-extrabold text-dark-blue duration-200 hover:text-soft-red'>
              The Growth of Gaming
            </h3>
            <p className='text-dark-grayish-blue md:max-w-[23ch]'>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
