import React from 'react';
import NextLink from 'next/link';

const OurProcess = () => {
    return (
        <div className='md:mx-44 mt-20'>

            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <img className="w-full h-96" src="/Resources/Home/home-roadmap.jpg" alt="img-roadmap" />
                    <div className="Inter-Regular leading-f24-high text-f24 text-gray-700">
                        <p>We envision becoming a full-service creative</p>
                        <p>agency that can help the growth of home</p>
                        <p>professionals in the connected world</p>
                    </div>
                    <div className="mt-20">
                        <NextLink href="/roadmap"><a href="/roadmap" className="text-f16 uppercase underline underline-offset-4">see our roadmap</a></NextLink>
                    </div>
                </div>
                <div>
                    <img className="w-full h-96" src="/Resources/Home/home-process.jpg" alt="our-process-img" />
                    <div className="Inter-Regular text-f24 leading-f24-high text-gray-700">
                        <p>We envision becoming a full-service creative</p>
                        <p>agency that can help the growth of home</p>
                        <p>professionals in the connected world</p>
                    </div>
                    <div className="mt-20">
                        <NextLink href="/process"><a href="/process" className="text-f16 uppercase underline underline-offset-4">see our process</a></NextLink>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default OurProcess;

