import Head from 'next/head';
import Header from './components/Header';
import Grow from './components/Grow';
import Footer from './components/Footer';
import NextLink from 'next/link';
import { useEffect } from 'react';
import $ from 'jquery';

export default function Home() {
    useEffect(() => {
        $(document).ready(function () {
            $("#designArr").click(function () {
                $(".designGrid").toggle(800);
                $("#designArrImg").toggleClass("toggle-updown");
            });
        });

        $(document).ready(function () {
            $("#devArr").click(function () {
                $(".devGrid").toggle(800);
                $("#devArrImg").toggleClass("toggle-updown");
            });
        });

    }, []);
    return (
        <div className="container-mcl">
            <Head>
                <title>Minutecode Labs | Capabilities</title>
                <meta name="description" content="Best web development agency in USA, Canada and Europe" />
                <link rel="icon" href="/fav.png" />
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
                            <img src="/Resources/Capabilities/cap-hero.png" className="object-cover w-full h-768px lg:block hidden" />
                            <img src="/Resources/Mobile/Capabilities-mobile-hero.png" className="object-cover w-full lg:hidden" />
                        </div>
                    </div>

                    <div className="lg:mx-36 relative lg:bottom-100 bottom-100 mx-12">
                        <div className="text-white text-f14 lg:text-f20 Inter-Regular mt-12">
                            <p>What we do</p>
                        </div>
                        <div className="lg:block hidden text-white text-f40 leading-f50 Inter-Medium mt-4">
                            <div className='drop-shadow-lg'>
                                <h1 className="drop-shadow-md">We create simple designs, meaningful</h1>
                                <h1 className="drop-shadow-md">journeys and converting experience.</h1>
                            </div>
                        </div>


                        <div className="lg:hidden text-f25 text-white Inter-Regular mt-4">
                            <p>We create simple</p>
                            <p>designs, meaningful</p>
                            <p>journeys and converitng</p>
                            <p>experiences</p>
                        </div>

                    </div>

                </div>
            </div>


            <div className='lg:mx-36 flex lg:flex-row flex-col mx-12 -mt-110 lg:-mt-72'>
                <div className='lg:w-3/12'>
                    <p className='Inter-Bold lg:text-f16 text-f12 lg:p-2 text-gray-700'>How we do it</p>
                </div>
                <div className='lg:w-9/12 lg:text-f40 text-f14 Inter-Medium lg:leading-f50 leading-f24 text-gray-700 mt-2 lg:mt-0'>
                    <h1 className='lg:block hidden'>We let creativity meet strategy to</h1>
                    <h1 className='lg:block hidden'>solve problems</h1>
                    <h1 className='lg:hidden'>We let creativity meet strategy to solve</h1>
                    <h1 className='lg:hidden'>problems</h1>
                </div>
            </div>

            {/* Designing */}
            <div className='lg:mt-24 mt-10'>
                <div className='flex lg:flex-row flex-col-reverse'>
                    <div className="lg:w-5/12 bg-mcl-blue py-16">
                        <div className='lg:mx-20 mx-14 lg:mt-24'>
                            <div className=''>
                                <h1 className='lg:text-f40 text-f25 text-gray-200 Inter-Regular'>Designing</h1>
                            </div>
                            <div className='text-f14 lg:text-f20 lg:leading-f36 leading-f26 mt-6 text-gray-200 Inter-Regular'>
                                <p>Every brand has a story to tell.</p>
                                <p>we thoughfully organize and</p>
                                <p>present a design that brings brand</p>
                                <p>stories to life in a meaningful way</p>
                            </div>
                            <div className='max-w-fit border-white border-b-2 lg:mt-20 mt-14'>
                                <a id="designArr" className='flex flex-row text-white Inter-Bold text-f12 lg:text-f16 hover:cursor-pointer'><span className='uppercase'>Learn more</span><span className="ml-2"><img id="designArrImg" className='ml-1 w-auto h-4 lg:mt-1' src="/Resources/About/Arrow-copy.svg" alt="arrow" /></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-7/12">
                        <img className='w-auto object-cover' src="/Resources/Capabilities/web-design.jpg" alt="img" />
                    </div>

                </div>
            </div>

            {/* Design grid */}
            <div className='designGrid hidden' id="designGrid">
                <div className="grid grid-cols-2 lg:grid-cols-4">

                    <div>
                        <div>
                            <img className="lg:h-223px h-134px w-full" src="/Resources/Capabilities/research.jpg" alt="research" />
                        </div>
                        <div className="bg-mcl-black lg:p-6 p-4 h-44 lg:h-60">
                            <h2 className="Inter-Medium lg:text-f20 text-f12 text-gray-300">Discovery & Research</h2>
                            <p className="Inter-Regular lg:text-f14 text-f10 leading-f18 lg:leading-f24-low text-gray-300 mt-4">A design is a solution to a problem. To create a design that solves, identifying the problems and needs are is and must be the first step.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="lg:h-223px h-134px w-full" src="/Resources/Capabilities/wireframing.jpg" alt="wireframing" />
                        </div>
                        <div className="bg-mcl-gray lg:p-6 p-4 h-44 lg:h-60">
                            <h2 className="Inter-Medium lg:text-f20 text-f12 text-gray-300">Wireframes & Prototypes</h2>
                            <p className="Inter-Regular lg:text-f14 text-f10 leading-f18 lg:leading-f24-low text-gray-300 mt-4">A wireframe displays the structure while a prototype displays the interactions within. Collectively, they make the decision making and the effectiveness of a solution optimum.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="lg:h-223px h-134px w-full" src="/Resources/Capabilities/design-system.jpg" alt="design-system" />
                        </div>
                        <div className="bg-mcl-black lg:p-6 p-4 h-44 lg:h-60">
                            <h2 className="Inter-Medium lg:text-f20 text-f12 text-gray-300">Design Systems</h2>
                            <p className="Inter-Regular lg:text-f14 text-f10 leading-f18 lg:leading-f24-low text-gray-300 mt-4">A design system lays the foundations for a good design as it sets the standards and the patterns of a specific design.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="lg:h-223px h-134px w-full" src="/Resources/Capabilities/responsive.jpg" alt="responsive" />
                        </div>
                        <div className="bg-mcl-gray lg:p-6 p-4 h-44 lg:h-60">
                            <h2 className="Inter-Medium lg:text-f20 text-f12 text-gray-300">Responsive Designing</h2>
                            <p className="Inter-Regular lg:text-f14 text-f10 leading-f18 lg:leading-f24-low text-gray-300 mt-4">From a desktop to tablets and mobiles, responsive designs adapt smoothly to any and all device screens perfectly.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Development */}
            <div>
                <div>
                    <div className='flex lg:flex-row flex-col'>
                        <div className="lg:w-7/12">
                            <img className='w-auto object-cover' src="/Resources/Capabilities/web-development.jpg" alt="img" />
                        </div>
                        <div className="lg:w-5/12 bg-mcl-blue py-16">
                            <div className='lg:mx-20 mx-14 lg:mt-10'>
                                <div className=''>
                                    <h1 className='lg:text-f40 text-f25 text-gray-200 Inter-Regular'>Development</h1>
                                </div>
                                <div className='text-f14 lg:text-f20 lg:leading-f36 leading-f26 Inter-Regular mt-8 text-gray-200'>
                                    <p>Our goal is to build a solution that</p>
                                    <p>is specific to a brand, performing,</p>
                                    <p>and future proof, setting the stage</p>
                                    <p>for brand stories come to life.</p>
                                </div>
                                <div className='max-w-fit border-white border-b-2 mt-14 lg:mt-20'>
                                    <a id="devArr" className='flex flex-row text-white Inter-Bold lg:text-f16 text-f12 hover:cursor-pointer'><span className='uppercase'>Learn more</span><span className="ml-2"><img id="devArrImg" className='ml-1 w-auto h-4 lg:mt-1' src="/Resources/About/Arrow-copy.svg" alt="arrow" /></span></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Development grid */}
            <div className='devGrid hidden' id="devGrid">
                <div className="grid grid-cols-2 lg:grid-cols-4">

                    <div>
                        <div>
                            <img className="lg:h-223px h-134px w-full" src="/Resources/Capabilities/custom-development.jpg" alt="custom-development" />
                        </div>
                        <div className="bg-mcl-black lg:p-6 p-4 h-40 lg:h-52">
                            <h2 className="Inter-Medium lg:text-f20 text-f12 text-gray-300">Custom Development</h2>
                            <p className="Inter-Regular lg:text-f14 text-f10 leading-f18 lg:leading-f24-low text-gray-300 mt-4">From scratch building of a solution without the use of website builders and templates of any kind.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="lg:h-223px h-134px w-full" src="/Resources/Capabilities/migration.jpg" alt="migration" />
                        </div>
                        <div className="bg-mcl-gray lg:p-6 p-4 h-40 lg:h-52">
                            <h2 className="Inter-Medium lg:text-f20 text-f12 text-gray-300">Migration</h2>
                            <p className="Inter-Regular lg:text-f14 text-f10 leading-f18 lg:leading-f24-low text-gray-300 mt-4">Taking a website from one place to another place on the internet without harming the good side of the current location.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="lg:h-223px h-134px w-full" src="/Resources/Capabilities/infrastructure.jpg" alt="infrastructure" />
                        </div>
                        <div className="bg-mcl-black lg:p-6 p-4 h-40 lg:h-52">
                            <h2 className="Inter-Medium lg:text-f20 text-f12 text-gray-300">Infrastructure</h2>
                            <p className="Inter-Regular lg:text-f14 text-f10 leading-f18 lg:leading-f24-low text-gray-300 mt-4">The basic digital structures and facilities needed for the operation of a website.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="lg:h-223px h-134px w-full" src="/Resources/Capabilities/maintenance.jpg" alt="maintenance" />
                        </div>
                        <div className="bg-mcl-gray lg:p-6 p-4 h-40 lg:h-52">
                            <h2 className="Inter-Medium lg:text-f20 text-f12 text-gray-300">On-Going Support</h2>
                            <p className="Inter-Regular lg:text-f14 text-f10 leading-f18 lg:leading-f24-low text-gray-300 mt-4">From maintenance to scaling a built solution with the growth of a brand.</p>
                        </div>
                    </div>

                </div>
            </div>


            {/* Grow */}
            <div>
                <Grow></Grow>
            </div>
            {/* Footer */}
            <div>
                <Footer></Footer>
            </div>

        </div>
    )
}
