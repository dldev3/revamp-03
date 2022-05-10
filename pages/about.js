import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import Grow from './components/Grow';
import NextLink from 'next/link';
import ScrollOut from "scroll-out";
import { useEffect } from 'react';
import $ from 'jquery';

export default function About() {
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
        <div className="">
            <Head>
                <title>About Us</title>
                <meta name="description" content="Who we are" />
                <meta property="og:title" content="About Us" />
                <meta property="og:description" content="Who we are" />
                <meta property="og:keywords" content="Web Design,Web Development,USA,Architects,Interior Designers, Washington DC, DC, Web design agency for architects in Washington DC, Web design agency for interior designers in Washington DC" />
                <meta property="og:author" content="minutecodelabs" />
                <meta property="og:url" content="https://minutecodelabs.com/about" />
                <link rel="icon" href="/fav.png" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />

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
                        <div data-scroll className="text-white lg:text-f20 text-f14 Inter-Regular mt-12">
                            <p>Our work ethic</p>
                        </div>
                        <div data-scroll className="hidden lg:block text-white text-f40 leading-f50 Inter-Regular tracking-wide mt-4">
                            <h1 className="drop-shadow-md">A prescription without diagnosis</h1>
                            <h1 className="drop-shadow-md">is a malpractice</h1>
                        </div>
                        <div data-scroll className="lg:hidden text-white text-f25 Inter-Regular mt-4">
                            <h1 className="drop-shadow-md">A prescription without </h1>
                            <h1 className="drop-shadow-md">diagnosis is a </h1>
                            <h1>malpractice</h1>
                        </div>

                    </div>

                </div>
            </div>

            <div className="lg:-mt-56 -mt-72">
            </div>

            <div className='who-we-are container-mcl'>
                <div className="lg:mx-44 mx-8">
                    <div className="flex lg:flex-row flex-col justify-center">
                        <div data-scroll className="lg:w-1/4 text-f12 lg:text-f16 Inter-Bold">
                            <p>Who we are </p>
                        </div>
                        <div data-scroll className="hidden lg:block w-3/4 text-f20 Inter-Regular">
                            <h2>We are team of hustlers with a mission to bring clarity</h2>
                            <h2>and growth to the world through the power of creativity</h2>
                            <h2>designing based in Sri Lanka. We bring our collective</h2>
                            <h2>experience of design and technical expertise to build</h2>
                            <h2>meaningful and engaging solutions.</h2>
                            <br></br>
                            <h1>Simplifying what is already complex is our passion.</h1>
                            <h1>Seeing the company we keep thrive with results is our drive.</h1>
                        </div>
                        <div data-scroll className="lg:hidden leading-f25 text-f14 Inter-Regular mt-6">
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

            <div className='our-core-values container-mcl'>
                <div className="lg:mx-44 mt-20 lg:mt-12">
                    <div className="flex lg:flex-row flex-col justify-center">
                        <div data-scroll className="lg:w-1/4 lg:text-f16 text-f12 Inter-Bold">
                            <p className='mx-8 lg:mx-0'>Our core values </p>
                        </div>
                        <div className="lg:w-3/4 text-f20 Inter-Regular">

                            <div className="grid grid-cols-1 lg:gap-y-10 mt-12 lg:mt-0 ">

                                <div className="flex lg:flex-row flex-col">
                                    <div>
                                        <div><img className="w-full h-212px lg:w-96 lg:h-56 object-cover" src="/Resources/About/value-1.jpg" alt="value-1" /></div>
                                        <div data-scroll><p className="Inter-Regular lg:text-f20 text-f14 lg:text-left text-center p-3">Be empathetic</p></div>
                                    </div>

                                    <div className='mt-4 lg:mt-0'>
                                        <div><img className="w-full h-212px lg:w-96 lg:h-56 object-cover" src="/Resources/About/value-2.jpg" alt="value-2" /></div>
                                        <div data-scroll><p className="Inter-Regular lg:text-f20 text-f14 lg:text-left text-center p-3">Build solutions, not websites</p></div>
                                    </div>
                                </div>

                                <div className="flex lg:flex-row flex-col">
                                    <div className='mt-6 lg:mt-0'>
                                        <div><img className="w-full h-212px lg:w-96 lg:h-56 object-cover" src="/Resources/About/value-3.jpg" alt="value-3" /></div>
                                        <div data-scroll><p className="Inter-Regular lg:text-f20 text-f14 lg:text-left text-center p-3">Over deliver, always</p></div>
                                    </div>
                                    <div className='mt-6 lg:mt-0'>
                                        <div><img className="w-full h-212px lg:w-96 lg:h-56 object-cover" src="/Resources/About/value-4.jpg" alt="value-4" /></div>
                                        <div data-scroll><p className="Inter-Regular lg:text-f20 text-f14 lg:text-left text-center p-3">Seek learning and growth</p></div>
                                    </div>
                                </div>

                                <div className="flex lg:flex-row flex-col">
                                    <div className='mt-6 lg:mt-0'>
                                        <div><img className="w-full h-212px lg:w-96 lg:h-56 object-cover" src="/Resources/About/value-5.jpg" alt="value-5" /></div>
                                        <div data-scroll><p className="Inter-Regular lg:text-f20 text-f14 lg:text-left text-center p-3">Build a family, not a team</p></div>
                                    </div>
                                    <div className='mt-6 lg:mt-0'>
                                        <div><img className="w-full h-212px lg:w-96 lg:h-56 object-cover" src="/Resources/About/value-6.jpg" alt="value-6" /></div>
                                        <div data-scroll><p className="Inter-Regular lg:text-f20 text-f14 lg:text-left text-center p-3">Choose honesty over white lies</p></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

            <div className="our process and roadmap container-mcl">
                <div className='lg:mx-20 lg:mt-20 mt-36'>

                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-4'>
                        <div className=''>
                            <img className="w-full lg:h-96 h-254px" src="/Resources/Home/home-roadmap.jpg" alt="img-roadmap" />
                            <div data-scroll className="lg:block hidden mt-4 Inter-Regular leading-f24-high text-f20  text-gray-700 mx-2">
                                <p>From a boutique design agency, we envision becoming a</p>
                                <p>full-service creative agency that can help the growth of</p>
                                <p>architects & interior designers in the connected world.</p>
                            </div>
                            <div data-scroll className='lg:hidden leading-f26 Inter-Regular text-f14 mx-4 p-4 text-gray-700 mt-6'>
                                <p>From a boutique design agency, we envision</p>
                                <p>becoming a full-service creative agency that</p>
                                <p>can help the growth of architects & interior </p>
                                <p>designers in the connected world.</p>
                            </div>
                            <div className="lg:mt-14 lg:mx-2 mx-4 lg:p-0 p-4">
                                <NextLink href="/roadmap"><a href="/roadmap" className="text-mcl-black Inter-Bold lg:text-f16 text-f14 uppercase underline underline-offset-4">see our roadmap</a></NextLink>
                            </div>
                        </div>
                        <div className='mt-12 lg:mt-0'>
                            <img className="w-full lg:h-96 h-254px" src="/Resources/Home/home-process.jpg" alt="our-process-img" />
                            <div data-scroll className="hidden lg:block mt-4 Inter-Regular text-f20 leading-f24-high text-gray-700 mx-2">
                                <p>Our clear cut process helps you understand your problems</p>
                                <p>and helps us deliver results focused solutions that solves</p>
                                <p>problems.</p>
                            </div>
                            <div data-scroll className="lg:hidden Inter-Regular text-f14 leading-f26 text-gray-700 mx-4 p-4 mt-6">
                                <p>Our clear cut process helps you understand your</p>
                                <p>problems and helps us deliver results focused</p>
                                <p>solutions that solves problems.</p>
                            </div>
                            <div className="lg:mt-14 lg:mx-2 mx-4 lg:p-0 p-4">
                                <NextLink href="/process"><a href="/process" className="text-mcl-black Inter-Bold lg:text-f16 text-f14 uppercase underline underline-offset-4">see our process</a></NextLink>
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

        </div>
    );
}
