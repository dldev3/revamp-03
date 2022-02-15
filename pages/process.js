import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Grow from './components/Grow';
import Head from 'next/head';

const Process = () => {
    return (
        <div>
            <Head>
                <title>Minutecode Labs | Process</title>
                <meta name="description" content="Best web development agency in USA, Canada and Europe" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative -top-5 z-10">
                <Header></Header>
            </div>

            {/* Landing page */}
            <div>
                <div>
                    <div className="relative -top-33 z-0">
                        <div className="">
                            <img src="/Resources/Home/home-process.jpg" className="object-cover w-full h-screen" />
                        </div>
                    </div>

                    <div className="md:mx-36 relative bottom-100">
                        <div className="text-white text-f24 Inter-Regular mt-12">
                            <p>Our Strength</p>
                        </div>
                        <div className="text-white text-f50 leading-f50 Inter-Regular tracking-wide mt-4">
                            <h1 className="drop-shadow-md">One of our key strengths lie in having</h1>
                            <h1 className="drop-shadow-md"> a clear cut process that delivers results</h1>
                        </div>

                    </div>

                </div>
            </div>

            <div className="-mt-56">
            </div>


            <div className="md:mx-44">
                <div className="flex flex-row justify-center">
                    <div className="w-1/4 text-f16 Inter-Regular">
                        <p className=''>Our process</p>
                    </div>
                    <div className="w-3/4 text-f24 Inter-Regular">
                        <h2>Using our experience and new founded learnings, we have</h2>
                        <h2>refined a process that helps to understand where you are</h2>
                        <h2>right now, where you want to go, and the best way to get</h2>
                        <h2>there.</h2>
                        <br></br>
                        <h2>We kept you as the center when we created our process</h2>
                        <h2>to ensure that you will easily understand what's going on,</h2>
                        <h2>take part and fall in love with the process (and your brand),</h2>
                        <h2>and get the best results from our collective efforts.</h2>
                    </div>
                </div>
            </div>


            <div className="md:mx-44 mt-36">
                <div className="flex flex-row justify-center">
                    <div className="w-1/4 text-f16 Inter-Regular">
                        <p className=''>Process approach</p>
                    </div>
                    <div className="w-3/4 text-f24 Inter-Regular">
                        <div className='grid grid-cols-2 gap-y-6'>
                            <div>
                                <div><p className='Inter-SemiBold text-f24 text-mcl-blue'>01 Discover</p></div>
                                <div className='md:ml-10 mt-2 Inter-regular text-f24'>
                                    <p>Our process gathers research,</p>
                                    <p>inputs, thoughts & ideas, audits,</p>
                                    <p>and experiences to understand</p>
                                    <p>the current status of a brand.</p>
                                </div>
                            </div>
                            <div>
                                <div><p className='Inter-SemiBold text-f24 text-mcl-blue'>02 Difine</p></div>
                                <div className='md:ml-10 mt-2 Inter-regular text-f24'>
                                    <p>We run collaborative work to</p>
                                    <p>understand and to refine a</p>
                                    <p>brand's business goals,</p>
                                    <p>customers, and desired future</p>
                                    <p>state.</p>
                                </div>
                            </div>
                            <div>
                                <div><p className='Inter-SemiBold text-f24 text-mcl-blue'>03 Develop</p></div>
                                <div className='md:ml-10 mt-2 Inter-regular text-f24'>
                                    <p>From the new founded insights,</p>
                                    <p>we create a road map that will</p>
                                    <p>take a brand from it's current</p>
                                    <p>state to the desired future state.</p>
                                </div>
                            </div>
                            <div>
                                <div><p className='Inter-SemiBold text-f24 text-mcl-blue'>04 Deliver</p></div>
                                <div className='md:ml-10 mt-2 Inter-regular text-f24'>
                                    <p>We develop the solution for the</p>
                                    <p>measurements & guidelines we</p>
                                    <p>got from the roadmap, which will</p>
                                    <p>be outputted as a website.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-12'>
                <div className="lg:mt-24 mt-8">
                    <div className="lg:mx-2">

                        <div><h1 className="text-f25 lg:text-f50 Inter-Regular text-center">Case Study</h1></div>

                        <div className="mt-8 grid lg:grid-cols-3 grid-cols-1">
                            <div>
                                <img className="object-cover w-full lg:h-72 h-auto" src="/Resources/Home/case-1.jpg" alt="case-1" />
                                <p className="hidden lg:block mt-2 text-center text-f24 Inter-Regular text-gray-700">Lightin Interiors</p>
                            </div>
                            <div>
                                <img className="object-cover w-full lg:h-72 h-auto" src="/Resources/Home/case-2.jpg" alt="case-1" />
                                <p className="hidden lg:block mt-2 text-center text-f24 Inter-Regular text-gray-700">Flexy Archi</p>
                            </div>
                            <div>
                                <img className="object-cover w-full lg:h-72 h-auto" src="/Resources/Home/case-3.jpg" alt="case-1" />
                                <p className="hidden lg:block mt-2 text-center text-f24 Inter-Regular text-gray-700">Bloom Beauty</p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <div>
                <Grow />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
};

export default Process;
