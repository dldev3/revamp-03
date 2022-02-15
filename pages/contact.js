import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from 'next/head';


const Contact = () => {
    return (
        <div>
            <Head>
                <title>Minutecode Labs | Contact Us</title>
                <meta name="description" content="Best web development agency in USA, Canada and Europe" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='bg-hero-dark'>

                <div>
                    <Header />
                </div>

                <div className='md:mx-36 text-white lg:mt-40 py-12 mx-10'>
                    <p className='Inter-Regular lg:text-f24 text-f14'>Say hello</p>
                    <div className='hidden lg:block Inter-Medium text-f50'>
                        <h1>Start a project? Have a call?</h1>
                        <h1>Come, let's grow together</h1>
                    </div>
                    <div className='lg:hidden Inter-Medium text-f25 mt-2'>
                        <h1>Start a project? Have</h1>
                        <h1>a call? Come, let's grow</h1>
                        <h1>together</h1>
                    </div>
                </div>

            </div>

            {/* form */}
            <div className="px-12 py-6 lg:mx-44">
                <form>

                    <div className='flex lg:felx-row flex-col lg:space-x-5'>
                        <div className='grid gap-y-2 lg:w-1/2'>
                            <label className="text-f16" htmlFor="name">Your Name*</label>
                            <input className='w-full border-2 h-16 p-2' type="text" id="name" name="name" required />
                        </div>
                        <div className='grid gap-y-2 lg:w-1/2 mt-4 lg:mt-0'>
                            <label className="text-f16" htmlFor='email'>Your Email*</label>
                            <input className='w-full border-2 h-16 p-2' type="email" id="email" name="email" required />
                        </div>
                    </div>

                    <div className='grid gap-y-2 mt-10'>
                        <label className="text-f16" htmlFor='thinking'>What are you thinking?</label>
                        <select className="w-full border-2 h-16 p-2">
                            <option value="">Start a project</option>
                            <option value="opt-1">Start a project</option>
                            <option value="opt-2">Location 2</option>
                            <option value="opt-3">Location 3</option>
                        </select>
                    </div>

                    <div className='flex lg:flex-row flex-col lg:space-x-5 mt-10'>
                        <div className='grid gap-y-2 lg:w-1/2'>
                            <label className="text-f16" htmlFor="name">Your company/brand name*</label>
                            <input className='w-full border-2 h-16 p-2' type="text" id="company" name="company" />
                        </div>
                        <div className='grid gap-y-2 lg:w-1/2 mt-4 lg:mt-0'>
                            <label className="text-f16" htmlFor='email'>Current website (Mention No if applicable)</label>
                            <input className='w-full border-2 h-16 p-2' type="text" id="website" name="website" />
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col lg:space-x-5 mt-10'>
                        <div className='grid gap-y-2 lg:w-1/2'>
                            <label className="text-f16" htmlFor="name">Your readiness of investment into growing your business*</label>
                            <select className="w-full border-2 h-16 p-2">
                                <option value="opt-1">$10,000 - $18,000</option>
                                <option value="opt-2">Below $10,000</option>
                                <option value="opt-3">$18,000-$25,000</option>
                                <option value="opt-4">$25,000 Above</option>
                            </select>
                        </div>
                        <div className='grid gap-y-2 lg:w-1/2 mt-4 lg:mt-0'>
                            <label className="text-f16" htmlFor='email'>How did you find us?</label>
                            <select className="w-full border-2 h-16 p-2">
                                <option value="opt-1">On Google</option>
                                <option value="opt-2">LinkedIn</option>
                                <option value="opt-3">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className='mt-10 grid gap-y-2'>
                        <label className="text-f16" htmlFor='email'>Tell us a bit about your what you are thinking*</label>
                        <textarea placeholder='Project details, timeline and such' className='w-full border-2 p-2' rows={10} type="text" id="deets" name="deets" ></textarea>
                    </div>

                    <input type="submit" value="Submit" className="mt-10 text-gray-200 hover:cursor-pointer py-6 px-16 bg-mcl-blue text-f20" />


                </form>
            </div>
            {/* form-end */}



            <div className='mt-60'>
                <Footer />
            </div>






        </div>
    )
};

export default Contact;
