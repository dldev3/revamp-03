import NextLink from 'next/link';

const OurProcess = () => {
    return (
        <div className="md:mx-36">
            <div className="flex flex-row">
                <div className="w-1/2">
                    <img className="w-full h-full" src="/Resources/Home/home-roadmap.jpg" alt="img-roadmap" />
                </div>
                <div className="w-1/2 p-12">
                    <div className="Inter-Regular leading-f24-high text-f24 text-gray-700">
                        <p>We envision becoming a full-service creative</p>
                        <p>agency that can help the growth of home</p>
                        <p>professionals in the connected world</p>
                    </div>
                    <div className="mt-20">
                        <NextLink href="/our-process"><a href="/our-process" className="text-f16 uppercase underline underline-offset-4">see our process</a></NextLink>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/2 p-12">
                    <div className="Inter-Regular text-f24 leading-f24-high text-gray-700">
                        <p>We envision becoming a full-service creative</p>
                        <p>agency that can help the growth of home</p>
                        <p>professionals in the connected world</p>
                    </div>
                    <div className="mt-20">
                        <NextLink href="/our-process"><a href="/our-process" className="text-f16 uppercase underline underline-offset-4">see our process</a></NextLink>
                    </div>

                </div>
                <div className="w-1/2">
                    <img className="w-full h-full" src="/Resources/Home/home-process.jpg" alt="our-process-img" />
                </div>
            </div>




        </div>
    )
}

export default OurProcess;
