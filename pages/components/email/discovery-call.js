import React from 'react'

const DiscoveryCall = () => {
    return (
        <form action="https://formspree.io/f/xwkyavqj" method="POST">

            <div className='flex lg:flex-row flex-col lg:space-x-5 mt-10'>
                <div className='grid gap-y-2 lg:w-1/2'>
                    <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor="name2">Your Name*</label>
                    <input className='w-full border-2 lg:h-16 h-14 p-2' type="text" name="name2-discovery-call" required />
                </div>
                <div className='grid gap-y-2 lg:w-1/2 mt-4 lg:mt-0'>
                    <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor='email2'>Your Email*</label>
                    <input className='w-full border-2 lg:h-16 h-14 p-2' type="email" id="email2" name="email2-discovery-call" required />
                </div>
            </div>

            <div className='flex lg:flex-row flex-col lg:space-x-5 mt-10'>
                <div className='grid gap-y-2 lg:w-1/2'>
                    <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor="company2">Your company/brand name*</label>
                    <input className='w-full border-2 lg:h-16 h-14 p-2' type="text" id="company2" name="company2" />
                </div>
                <div className='grid gap-y-2 lg:w-1/2 mt-4 lg:mt-0'>
                    <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor='website2'>Current website (Mention No if applicable)</label>
                    <input className='w-full border-2 lg:h-16 h-14 p-2' type="text" id="website2" name="website2" />
                </div>
            </div>

            <div className='flex lg:flex-row flex-col lg:space-x-5 mt-10'>
                <div className='grid gap-y-2 lg:w-1/2'>
                    <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor="prefer-meeting">What do you prefer for the meeting</label>
                    <select name="prefer-meeting" id="prefer-meeting" className="w-full border-2 lg:h-16 h-14 p-2 hover:cursor-pointer">
                        <option value="Choose-your-option">Choose your option</option>
                        <option value="g-meet">Google Meet</option>
                        <option value="Zoom">Zoom</option>
                    </select >
                </div >

                <div className='grid gap-y-2 lg:w-1/2 mt-4 lg:mt-0'>
                    <label data-scroll for="find2" className="lg:text-f16 text-f12 Inter-Regular" htmlFor='find2'>How did you find us?</label>
                    <select name="find2" id="find2" className="w-full border-2 lg:h-16 h-14 p-2 hover:cursor-pointer">
                        <option value="On-Google">On Google</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Referral">Referral or Recommendation</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div >

            <div className='mt-10 grid gap-y-2'>
                <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor='email'>Tell us a bit about your what you are thinking*</label>
                <textarea placeholder='Anything els we should know prior to our call' className='w-full border-2 p-2' rows={10} type="text" id="deets2" name="deets2" ></textarea>
            </div>

            <input data-scroll type="submit" value="Submit" className="Inter-SemiBold mt-10 text-gray-200 hover:cursor-pointer py-6 px-16 bg-mcl-blue lg:text-f20 text-f14 flex mx-auto lg:mx-0" />


        </form>
    )
}

export default DiscoveryCall