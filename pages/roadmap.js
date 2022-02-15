import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Grow from './components/Grow';
import Head from 'next/head';

const Roadmap = () => {
    return (
        <div>
            <Head>
                <title>Minutecode Labs | Roadmap</title>
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
                            <img src="/Resources/Roadmap/home-roadmap.jpg" className="hidden lg:block object-cover w-full h-screen" />
                            <img src="/Resources/Mobile/Roadmap-mobile-hero.png" className="lg:hidden object-cover w-full h-auto" />
                        </div>
                    </div>

                    <div className="md:mx-36 relative bottom-100 mx-12">
                        <div className="text-white lg:text-f24 text-f14 Inter-Regular mt-12">
                            <p>Our mission</p>
                        </div>
                        <div className="hidden lg:block text-white text-f50 leading-f50 Inter-Regular tracking-wide mt-4">
                            <h1 className="drop-shadow-md">We envision becoming a full-service</h1>
                            <h1 className="drop-shadow-md">creative agency for home professionals</h1>
                        </div>
                        <div className="lg:hidden text-white text-f25 Inter-Regular tracking-wide mt-4">
                            <h1 className="drop-shadow-md"> We envision becoming</h1>
                            <h1 className="drop-shadow-md">a full-service creative</h1>
                            <h1 className="drop-shadow-md">agency for home</h1>
                            <h1 className="drop-shadow-md">professionals</h1>
                        </div>

                    </div>

                </div>
            </div>

            <div className="-mt-56">
            </div>

            <div className="md:mx-44 mx-10">
                <div className="flex lg:flex-row flex-col justify-center">
                    <div className="lg:w-1/4 lg:text-f16 text-f12 Inter-Regular">
                        <p className=''>Our roadmap</p>
                    </div>
                    <div className="lg:w-3/4 lg:text-f24 text-f14 Inter-Regular mt-6 lg:mt-0">
                        <h2>Delivering results through the power of design is just the</h2>
                        <h2>first step of our grand game plan for the construction</h2>
                        <h2>industry. We have a big vision for the years to come, that</h2>
                        <h2>can help home professionals gain the disruption they seek</h2>
                        <h2>in the connected world, at one place.</h2>
                        <br></br>
                        <h2>We will support building brands one at a time, from ground</h2>
                        <h2>up giving them the confidence and capability to scale their</h2>
                        <h2>brands even to the global levels.</h2>
                    </div>
                </div>
            </div>

            <div className="md:mx-44 mx-10 lg:mt-36 mt-24">
                <div className="flex lg:flex-row flex-col justify-center">
                    <div className="lg:w-1/4 lg:text-f16 text-f12 Inter-Regular">
                        <p className=''>Our game plan</p>
                    </div>
                    <div className="lg:w-3/4 lg:text-f24 text-f14 Inter-Regular mt-6 lg:mt-0">
                        <h2>Each side of the hexagon of our brand identity represents</h2>
                        <h2>a specific service we want to bring in as a core service.</h2>
                    </div>
                </div>
            </div>


            <div className='lg:mt-36 mt-20'>
                <img className='lg:block hidden h-auto w-full' src="/Resources/Roadmap/roadmap-desktop.jpg" alt="roadmap" />
                <img className='h-auto w-full lg:hidden' src="/Resources/Roadmap/roadmap-mobile.jpg" alt="roadmap" />
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-y-8 gap-y-4 lg:mx-28 lg:mt-28 mt-16 mx-10'>

                <div>
                    <h1 className='lg:text-f24 text-f14 text-mcl-gray'>Online Identity</h1>
                    <div className='lg:text-f24 text-f12 mt-4'>
                        <p>Setting your online presence</p>
                        <p>for success through creative</p>
                        <p><span className='text-mcl-blue'>Web Designing </span>that helps</p>
                        <p>you attract, speak to and</p>
                        <p>convert your dream clients.</p>
                    </div>
                </div>

                <div>
                    <h1 className='lg:text-f24 text-f14 text-mcl-gray'>Personality</h1>
                    <div className='lg:text-f24 text-f12 mt-4'>
                        <p>Giving you an identity that</p>
                        <p>tells your personality and</p>
                        <p>your values through</p>
                        <p><span className='text-mcl-blue'>Branding</span></p>

                    </div>
                </div>


                <div>
                    <h1 className='lg:text-f24 text-f14 text-mcl-gray'>Discoverability</h1>
                    <div className='lg:text-f24 text-f12 mt-4'>
                        <p>Giving your brand the upper</p>
                        <p>hand at being found online</p>
                        <p>through<span className='text-mcl-blue'> SEO.</span></p>
                    </div>
                </div>


                <div>
                    <h1 className='lg:text-f24 text-f14 text-mcl-gray'>Master Plan</h1>
                    <div className='lg:text-f24 text-f12 mt-4'>
                        <p>Helping you understand your</p>
                        <p>purpose and define your goals</p>
                        <p>through<span className='text-mcl-blue'> Strategy.</span></p>
                    </div>
                </div>

                <div>
                    <h1 className='lg:text-f24 text-f14 text-mcl-gray'>Attraction</h1>
                    <div className='lg:text-f24 text-f12 mt-4'>
                        <p>Helping you to penetrate</p>
                        <p>and attract your ideal</p>
                        <p>customers through<span className='text-mcl-blue'> Digital</span></p>
                        <p><span className='text-mcl-blue'>Marketing</span></p>
                    </div>
                </div>

                <div>
                    <h1 className='lg:text-f24 text-f14 text-mcl-gray'>Connectivity</h1>
                    <div className='lg:text-f24 text-f12 mt-4'>
                        <p>Helping you to go out to the world</p>
                        <p>and establish authentic connections</p>
                        <p>by bringing your next event to life</p>
                        <p>through<span className='text-mcl-blue'> Event planning.</span></p>
                    </div>
                </div>

            </div >

            <div>
                <Grow />
            </div>

            <div>
                <Footer />
            </div>
        </div >
    )
};

export default Roadmap;
