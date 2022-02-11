import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Roadmap/Landing';
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
                <Landing></Landing>
            </div>

            <div className="-mt-56">
            </div>

            <div className="md:mx-44">
                <div className="flex flex-row justify-center">
                    <div className="w-1/4 text-f16 Inter-Regular">
                        <p className=''>Our roadmap</p>
                    </div>
                    <div className="w-3/4 text-f24 Inter-Regular">
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

            <div className="md:mx-44 mt-36">
                <div className="flex flex-row justify-center">
                    <div className="w-1/4 text-f16 Inter-Regular">
                        <p className=''>Our game plan</p>
                    </div>
                    <div className="w-3/4 text-f24 Inter-Regular">
                        <h2>Each side of the hexagon of our brand identity represents</h2>
                        <h2>a specific service we want to bring in as a core service.</h2>
                    </div>
                </div>
            </div>


            <div className='mt-36'>
                <img className='h-auto w-full' src="/Resources/Roadmap/roadmap-desktop.jpg" alt="roadmap" />
            </div>

            <div className='grid grid-cols-3 gap-y-8 md:mx-28 mt-28'>

                <div>
                    <h1 className='text-f24 text-mcl-gray'>Online Identity</h1>
                    <div className='text-f24 mt-4'>
                        <p>Setting your online presence</p>
                        <p>for success through creative</p>
                        <p><span className='text-mcl-blue'>Web Designing </span>that helps</p>
                        <p>you attract, speak to and</p>
                        <p>convert your dream clients.</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-f24 text-mcl-gray'>Personality</h1>
                    <div className='text-f24 mt-4'>
                        <p>Giving you an identity that</p>
                        <p>tells your personality and</p>
                        <p>your values through</p>
                        <p><span className='text-mcl-blue'>Branding</span></p>

                    </div>
                </div>


                <div>
                    <h1 className='text-f24 text-mcl-gray'>Discoverability</h1>
                    <div className='text-f24 mt-4'>
                        <p>Giving your brand the upper</p>
                        <p>hand at being found online</p>
                        <p>through<span className='text-mcl-blue'> SEO.</span></p>
                    </div>
                </div>


                <div>
                    <h1 className='text-f24 text-mcl-gray'>Master Plan</h1>
                    <div className='text-f24 mt-4'>
                        <p>Helping you understand your</p>
                        <p>purpose and define your goals</p>
                        <p>through<span className='text-mcl-blue'> Strategy.</span></p>
                    </div>
                </div>

                <div>
                    <h1 className='text-f24 text-mcl-gray'>Attraction</h1>
                    <div className='text-f24 mt-4'>
                        <p>Helping you to penetrate</p>
                        <p>and attract your ideal</p>
                        <p>customers through<span className='text-mcl-blue'> Digital</span></p>
                        <p><span className='text-mcl-blue'>Marketing</span></p>
                    </div>
                </div>

                <div>
                    <h1 className='text-f24 text-mcl-gray'>Connectivity</h1>
                    <div className='text-f24 mt-4'>
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
