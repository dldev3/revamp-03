import NextLink from 'next/link';
import { ArrowSmDownIcon } from '@heroicons/react/solid'

const Design = () => {
    return (
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
    );
}

export default Design;