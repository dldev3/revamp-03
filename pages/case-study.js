import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import NextLink from 'next/link';

import React from 'react'

const CaseStudy = () => {
    return (
        <div className='container-mcl'>
            <Head>
                <title>Minutecode Labs | Case Study</title>
                <meta name="description" content="Best web development agency in USA, Canada and Europe" />
                <link rel="icon" href="/fav.png" />
            </Head>

            <div className="relative lg:-top-8 z-10">
                <Header></Header>
            </div>

            <div className="relative lg:-top-33 -top-16 z-0">
                <div className="">
                    <img src="/Resources/CaseStudy/cover.png" className="object-fill w-full lg:block hidden" />
                    <img src="/Resources/CaseStudy/mobile-hero.png" className="object-fill w-full lg:hidden" />
                </div>
            </div>


            <div className='flex flex-col justify-center text-center -mt-10 lg:-mt-28'>
                <h1 className='lg:text-f24 text-f12 Inter-Regular text-mcl-text-black'>Concept Case Study</h1>
            </div>
            <div className='hidden lg:flex flex-col justify-center text-center text-f40 Inter-Medium leading-f50 text-mcl-text-black'>
                <h1>Gensler: Reimagining the digital forefront in 2022</h1>
                <h1></h1>

            </div>
            <div className='flex lg:hidden text-f20 flex-col justify-center text-center Inter-Medium text-mcl-text-black'>
                <h1>Gensler: Reimagining the </h1>
                <h1>digital forefront in 2022</h1>
            </div>

            <div className='lg:mx-0 lg:mt-20 mt-12 mx-14'>
                {/* <div className='grid lg:grid-cols-3 grid-cols-1 gap-y-6 lg:gap-y-0'> */}
                <div className='flex lg:flex-row flec-col justify-center space-x-10 '>
                    <div>
                        <div className='lg:text-f16 text-f12 text-mcl-text-black Inter-Bold'><p>Background</p></div>
                        <div className='Inter-Regular text-f14 lg:text-f20 lg:leading-f40 mt-4 lg:mt-4'>
                            <p>Gensler is the world's largest design </p>
                            <p>firm that partners with clients to</p>
                            <p>create more livable cities, smarter </p>
                            <p>work places and more engaging</p>
                            <p>leisure destinations.</p>
                        </div>
                    </div>
                    <div>
                        <div className='lg:text-f16 text-f12 text-mcl-text-black Inter-Bold'><p>Challenge</p></div>
                        <div className='Inter-Regular text-f14 lg:text-f20 lg:leading-f40 mt-4 lg:mt-4'>
                            <div className='lg:block hidden'>
                                <p>Demonstrating and communicating</p>
                                <p>the expertise and prestige of</p>
                                <p>Gensler.</p>
                            </div>
                            <div className='lg:hidden'>
                                <p>Demonstrating and communicating</p>
                                <p>the expertise and prestige of Gensler.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='lg:text-f16 text-f12 text-mcl-text-black Inter-Bold'><p>Outcome</p></div>
                        <div className='Inter-Regular text-f14 lg:text-f20 lg:leading-f40 mt-4 lg:mt-4'>
                            <p>Reimagining the current homepage</p>
                            <p>to match the high standards of the</p>
                            <p>brand to better position themselves</p>
                            <p>as a pioneer in the industry.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:mx-24 mt-12'>
                <img className='w-full h-auto border border-gray-200' src="/Resources/CaseStudy/CurrentHome.png" alt="current_homepage" />
                <p className='text-center mt-6 lg:text-f16 text-f12 Inter-Bold'>Current homepage</p>
            </div>

            <div className='lg:mx-0 mx-8 flex flex-col justify-center items-center mt-10 Inter-Regular lg:text-f20 text-f14 lg:leading-f40'>
                <div>
                    <div className='text-left lg:block hidden mt-12'>
                        <p>Given the current market share and client base of Gensler, it was clear that they are not actively</p>
                        <p>looking to generate leads through their website. They are also a market and thought leader in</p>
                        <p>their space. Through our Discovery process, we understood their problem (opportunity in this</p>
                        <p>case) to be demonstrating and communicating their expertise to further establish their current</p>
                        <p>position.</p>
                    </div>
                    <div className='text-left lg:hidden leading-f22'>
                        <p>Given the current market share and client</p>
                        <p>base of Gensler, it was clear that they are not </p>
                        <p>actively looking to generate leads through their</p>
                        <p>website.They are also a market and thought</p>
                        <p>leader in their space.Through our Discovery</p>
                        <p>process, we understood their problem</p>
                        <p>(opportunity in this case) to be demonstrating</p>
                        <p>and communicating their expertise to further</p>
                        <p>establish their current position.</p>
                    </div>


                    <div className='mt-10 text-left lg:block hidden'>
                        <p>With our initial observation about lead generation, we identified 3 key users based on purpose</p>
                        <p>that might come into their site. They can be,</p>
                        <p>a) Investors,</p>
                        <p>b) peers, researchers and architecture enthusiasts,</p>
                        <p>c) brands with preference to building sustainable and futuristic physical spaces.</p>
                    </div>

                    <div className='mt-6 text-left lg:hidden leading-f22'>
                        <p>With our initial observation about lead </p>
                        <p>generation, we identified 3 key users based</p>
                        <p>on purpose that might come into their site.</p>
                        <p>They can be,</p>
                        <p>a) Investors,</p>
                        <p>b) peers, researchers and architecture enthusiasts,</p>
                        <p>c) brands with preference to building</p>
                        <p>sustainable and futuristic physical spaces.</p>
                    </div>


                    <div className='mt-10 text-left lg:block hidden'>
                        <p>All of these user segments have the <span className='Inter-SemiBold'>same intent of searching for information and statistics for</span></p>
                        <p><span className='Inter-SemiBold'>different purposes,</span> which the current homepage is lagging to facilitate efficiently.</p>
                    </div>

                    <div className='mt-6 text-left lg:hidden leading-f22'>
                        <p>All of these user segments have the <span className='Inter-SemiBold'>same</span></p>
                        <p><span className='Inter-SemiBold'>intent of searching for information and</span></p>
                        <p><span className='Inter-SemiBold'>statistics for different purposes,</span> which the</p>
                        <p>current homepage is lagging to facilitate</p>
                        <p>efficiently.</p>
                    </div>



                    <div className='mt-16 text-left lg:block hidden'>
                        <p>We managed to surface some common themes for the brand through their work.</p>
                    </div>

                    <div className='mt-6 text-left lg:hidden leading-f22'>
                        <p>We managed to surface some common</p>
                        <p>themes for the brand through their work.</p>
                    </div>


                    <div className='mt-8 text-left lg:block hidden'>
                        <p>1.) They are laser focused on innovations and their impact. This lead us to choosing their carbon</p>
                        <p>free goal to be included as the main headline for the homepage.</p>
                    </div>
                    <div className='mt-6 text-left lg:hidden leading-f22'>
                        <p>1.) They are laser focused on innovations and</p>
                        <p>their impact. This lead us to choosing their </p>
                        <p>carbon free goal to be included as the main</p>
                        <p>headline for the homepage.</p>
                    </div>



                    <div className='mt-8 text-left lg:block hidden'>
                        <p>2.) All their designs are professional, creative and vibrant. This understanding lead us to align the</p>
                        <p>redesign with the same aspects to better showcase their qualities.</p>
                    </div>
                    <div className='mt-6 text-left lg:hidden leading-f22'>
                        <p>2.) All their designs are professional, creative</p>
                        <p>and vibrant. This understanding lead us to </p>
                        <p>align the redesign with the same aspects to</p>
                        <p>better showcase their qualities.</p>
                    </div>

                </div>
            </div>

            <div className='md:mx-16 mt-20'>
                <img className='w-full h-auto' src="/Resources/CaseStudy/sketch.jpg" alt="sketch" />
                <p className='lg:text-f16 text-f12 text-center mt-4 Inter-Bold'>Sketch for the new homepage</p>
            </div>

            <div className='lg:mx-28 lg:mt-20 mt-10 mx-8'>
                <div className='flex lg:flex-row justify-center flex-col'>
                    <div className='lg:w-1/2 lg:text-f20 text-f14 lg:leading-f40 Inter-Regular leading-f22'>
                        <p>Based on our research and analysis, we drew</p>
                        <p>a sketch for the new homepage to structure</p>
                        <p>the new layout. We also identified the key</p>
                        <p>sections to include and how the navigation</p>
                        <p>should be placed.</p>
                    </div>
                    <div className='lg:w-1/2 lg:text-f20 text-f14 lg:leading-f40 mt-10 lg:mt-0 Inter-Regular leading-f22'>
                        <p>As a result, their research institute, projects,</p>
                        <p>blog and careers were selected respectively</p>
                        <p>as the homepage sections and we added a</p>
                        <p>new Call to Action for any inquiries that might</p>
                        <p>come in. User experience wise, it is a best</p>
                        <p>practice to include such a CTA.</p>
                    </div>

                </div>
            </div>

            <div className='lg:mx-24 mt-20'>
                <img src="/Resources/CaseStudy/WireframeHome.png" className='w-full h-auto' alt="wireframe" />
                <p className='mt-6 lg:text-f16 text-f12 text-center Inter-Bold'>Wireframe for the new homepage</p>
            </div>

            <div className='lg:mx-28 mx-8 lg:mt-20 mt-10'>
                <div className='flex lg:flex-row flex-col'>
                    <div className='lg:w-1/2 lg:text-f20 text-f14 lg:leading-f40 Inter-Regular leading-f22'>
                        <p>The navigation bar on the header was</p>
                        <p>designed to match the user journey of the 3</p>
                        <p>identified user segments. The rest were taken</p>
                        <p>inside a menu to simplify the journey.</p>
                    </div>
                    <div className='lg:w-1/2 lg:text-f20 text-f14 lg:leading-f40 mt-6 lg:mt-0 Inter-Regular leading-f22'>
                        <p>Content were taken to match the aspects we</p>
                        <p>chose to reflect from the themes we identified.</p>
                        <p>Information architecture was placed to help</p>
                        <p>a user navigate the site in a smooth flow.</p>
                    </div>
                </div>
            </div>
            <div className='lg:mx-28 mx-8 lg:mt-20 mt-10'>
                <div className='lg:block hidden text-f20 leading-f40 Inter-Regular'>
                    <p>Now that the ideation was done, we were next going to bring the wireframe to life through a visual</p>
                    <p>design. So we created a basic design system which documents the guidelines and measurements</p>
                    <p>of the design for easy use and understanding.</p>
                </div>
                <div className='lg:hidden text-f14 Inter-Regular leading-f22'>
                    <p>Now that the ideation was done, we were next</p>
                    <p>going to bring the wireframe to life through a </p>
                    <p>visual design. So we created a basic design </p>
                    <p>system which documents the guidelines and</p>
                    <p>measurements of the design for easy use and</p>
                    <p>understanding.</p>
                </div>
            </div>

            <div className='lg:mx-24 mt-20'>
                <img src="/Resources/CaseStudy/DesignSystem.png" className='h-auto w-full border border-gray-200' alt="design_system" />
                <p className='text-center mt-6 text-f12 lg:text-f14 Inter-Bold'>Design System</p>
            </div>

            <div className='lg:mx-24'>
                <img src="/Resources/CaseStudy/Scene-min.png" className='h-auto w-full' alt="scene" />
            </div>




            <div className='lg:mx-24 mx-2 flex flex-row space-x-4'>
                <div className='w-10/12 flex flex-col'>
                    <div className=''>
                        <img src="/Resources/CaseStudy/Redesigned-Home.png" alt="home-redesign" className='border border-gray-200' />
                    </div>

                    <div className='lg:mt-40 mt-12 lg:mx-0 mx-2'>
                        <div><p className='lg:text-f16 text-f12 Inter-Bold'>THE RESULT</p></div>
                        <div className='lg:block hidden text-f24 leading-f48 mt-4 Inter-Regular'>
                            <p>After careful curation of content, strategic placement of the layout,</p>
                            <p>and the design of the story for the new homepage, a new homepage</p>
                            <p>emerged to match the challenges and goals identified, and better</p>
                            <p>reflecting the position of Gensler.</p>
                        </div>
                        <div className='lg:hidden text-f14 leading-f22 mt-4 Inter-Regular'>
                            <p>After careful curation of content, strategic</p>
                            <p>placement of the layout, and the design of</p>
                            <p>the story for the new homepage, a new</p>
                            <p>homepage emerged to match the</p>
                            <p>challenges and goals identified, and</p>
                            <p>better reflecting the position of Gensler.</p>
                        </div>

                    </div>
                </div>

                <div className='w-2/12'>
                    <img className="border border-gray-200" src="/Resources/CaseStudy/Home-Mobile-min.png" alt="home-redesign-mobile" />
                </div>



            </div>






            <div className='bg-mcl-black lg:p-20 p-8 mt-20'>
                <div className='text-white'><p className='text-center Inter-Bold text-f12 lg:text-f16'>Disclaimer</p></div>
                <div className='hidden lg:block text-white Inter-regular text-f24 mt-8 leading-f48'>
                    <p className='text-center'>Gensler is not an actual client of MinuteCode Labs. This case was done for the</p>
                    <p className='text-center'>purpose of demonstrating the creative process of MinuteCode. All the content</p>
                    <p className='text-center'>materials used in the case study were taken from their public website and no</p>
                    <p className='text-center'>sensitive information has been displayed on the design.</p>
                </div>
                <div className='lg:hidden text-white Inter-Regular text-f14 mt-4 leading-f22'>
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
                    <h1 className="hidden lg:block Inter-Regular text-f40">Have something in mind?</h1>
                    <h1 className="lg:hidden Inter-Regular text-f25">Ready to grow?</h1>
                    <div className='flex lg:flex-row flex-col lg:space-x-4 space-y-4 lg:space-y-0 mt-6'>
                        <div className="bg-home-cap py-6 px-12 hover:cursor-pointer">
                            <a href="mailto:minutecodelabs@gmail.com" className="Inter-Regular text-gray-300">Write to us</a>
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