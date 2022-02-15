import Head from 'next/head';
import Header from './components/Header';
import Grow from './components/Grow';
import Footer from './components/Footer';
import NextLink from 'next/link';

export default function Home() {
    return (
        <div className="container-mcl">
            <Head>
                <title>Minutecode Labs | Capabilities</title>
                <meta name="description" content="Best web development agency in USA, Canada and Europe" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <div className="relative lg:-top-5 z-10">
                <Header></Header>
            </div>

            {/* Landing page */}
            <div>
                <div>
                    <div className="relative -top-33 z-0">
                        <div className="h-screen">
                            <img src="/Resources/Capabilities/capabilities-hero.jpg" className="object-fill w-full lg:block hidden" />
                            <img src="/Resources/Mobile/Capabilities-mobile-hero.png" className="object-fill w-full lg:hidden" />
                        </div>
                    </div>

                    <div className="lg:mx-36 relative lg:bottom-100 bottom-104 mx-12">
                        <div className="text-white text-f14 lg:text-f24 Inter-Regular mt-12">
                            <p>What we do</p>
                        </div>
                        <div className="lg:block hidden text-white text-f50 leading-f50 Inter-Regular tracking-wide mt-4">
                            <h1 className="drop-shadow-md">We create simple designs, meaningful</h1>
                            <h1 className="drop-shadow-md">journeys and converting experience.</h1>
                        </div>

                        <div className="lg:hidden text-f25 text-white Inter-Regular mt-8">
                            <p>We create simple</p>
                            <p>designs, meaningful</p>
                            <p>journeys and converitng</p>
                            <p>experiences</p>
                        </div>

                    </div>

                </div>
            </div>


            <div className='lg:mx-36 flex lg:flex-row flex-col mx-12 -mt-103 lg:-mt-40'>
                <div className='lg:w-3/12'>
                    <p className='Inter-Regular lg:text-f16 text-f12 lg:p-2 text-gray-700'>How we do it</p>
                </div>
                <div className='lg:w-9/12 lg:text-f50 text-f14 Inter-Regular lg:leading-f50 leading-f24 text-gray-700 mt-2 lg:mt-0'>
                    <h1>We let creativity meet strategy to</h1>
                    <h1>solve problems</h1>
                </div>
            </div>

            {/* Designing */}
            <div className='mt-24'>
                <div className='flex lg:flex-row flex-col'>
                    <div className="lg:w-5/12 bg-mcl-blue py-16">
                        <div className='mx-28 lg:mt-24'>
                            <div className=''>
                                <h1 className='lg:text-f50 text-f25 text-gray-200'>Designing</h1>
                            </div>
                            <div className='text-f14 lg:text-f24 lg:leading-f24 leading-f26 mt-6 text-gray-200'>
                                <p>Every brand has a story to tell.</p>
                                <p>we thoughfully organize and</p>
                                <p>present a design that brings brand</p>
                                <p>stories to life in a meaningful way</p>
                            </div>
                            <div className='max-w-fit border-white border-b-2 mt-20'>
                                <NextLink href="/contact">
                                    <a href="/contact" className='flex flex-row text-white'><span className='uppercase'>Tell me more</span><span className=""><img className='ml-1 w-auto h-4 mt-1' src="/Resources/About/Arrow-copy.svg" alt="arrow" /></span></a>
                                </NextLink>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-7/12">
                        <img className='w-auto object-cover' src="/Resources/Capabilities/web-design.jpg" alt="img" />
                    </div>

                </div>
            </div>

            {/* Design grid */}
            <div className=''>
                <div className="grid grid-cols-2 lg:grid-cols-4">

                    <div>
                        <div>
                            <img className="lg:h-64 h-72 w-full" src="/Resources/Capabilities/research.jpg" alt="research" />
                        </div>
                        <div className="bg-mcl-black p-6 h-60">
                            <h2 className="Inter-Medium text-f20 text-gray-300">Discovery & Research</h2>
                            <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">A design is a solution to a problem. To create a design that solves, identifying the problems and needs are is and must be the first step.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="lg:h-64 h-72 w-full" src="/Resources/Capabilities/wireframing.jpg" alt="wireframing" />
                        </div>
                        <div className="bg-mcl-gray p-6 h-60">
                            <h2 className="Inter-Medium text-f20 text-gray-300">Wireframes & Prototypes</h2>
                            <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">A wireframe displays the structure while a prototype displays the interactions within. Collectively, they make the decision making and the effectiveness of a solution optimum.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="lg:h-64 h-72 w-full" src="/Resources/Capabilities/design-system.jpg" alt="design-system" />
                        </div>
                        <div className="bg-mcl-black p-6 h-60">
                            <h2 className="Inter-Medium text-f20 text-gray-300">Design Systems</h2>
                            <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">A design system lays the foundations for a good design as it sets the standards and the patterns of a specific design.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="lg:h-64 h-72 w-full" src="/Resources/Capabilities/responsive.jpg" alt="responsive" />
                        </div>
                        <div className="bg-mcl-gray p-6 h-60">
                            <h2 className="Inter-Medium text-f20 text-gray-300">Responsive Designing</h2>
                            <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">From a desktop to tablets and mobiles, responsive designs adapt smoothly to any and all device screens perfectly.</p>
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
                            <div className='mx-28 lg:mt-24'>
                                <div className=''>
                                    <h1 className='lg:text-f50 text-f25 text-gray-200'>Development</h1>
                                </div>
                                <div className='text-f14 lg:text-f24 leading-f24 mt-6 text-gray-200'>
                                    <p>Our goal is to build a solution that</p>
                                    <p>is specific to a brand, performing,</p>
                                    <p>and future proof, setting the stage</p>
                                    <p>for brand stories come to life.</p>
                                </div>
                                <div className='max-w-fit border-white border-b-2 mt-10 lg:mt-20'>
                                    <NextLink href="/contact">
                                        <a href="/contact" className='flex flex-row text-white '><span className='uppercase'>Tell me more</span><span className=""><img className='ml-1 w-auto h-4 mt-1 animate-bounce' src="/Resources/About/Arrow-copy.svg" alt="arrow" /></span></a>
                                    </NextLink>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Development grid */}
            <div>
                <div className="grid grid-cols-2 lg:grid-cols-4">

                    <div>
                        <div>
                            <img className="h-64 w-full" src="/Resources/Capabilities/custom-development.jpg" alt="custom-development" />
                        </div>
                        <div className="bg-mcl-black p-6 h-60">
                            <h2 className="Inter-Medium text-f20 text-gray-300">Custom Development</h2>
                            <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">From scratch building of a solution without the use of website builders and templates of any kind.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="h-64 w-full" src="/Resources/Capabilities/migration.jpg" alt="migration" />
                        </div>
                        <div className="bg-mcl-gray p-6 h-60">
                            <h2 className="Inter-Medium text-f20 text-gray-300">Migration</h2>
                            <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">Taking a website from one place to another place on the internet without harming the good side of the current location.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="h-64 w-full" src="/Resources/Capabilities/infrastructure.jpg" alt="infrastructure" />
                        </div>
                        <div className="bg-mcl-black p-6 h-60">
                            <h2 className="Inter-Medium text-f20 text-gray-300">Infrastructure</h2>
                            <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">The basic digital structures and facilities needed for the operation of a website.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="h-64 w-full" src="/Resources/Capabilities/maintenance.jpg" alt="maintenance" />
                        </div>
                        <div className="bg-mcl-gray p-6 h-60">
                            <h2 className="Inter-Medium text-f20 text-gray-300">On-Going Support</h2>
                            <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">From maintenance to scaling a built solution with the growth of a brand.</p>
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
