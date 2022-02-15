import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import NextLink from 'next/link';

import React from 'react'

const CaseStudy = () => {
    return (
        <div>
            <Head>
                <title>Minutecode Labs | Case Study</title>
                <meta name="description" content="Best web development agency in USA, Canada and Europe" />
                <link rel="icon" href="/fav.png" />
            </Head>

            <div className="relative lg:-top-5 z-10">
                <Header></Header>
            </div>

            <div className="relative lg:-top-33 -top-10 z-0">
                <div className="">
                    <img src="/Resources/CaseStudy/Cover.jpg" className="object-cover w-full lg:h-screen" />
                </div>
            </div>


            <div className='flex flex-col justify-center text-center'>
                <h1 className='lg:text-f24 text-f12 Inter-Regular text-mcl-text-black'>Case Study</h1>
            </div>
            <div className='hidden lg:flex flex-col justify-center text-center text-f50 Inter-Medium leading-f50 text-mcl-text-black'>
                <h1>Gensler: Reimagining the digital</h1>
                <h1>forefront in 2022</h1>

            </div>
            <div className='flex lg:hidden text-f20 flex-col justify-center text-center Inter-Medium text-mcl-text-black'>
                <h1>Gensler: Reimagining the </h1>
                <h1>digital forefront in 2022</h1>
            </div>

            <div className='md:mx-36 mt-12 mx-14'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-y-6 lg:gap-y-0'>
                    <div>
                        <div className='lg:text-f16 text-f12 text-mcl-text-black'><p>Background</p></div>
                        <div className='Inter-regular text-f14 lg:text-f20 lg:leading-f40 mt-4 lg:mt-0'>
                            <p>Gensler is the world's largest design </p>
                            <p>firm that partners with clients to create</p>
                            <p>more livable cities, smarter work</p>
                            <p>places and more engaging leisure</p>
                            <p>destinations.</p>
                        </div>
                    </div>
                    <div>
                        <div className='lg:text-f16 text-f12 text-mcl-text-black'><p>Challenge</p></div>
                        <div className='Inter-regular text-f14 lg:text-f20 lg:leading-f40 mt-4 lg:mt-0'>
                            <p>Demonstrating and communicating</p>
                            <p>the expertise and prestige of</p>
                            <p>Gensler.</p>
                        </div>
                    </div>
                    <div>
                        <div className='lg:text-f16 text-f12 text-mcl-text-black'><p>Outcome</p></div>
                        <div className='Inter-regular text-f14 lg:text-f20 lg:leading-f40 mt-4 lg:mt-0'>
                            <p>Reimagining the current homepage</p>
                            <p>to match the high standards of the</p>
                            <p>brand to better position themselves</p>
                            <p>as a pioneer in the industry.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:mx-36 mt-12'>
                <img className='w-full h-auto' src="/Resources/CaseStudy/CurrentHome.png" alt="current_homepage" />
                <p className='text-center mt-4 lg:text-f16 text-f12'>Current homepage</p>
            </div>

            <div className='lg:mx-44 mx-14 mt-10 Inter-Regular lg:text-f24 text-f14 lg:leading-f40'>
                <div>
                    <p>Given the current market share and client base of Gensler, it was clear that they are not actively</p>
                    <p>looking to generate leads through their website. They are also a market and thought leader in</p>
                    <p>their space. Through our Discovery process, we understood their problem (opportunity in this</p>
                    <p>case) to be demonstrating and communicating their expertise to further establish their current</p>
                    <p>position</p>
                </div>
                <div className='mt-10'>
                    <p>With our initial observation about lead generation, we identified 3 key users based on purpose</p>
                    <p>that might come into their site. They can be,</p>
                    <p>a) Investors,</p>
                    <p>b) peers, researchers and architecture enthusiasts,</p>
                    <p>c) brands with preference to building sustainable and futuristic physical spaces.</p>
                </div>
                <div className='mt-10'>
                    <p>All of these user segments have the same intent of searching for information and statistics for</p>
                    <p>different purposes, which the current homepage is lagging to facilitate efficiently.</p>
                </div>
                <div className='mt-10'>
                    <p>We managed to surface some common themes for the brand through their work.</p>
                </div>

                <div className='mt-6'>
                    <p>1.) They are laser focused on innovations and their impact. This lead us to choosing their carbon</p>
                    <p>free goal to be included as the main headline for the homepage.</p>
                </div>

                <div className='mt-6'>
                    <p>2.) All their designs are professional, creative and vibrant. This understanding lead us to align the</p>
                    <p>redesign with the same aspects to better showcase their qualities.</p>
                </div>

            </div>

            <div className='md:mx-36 mt-20'>
                <img className='w-full h-auto' src="/Resources/CaseStudy/sketch.jpg" alt="sketch" />
                <p className='lg:text-f16 text-f12 text-center mt-2'>Sketch for the new homepage</p>
            </div>

            <div className='md:mx-44 lg:mt-20 mt-10 mx-14'>
                <div className='flex lg:flex-row flex-col'>
                    <div className='lg:w-1/2 lg:text-f24 text-f14 lg:leading-f40'>
                        <p>Based on our research and analysis, we drew</p>
                        <p>a sketch for the new homepage to structure</p>
                        <p>the new layout. We also identified the key</p>
                        <p>sections to include and how the navigation</p>
                        <p>should be placed.</p>
                    </div>
                    <div className='lg:w-1/2 lg:text-f24 text-f14 lg:leading-f40 mt-10 lg:mt-0'>
                        <p>As a result, their research institute, projects,</p>
                        <p>blog and careers were selected respectively</p>
                        <p>as the homepage sections and we added a</p>
                        <p>new Call to Action for any inquiries that might</p>
                        <p>come in. User experience wise, it is a best</p>
                        <p>practice to include such a CTA.</p>
                    </div>

                </div>
            </div>

            <div className='md:mx-36 mt-20'>
                <img src="/Resources/CaseStudy/WireframeHome.png" className='w-full h-auto' alt="wireframe" />
                <p className='mt-6 lg:text-f16 text-f12 text-center'>Wireframe for the new homepage</p>
            </div>

            <div className='lg:mx-44 mx-14 lg:mt-20 mt-10'>
                <div className='flex lg:flex-row flex-col'>
                    <div className='lg:w-1/2 lg:text-f24 text-f14 lg:leading-f40'>
                        <p>The navigation bar on the header was</p>
                        <p>designed to match the user journey of the 3</p>
                        <p>identified user segments. The rest were taken</p>
                        <p>inside a menu to simplify the journey.</p>
                    </div>
                    <div className='lg:w-1/2 lg:text-f24 text-f14 lg:leading-f40 mt-10 lg:mt-0'>
                        <p>Content were taken to match the aspects we</p>
                        <p>chose to reflect from the themes we identified.</p>
                        <p>Information architecture was placed to help</p>
                        <p>a user navigate the site in a smooth flow.</p>
                    </div>
                </div>
            </div>
            <div className='lg:mx-44 mx-14 lg:mt-20 mt-10'>
                <div className='lg:text-f24 text-f14 lg:leading-f40'>
                    <p>Now that the ideation was done, we were next going to bring the wireframe to life through a visual</p>
                    <p>design. So we created a basic design system which documents the guidelines and measurements</p>
                    <p>of the design for easy use and understanding.</p>
                </div>
            </div>

            <div className='md:mx-36 mt-20'>
                <img src="/Resources/CaseStudy/DesignSystem.png" className='h-auto w-full' alt="design_system" />
                <p className='text-center mt-4 text-f12 lg:text-f14'>Design System</p>
            </div>

            <div className='md:mx-36'>
                <img src="/Resources/CaseStudy/Scene-min.png" className='h-auto w-full' alt="scene" />
            </div>

            <div className='md:mx-36'>
                <img src="/Resources/CaseStudy/Redesigned-Home.png" alt="home-redesign" className='h-auto w-full' />
            </div>

            <div className='lg:mx-36 mx-10 mt-12'>
                <div><p className='lg:text-f16 text-f12'>THE RESULT</p></div>
                <div className='lg:text-f28 text-f12 lg:leading-f48 tracking-wider mt-4'>
                    <p>After careful curation of content, strategic placement of the layout,</p>
                    <p>and the design of the story for the new homepage, a new homepage</p>
                    <p>emerged to match the challenges and goals identified, and better</p>
                    <p>reflecting the position of Gensler.</p>
                </div>

            </div>

            <div className='bg-mcl-black p-20 mt-20'>
                <div className='text-white'><p className='text-center Inter-Regular text-f12 lg:text-f16'>Disclaimer</p></div>
                <div className='hidden lg:block text-white Inter-regular text-f24 mt-8 leading-f48'>
                    <p className='text-center'>Gensler is not an actual client of MinuteCode Labs. This case was done for the</p>
                    <p className='text-center'>purpose of demonstrating the creative process of MinuteCode. All the content</p>
                    <p className='text-center'>materials used in the case study were taken from their public website and no</p>
                    <p className='text-center'>sensitive information has been displayed on the design.</p>
                </div>
                <div className='lg:hidden text-white Inter-regular text-f14 mt-8'>
                    <p className='text-center'>Gensler is not an actual client of MinuteCode</p>
                    <p className='text-center'>Labs. This case was done for the purpose of</p>
                    <p className='text-center'>demonstrating the creative process of Minute </p>
                    <p className='text-center'>Code. All the content materials used in the case</p>
                    <p className='text-center'>study were taken from their public website and</p>
                    <p className='text-center'>no sensitive information has been displayed</p>
                    <p className='text-center'>on the design.</p>
                </div>


            </div>

            <div>
                <div className="flex flex-col items-center my-24">
                    <h1 className="hidden lg:block Inter-Regular text-f50">Have something in mind?</h1>
                    <h1 className="lg:hidden Inter-Regular text-f25">Ready to grow?</h1>
                    <div className='flex lg:flex-row flex-col lg:space-x-4 space-y-4 lg:space-y-0 mt-6'>
                        <div className="bg-home-cap py-6 px-12 hover:cursor-pointer">
                            <NextLink href="/contact">
                                <a href="/contact" className="Inter-Regular text-gray-300">Write to us</a>
                            </NextLink>
                        </div>
                        <div className="bg-home-cap py-6 px-8 hover:cursor-pointer">
                            <NextLink href="/contact">
                                <a href="/contact" className="Inter-Regular text-gray-300">Start a Project</a>
                            </NextLink>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>

        </div >
    )
}

export default CaseStudy;