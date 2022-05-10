import React from 'react'

const General = () => {
  return (
    <form action="https://formspree.io/f/xwkyavqj" method="POST">

      <div className='flex lg:flex-row flex-col lg:space-x-5 mt-10'>
        <div className='grid gap-y-2 lg:w-1/2'>
          <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor="name3">Your Name*</label>
          <input className='w-full border-2 lg:h-16 h-14 p-2' type="text" name="name3-gen-inquiry" required />
        </div>
        <div className='grid gap-y-2 lg:w-1/2 mt-4 lg:mt-0'>
          <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor='email3'>Your Email*</label>
          <input className='w-full border-2 lg:h-16 h-14 p-2' type="email" id="email3" name="email3-gen-inquiry" required />
        </div>
      </div>
      <div className='mt-8 grid gap-y-2'>
        <label data-scroll className="lg:text-f16 text-f12 Inter-Regular">Tell us a bit about your what you are thinking*</label>
        <textarea placeholder='Project details, timeline and such' className='w-full border-2 p-2' rows={10} type="text" id="deets3" name="deets3" ></textarea>
      </div>

      <input data-scroll type="submit" value="Submit" className="Inter-SemiBold mt-10 text-gray-200 hover:cursor-pointer py-6 px-16 bg-mcl-blue lg:text-f20 text-f14 flex mx-auto lg:mx-0" />

    </form>
  )
}

export default General