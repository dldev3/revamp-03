import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import Grow from './components/Grow';
import NextLink from 'next/link';

export default function About() {
    return (
        <div className="container-mcl">
            <Head>
                <title>Minutecode Labs | About</title>
                <meta name="description" content="Best web development agency in USA, Canada and Europe" />
                <link rel="icon" href="/fav.png" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>

            {/* Header */}
            <div className="relative lg:-top-5 z-10">
                <Header></Header>
            </div>

            {/* Landing page */}
            <div>
                <div>
                    <div className="relative -top-33 z-0">
                        <div className="">
                            <img src="/Resources/About/hero-image.png" className="object-cover w-full h-768px hidden lg:block" />
                            <img src="/Resources/Mobile/About-mobile-hero.png" className="object-cover w-full lg:hidden" />
                        </div>
                    </div>

                    <div className="md:mx-36 relative bottom-100 mx-12">
                        <div className="text-white lg:text-f20 text-f14 Inter-Regular mt-12">
                            <p>Our work ethic</p>
                        </div>
                        <div className="hidden lg:block text-white text-f50 leading-f50 Inter-Regular tracking-wide mt-4">
                            <h1 className="drop-shadow-md">A prescription without diagnosis</h1>
                            <h1 className="drop-shadow-md">is a malpractice</h1>
                        </div>
                        <div className="lg:hidden text-white text-f25 Inter-Regular mt-4">
                            <h1 className="drop-shadow-md">A prescription without </h1>
                            <h1 className="drop-shadow-md">diagnosis is a </h1>
                            <h1>malpractice</h1>
                        </div>

                    </div>

                </div>
            </div>

            <div className="lg:-mt-56 -mt-72">
            </div>

            <div className='who we are'>
                <div className="lg:mx-44 mx-8">
                    <div className="flex lg:flex-row flex-col justify-center">
                        <div className="lg:w-1/4 text-f12 lg:text-f16 Inter-Bold">
                            <p>Who we are </p>
                        </div>
                        <div className="hidden lg:block w-3/4 text-f20 Inter-Regular">
                            <h2>We are team of hustlers with a mission to bring clarity</h2>
                            <h2>and growth to the world through the power of creativity</h2>
                            <h2>designing based in Sri Lanka. We bring our collective</h2>
                            <h2>experience of design and technical expertise to build</h2>
                            <h2>meaningful and engaging solutions.</h2>
                            <br></br>
                            <h1>Simplifying what is already complex is our passion.</h1>
                            <h1>Seeing the company we keep thrive with results is our drive.</h1>
                        </div>
                        <div className="lg:hidden text-f14 Inter-Regular mt-6">
                            <h2>We are a team of hustlers with a mission to</h2>
                            <h2>bring clarity and growth to the world through</h2>
                            <h2>the power of creative designing based in</h2>
                            <h2>Sri Lanka. We bring our collective experience</h2>
                            <h2>of design and technical expertise to build</h2>
                            <h2>meaningful and engaging solutions.</h2>
                            <br></br>
                            <h1>Simplifying what is already complex is</h1>
                            <h1>our passion. Seeing the company we keep</h1>
                            <h1>thrive with results is our drive.</h1>
                        </div>
                    </div>

                </div>
            </div>

            <div className='our core values'>
                <div className="lg:mx-44 mt-20 lg:mt-12">
                    <div className="flex lg:flex-row flex-col justify-center">
                        <div className="lg:w-1/4 lg:text-f16 text-f12 Inter-Bold">
                            <p className='mx-8 lg:mx-0'>Our core values </p>
                        </div>
                        <div className="lg:w-3/4 text-f20 Inter-Regular">

                            <div className="grid grid-cols-1 lg:gap-y-10 mt-12 lg:mt-0 ">

                                <div className="flex lg:flex-row flex-col">
                                    <div>
                                        <div><img className="w-full h-212px lg:w-96 lg:h-56 object-cover" src="/Resources/About/value-1.jpg" alt="value-1" /></div>
                                        <div><p className="Inter-Regular lg:text-f20 text-f14 lg:text-left text-center p-3">Be empathetic</p></div>
                                    </div>

                                    <div className='mt-4 lg:mt-0'>
                                        <div><img className="w-full h-212px lg:w-96 lg:h-56 object-cover" src="/Resources/About/value-2.jpg" alt="value-2" /></div>
                                        <div><p className="Inter-Regular lg:text-f20 text-f14 lg:text-left text-center p-3">Build solutions, not websites</p></div>
                                    </div>
                                </div>

                                <div className="flex lg:flex-row flex-col">
                                    <div className='mt-6 lg:mt-0'>
                                        <div><img className="w-full h-212px lg:w-96 lg:h-56 object-cover" src="/Resources/About/value-3.jpg" alt="value-3" /></div>
                                        <div><p className="Inter-Regular lg:text-f20 text-f14 lg:text-left text-center p-3">Over deliver, always</p></div>
                                    </div>
                                    <div className='mt-6 lg:mt-0'>
                                        <div><img className="w-full h-212px lg:w-96 lg:h-56 object-cover" src="/Resources/About/value-4.jpg" alt="value-4" /></div>
                                        <div><p className="Inter-Regular lg:text-f20 text-f14 lg:text-left text-center p-3">Seek learning and growth</p></div>
                                    </div>
                                </div>

                                <div className="flex lg:flex-row flex-col">
                                    <div className='mt-6 lg:mt-0'>
                                        <div><img className="w-full h-212px lg:w-96 lg:h-56 object-cover" src="/Resources/About/value-5.jpg" alt="value-5" /></div>
                                        <div><p className="Inter-Regular lg:text-f20 text-f14 lg:text-left text-center p-3">Build a family, not a team</p></div>
                                    </div>
                                    <div className='mt-6 lg:mt-0'>
                                        <div><img className="w-full h-212px lg:w-96 lg:h-56 object-cover" src="/Resources/About/value-6.jpg" alt="value-6" /></div>
                                        <div><p className="Inter-Regular lg:text-f20 text-f14 lg:text-left text-center p-3">Choose honesty over white lies</p></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

            <div className="our process and roadmap">
                <div className='lg:mx-20 lg:mt-20 mt-36'>

                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4'>
                        <div className=''>
                            <img className="w-full lg:h-96 h-254px" src="/Resources/Home/home-roadmap.jpg" alt="img-roadmap" />
                            <div className="lg:mt-4 Inter-Regular lg:leading-f24-high lg:text-f20 text-f14 leading-f26 text-gray-700 lg:mx-0 lg:p-0 mx-4 p-4">
                                <p>We envision becoming a full-service creative</p>
                                <p>agency that can help the growth of home</p>
                                <p>professionals in the connected world</p>
                            </div>
                            <div className="lg:mt-20 lg:mx-0 mx-4 lg:p-0 p-4">
                                <NextLink href="/roadmap"><a href="/roadmap" className="text-mcl-black Inter-Bold lg:text-f16 text-f14 uppercase underline underline-offset-4">see our roadmap</a></NextLink>
                            </div>
                        </div>
                        <div className='mt-12 lg:mt-0'>
                            <img className="w-full lg:h-96 h-254px" src="/Resources/Home/home-process.jpg" alt="our-process-img" />
                            <div className="hidden lg:block mt-4 Inter-Regular text-f20 leading-f24-high text-gray-700">
                                <p>Our clear cut process helps you take a journey from</p>
                                <p>mere discovery of a problem to a creative solution</p>
                                <p>that delivers results.</p>
                            </div>
                            <div className="lg:hidden Inter-Regular text-f14 leading-f26 text-gray-700 mx-4 p-4">
                                <p>Our clear cut process helps you take a journey </p>
                                <p>from mere discovery of a problem to a creative </p>
                                <p>solution that delivers results.</p>
                            </div>
                            <div className="lg:mt-20 lg:mx-0 mx-4 lg:p-0 p-4">
                                <NextLink href="/process"><a href="/process" className="text-mcl-black Inter-Bold lg:text-f16 text-f14 uppercase underline underline-offset-4">see our process</a></NextLink>
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
    );
}
