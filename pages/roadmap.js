import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Grow from './components/Grow';
import Head from 'next/head';
import ScrollOut from "scroll-out";
import $ from "jquery";
const Roadmap = () => {
    useEffect(() => {
        // back to top
        var btn = $('#button');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });
        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });
        // back to top end
        ScrollOut({
            threshold: .8,
            once: true
        });

        ScrollOut();
    }, []);
    return (
        <div className=''>
            <Head>
                <title>Our Roadmap</title>
                <meta name="description" content="Our Journey ahead" />
                <meta property="og:title" content="Our Roadmap" />
                <meta property="og:description" content="Our Journey ahead" />
                <meta property="og:keywords" content="Web Design,Web Development,USA,Architects,Interior Designers, Washington DC, DC, Web design agency for architects in Washington DC, Web design agency for interior designers in Washington DC" />
                <meta property="og:author" content="minutecodelabs" />
                <meta property="og:url" content="https://minutecodelabs.com/roadmap" />
                <link rel="icon" href="/fav.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
            </Head>

            <div className="relative lg:-top-5 z-10">
                <Header></Header>
            </div>

            {/* Landing page */}
            <div>
                <div>
                    <div className="relative -top-33 z-0">
                        <div className="">
                            <img src="/Resources/Roadmap/home-roadmap.jpg" className="hidden lg:block object-cover w-full h-768px" />
                            <img src="/Resources/Mobile/Roadmap-mobile-hero.png" className="lg:hidden object-cover w-full h-auto" />
                        </div>
                    </div>

                    <div className="md:mx-36 relative bottom-100 mx-12">
                        <div data-scroll className="text-white lg:text-f20 text-f14 Inter-Regular mt-12">
                            <p>Our mission</p>
                        </div>
                        <div data-scroll className="hidden lg:block text-white text-f40 leading-f50 Inter-Regular tracking-wide mt-4">
                            <h1 className="drop-shadow-md">We envision becoming a full-service</h1>
                            <h1 className="drop-shadow-md">creative agency for home professionals</h1>
                        </div>
                        <div data-scroll className="lg:hidden text-white text-f25 Inter-Regular tracking-wide mt-4">
                            <h1 className="drop-shadow-md"> We envision becoming</h1>
                            <h1 className="drop-shadow-md">a full-service creative</h1>
                            <h1 className="drop-shadow-md">agency for home</h1>
                            <h1 className="drop-shadow-md">professionals</h1>
                        </div>

                    </div>

                </div>
            </div>

            <div className="lg:-mt-56 -mt-80">
            </div>

            <div className="container-mcl">
                <div className="md:mx-44 mx-6">
                    <div className="flex lg:flex-row flex-col justify-center">
                        <div data-scroll className="lg:w-1/4 lg:text-f16 text-f12 Inter-Bold">
                            <p className=''>Our roadmap</p>
                        </div>
                        <div className="lg:w-3/4 lg:text-f20 text-f14 lg:leading-f40 leading-f24-low Inter-Regular mt-6 lg:mt-0">
                            <div data-scroll className='lg:block hidden'>
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
                            <div data-scroll className='lg:hidden'>
                                <h2>Delivering results through the power of design</h2>
                                <h2>is just the first step of our grand game plan for</h2>
                                <h2>the construction industry. We have a big vision</h2>
                                <h2>for the years to come, that can help home</h2>
                                <h2>professionals gain the disruption they seek in</h2>
                                <h2>the connected world, at one place.</h2>
                                <br></br>
                                <h2>We will support building brands one at a time,</h2>
                                <h2> from ground up giving them the confidence and</h2>
                                <h2>capability to scale their brands even to the</h2>
                                <h2>global levels.</h2>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="md:mx-44 mx-6 lg:mt-36 mt-14">
                    <div className="flex lg:flex-row flex-col justify-center">
                        <div className="lg:w-1/4 lg:text-f16 text-f12 Inter-Bold">
                            <p className=''>Our game plan</p>
                        </div>
                        <div className="lg:w-3/4 lg:text-f20 text-f14 lg:leading-f40 leading-f24-low Inter-Regular mt-6 lg:mt-0">
                            <div data-scroll className='lg:block hidden'>
                                <h2>Each side of the hexagon of our brand identity represents</h2>
                                <h2>a specific service we want to bring in as a core service.</h2>
                            </div>
                            <div data-scroll className='lg:hidden'>
                                <h2>Each side of the hexagon of our brand</h2>
                                <h2>identity represents a specific service we want</h2>
                                <h2>to bring in as a core service.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='lg:mt-36 mt-20'>
                <img className='lg:block hidden h-full w-full' src="/Resources/Roadmap/roadmap-desktop.png" alt="roadmap" />
                <img className='h-auto w-full lg:hidden' src="/Resources/Roadmap/roadmap-mobile.png" alt="roadmap" />
            </div>

            <div className="container-mcl">
                <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-y-12 gap-y-8 lg:mx-16 lg:mt-28 mt-16 mx-4'>

                    <div>
                        <h1 data-scroll className='lg:text-f20 text-f14 text-mcl-gray Inter-SemiBold'>Online Identity</h1>
                        <div data-scroll className='lg:text-f20 text-f12 mt-4 Inter-Regular'>
                            <p>Setting your online presence</p>
                            <p>for success through creative</p>
                            <p><span className='text-mcl-blue'>Web Designing </span>that helps</p>
                            <p>you attract, speak to and</p>
                            <p>convert your dream clients.</p>
                        </div>
                    </div>

                    <div>
                        <h1 data-scroll className='lg:text-f20 text-f14 text-mcl-gray Inter-SemiBold'>Personality</h1>
                        <div data-scroll className='lg:text-f20 text-f12 mt-4 Inter-Regular'>
                            <p>Giving you an identity that</p>
                            <p>tells your personality and</p>
                            <p>your values through</p>
                            <p><span className='text-mcl-blue'>Branding</span></p>

                        </div>
                    </div>


                    <div>
                        <h1 data-scroll className='lg:text-f20 text-f14 text-mcl-gray Inter-SemiBold'>Discoverability</h1>
                        <div data-scroll className='lg:text-f20 text-f12 mt-4 Inter-Regular'>
                            <p>Giving your brand the upper</p>
                            <p>hand at being found online</p>
                            <p>through<span className='text-mcl-blue'> SEO.</span></p>
                        </div>
                    </div>


                    <div>
                        <h1 data-scroll className='lg:text-f20 text-f14 text-mcl-gray Inter-SemiBold'>Master Plan</h1>
                        <div data-scroll className='lg:text-f20 text-f12 mt-4 Inter-Regular'>
                            <p>Helping you understand your</p>
                            <p>purpose and define your goals</p>
                            <p>through<span className='text-mcl-blue'> Strategy.</span></p>
                        </div>
                    </div>

                    <div>
                        <h1 data-scroll className='lg:text-f20 text-f14 text-mcl-gray Inter-SemiBold'>Attraction</h1>
                        <div data-scroll className='lg:text-f20 text-f12 mt-4 Inter-Regular'>
                            <p>Helping you to penetrate</p>
                            <p>and attract your ideal</p>
                            <p>customers through<span className='text-mcl-blue'> Digital</span></p>
                            <p><span className='text-mcl-blue'>Marketing</span></p>
                        </div>
                    </div>

                    <div>
                        <h1 data-scroll className='lg:text-f20 text-f14 text-mcl-gray Inter-SemiBold'>Connectivity</h1>
                        <div data-scroll className='lg:text-f20 text-f12 mt-4 Inter-Regular'>
                            <div data-scroll className='hidden lg:block'>
                                <p>Helping you to go out to the world</p>
                                <p>and establish authentic connections</p>
                                <p>by bringing your next event to life</p>
                                <p>through<span className='text-mcl-blue'> Event planning.</span></p></div>
                            <div data-scroll className='lg:hidden'>
                                <p>Helping you to go out to </p>
                                <p>the world and establish </p>
                                <p>authentic connections by</p>
                                <p>bringing your next event</p>
                                <p>to life through<span className='text-mcl-blue'> Event</span></p>
                                <p><span className='text-mcl-blue'>planning.</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="mx-16 text-center">
                <Grow />
            </div>

            <div>
                <Footer />
            </div>
            {/* back to top button */}
            <a id="button"></a>
        </div >
    )
};

export default Roadmap;
