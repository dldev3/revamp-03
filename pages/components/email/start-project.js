import React from 'react'

const StartProject = () => {
    return (
        <form action="https://formspree.io/f/xwkyavqj" method="POST">

            <div className='flex lg:flex-row flex-col lg:space-x-5 mt-10'>
                <div className='grid gap-y-2 lg:w-1/2'>
                    <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor="name1">Your Name*</label>
                    <input className='w-full border-2 lg:h-16 h-14 p-2' type="text" name="name1-start-project" required />
                </div>
                <div className='grid gap-y-2 lg:w-1/2 mt-4 lg:mt-0'>
                    <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor='email1'>Your Email*</label>
                    <input className='w-full border-2 lg:h-16 h-14 p-2' type="email" id="email1" name="email1-start-project" required />
                </div>
            </div>

            <div className='flex lg:flex-row flex-col lg:space-x-5 mt-8'>
                <div className='grid gap-y-2 lg:w-1/2'>
                    <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor="company">Your company/brand name*</label>
                    <input className='w-full border-2 lg:h-16 h-14 p-2' type="text" id="company1" name="company1" />
                </div>
                <div className='grid gap-y-2 lg:w-1/2 mt-4 lg:mt-0'>

                    <label data-scroll for="budget" className="lg:text-f16 text-f12 Inter-Regular" htmlFor="budget">Your readiness of investment into growing your business*</label>
                    <select name="budget1" id="budget1" className="w-full border-2 lg:h-16 h-14 p-2 hover:cursor-pointer">
                        <option value="Choose your option">Choose your option</option>
                        <option value="$10,000-$20,000">$10,000 - $20,000</option>
                        <option value="$20,000-$30,000">$20,000 - $30,000</option>
                        <option value="$30,000+">$30,000+</option>
                    </select >
                </div>
            </div>

            <div className='mt-8 grid gap-y-2'>
                <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor='deets'>Tell us a bit about your what you are thinking*</label>
                <textarea placeholder='Project details, timeline and such' className='w-full border-2 p-2' rows={10} type="text" id="deets1" name="deets1" ></textarea>
            </div>

            <div className='grid gap-y-2 mt-5 lg:mt-10'>
                <label data-scroll for="find" className="lg:text-f16 text-f12 Inter-Regular" htmlFor='find1'>How did you find us?</label>
                <select name="find1" id="find1" className="w-full border-2 lg:h-16 h-14 p-2 hover:cursor-pointer">
                    <option value="On-Google">On Google</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Referral">Referral or Recommendation</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <input data-scroll type="submit" value="Submit" className="Inter-SemiBold mt-10 text-gray-200 hover:cursor-pointer py-6 px-16 bg-mcl-blue lg:text-f20 text-f14 flex mx-auto lg:mx-0" />


        </form>
    )
}

export default StartProject