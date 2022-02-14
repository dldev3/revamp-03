import NextLink from 'next/link';
const Develop = () => {
    return (
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
    );
}

export default Develop;