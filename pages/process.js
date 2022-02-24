import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Grow from './components/Grow';
import Head from 'next/head';
import NextLink from 'next/link';
import ScrollOut from "scroll-out";
import $ from "jquery";

const Process = () => {
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
        <div className='container-mcl'>
            <Head>
                <title>Our Process</title>
                <meta name="description" content="How we do" />
                <meta property="og:title" content="Our Process" />
                <meta property="og:description" content="How we do" />
                <meta property="og:keywords" content="Web Design,Web Development,USA,Architects,Interior Designers, Washington DC, DC, Web design agency for architects in Washington DC, Web design agency for interior designers in Washington DC" />
                <meta property="og:author" content="minutecodelabs" />
                <meta property="og:url" content="https://minutecodelabs.com/process" />
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
                            <img src="/Resources/Home/home-process.jpg" className="hidden lg:block object-cover w-full h-768px" />
                            <img src="/Resources/Mobile/Process-mobile-hero.png" className="lg:hidden object-cover w-full" />
                        </div>
                    </div>

                    <div className="md:mx-36 relative bottom-100 mx-10">
                        <div data-scroll className="text-white lg:text-f20 text-f14 Inter-Regular mt-12">
                            <p>Our Strength</p>
                        </div>
                        <div data-scroll className="hidden lg:block text-white text-f50 leading-f50 Inter-Regular tracking-wide mt-4">
                            <h1 className="drop-shadow-md">One of our key strengths lie in having</h1>
                            <h1 className="drop-shadow-md"> a clear cut process that delivers results</h1>
                        </div>
                        <div data-scroll className="lg:hidden text-white text-f20 Inter-Regular tracking-wide mt-4">
                            <h1 className="drop-shadow-md">One of our key </h1>
                            <h1 className="drop-shadow-md">strengths lie in having a</h1>
                            <h1 className="drop-shadow-md">clear cut process that</h1>
                            <h1 className="drop-shadow-md">delivers results</h1>
                        </div>

                    </div>

                </div>
            </div>

            <div className="lg:-mt-56 -mt-80">
            </div>


            <div className="lg:mx-28 mx-6">
                <div className="flex lg:flex-row flex-col justify-center">
                    <div data-scroll className="lg:w-1/4 lg:text-f16 text-f12 Inter-Bold">
                        <p className=''>Our process</p>
                    </div>
                    <div className="lg:w-3/4 lg:text-f20 text-f14 Inter-Regular mt-6 lg:mt-0">
                        <div data-scroll className='lg:block hidden leading-f35'>
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
                        <div data-scroll className='lg:hidden leading-f24-low'>
                            <h2>Using our experience and new founded</h2>
                            <h2>learnings, we have refined a process that helps</h2>
                            <h2>to understand where you are right now, where</h2>
                            <h2>you want to go, and the best way to get</h2>
                            <h2>there.</h2>
                            <br></br>
                            <h2>We kept you as the center when we created</h2>
                            <h2>our process to ensure that you will easily</h2>
                            <h2>understand what's going on, take part and fall</h2>
                            <h2>in love with the process (and your brand),</h2>
                            <h2>and get the best results from our collective</h2>
                            <h2>efforts.</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className="md:mx-28 lg:mt-36 mt-20 mx-6">
                <div className="flex lg:flex-row flex-col justify-center">
                    <div data-scroll className="lg:w-1/4 text-f12 lg:text-f16 Inter-Bold">
                        <p className=''>Process approach</p>
                    </div>
                    <div className="lg:w-3/4 text-f20 Inter-Regular mt-6 lg:mt-0">
                        <div className='grid grid-cols-2 gap-y-10'>
                            <div>
                                <div data-scroll><p className='Inter-SemiBold lg:text-f20 text-f14 text-mcl-blue'>01 Discover</p></div>
                                <div className='lg:ml-7 mt-2 Inter-regular lg:text-f20 text-f12'>
                                    <div data-scroll className='lg:block hidden leading-f35'>
                                        <p>Our process gathers research,</p>
                                        <p>inputs, thoughts & ideas, audits,</p>
                                        <p>and experiences to understand</p>
                                        <p>the current status of a brand.</p>
                                    </div>
                                    <div data-scroll className='lg:hidden leading-f20'>
                                        <p>Our process gathers </p>
                                        <p>research, inputs, thoughts </p>
                                        <p>& ideas, audits, and </p>
                                        <p>experiences to understand</p>
                                        <p>the current status of a</p>
                                        <p>brand.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div data-scroll><p className='Inter-SemiBold lg:text-f20 text-f14 text-mcl-blue'>02 Define</p></div>
                                <div className='lg:ml-8 mt-2 Inter-regular lg:text-f20 text-f12'>
                                    <div data-scroll className='lg:block hidden leading-f35'>
                                        <p>We run collaborative work to</p>
                                        <p>understand and to refine a</p>
                                        <p>brand's business goals,</p>
                                        <p>customers, and desired future</p>
                                        <p>state.</p>
                                    </div>
                                    <div data-scroll className='lg:hidden leading-f20'>
                                        <p>We run collaborative </p>
                                        <p>work to understand and</p>
                                        <p>to refine a brand's</p>
                                        <p>business goals,</p>
                                        <p>customers, and desired</p>
                                        <p>future state.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div data-scroll><p className='Inter-SemiBold lg:text-f20 text-f14 text-mcl-blue'>03 Develop</p></div>
                                <div className='lg:ml-8 mt-2 Inter-regular lg:text-f20 text-f12'>
                                    <div data-scroll className='lg:block hidden leading-f35'>
                                        <p>From the new founded insights,</p>
                                        <p>we create a road map that will</p>
                                        <p>take a brand from it's current</p>
                                        <p>state to the desired future state.</p>
                                    </div>
                                    <div data-scroll className='lg:hidden leading-f20'>
                                        <p>From the new founded </p>
                                        <p>insights, we create a road</p>
                                        <p>map that will take a brand</p>
                                        <p>from it's current state to</p>
                                        <p>the desired future state.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div data-scroll><p className='Inter-SemiBold lg:text-f20 text-f14 text-mcl-blue'>04 Deliver</p></div>
                                <div className='lg:ml-8 mt-2 Inter-regular lg:text-f20 text-f12'>
                                    <div data-scroll className='lg:block hidden leading-f35'>
                                        <p>We develop the solution for the</p>
                                        <p>measurements & guidelines we</p>
                                        <p>got from the roadmap, which will</p>
                                        <p>be outputted as a website.</p>
                                    </div>
                                    <div data-scroll className='lg:hidden leading-f20'>
                                        <p>We develop the solution</p>
                                        <p>for the measurements</p>
                                        <p>& guidelines we got</p>
                                        <p> from the roadmap,</p>
                                        <p>which will be outputted</p>
                                        <p>as a website.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* case study */}
            <div className="lg:mt-24 mt-8">
                <div className="lg:mx-2">

                    <div data-scroll><h1 className="text-f25 lg:text-f40 Inter-Medium text-center">Case Studies</h1></div>

                    <div className="mt-8">
                        <div className='flex flex-col justify-center items-center'>
                            {/* <img className="object-cover w-auto lg:h-72 h-auto" src="/Resources/Home/case-study-1-cover.png" alt="case-1" /> */}
                            <div className="container">
                                <div className="content">
                                    <NextLink href="/case-study"><a href="/case-study">
                                        <div className="content-overlay"></div>
                                        <img className="content-image" src="/Resources/Home/case-study-1-cover.png" alt="case-1" />
                                        <div className="content-details fadeIn-top">
                                            <h3>Gensler:Reimagining the digital</h3>
                                            <h3>forefront in 2022</h3>
                                        </div>
                                    </a></NextLink>
                                </div>
                            </div>


                            {/* <p className="hidden lg:block mt-2 text-center text-f20 Inter-Regular text-gray-700">Gensler</p> */}
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
            {/* back to top button */}
            <a id="button"></a>
        </div>
    )
};

export default Process;
