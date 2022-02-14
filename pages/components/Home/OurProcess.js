import NextLink from 'next/link';

const OurProcess = () => {
    return (
        <div className="lg:mx-36">
            <div className="flex lg:flex-row flex-col">
                <div className="lg:w-1/2">
                    <img className="w-full h-full" src="/Resources/Home/home-roadmap.jpg" alt="img-roadmap" />
                </div>
                <div className="lg:w-1/2 p-12">
                    <div className="Inter-Regular leading-f24-high text-f14 lg:text-f24 text-gray-700">
                        <p>We envision becoming a full-service creative</p>
                        <p>agency that can help the growth of home</p>
                        <p>professionals in the connected world</p>
                    </div>
                    <div className="lg:mt-20 mt-12">
                        <NextLink href="/our-process"><a href="/our-process" className="text-f16 uppercase underline underline-offset-4">see our process</a></NextLink>
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col-reverse">
                <div className="lg:w-1/2 p-12">
                    <div className="Inter-Regular text-f14 lg:text-f24 leading-f24-high text-gray-700">
                        <p>Our clear cut process helps you take a journey</p>
                        <p>from mere discovery of a problem to a creative</p>
                        <p>solution that delivers results.</p>
                    </div>
                    <div className="lg:mt-20 mt-12">
                        <NextLink href="/our-process"><a href="/our-process" className="text-f16 uppercase underline underline-offset-4">see our process</a></NextLink>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img className="w-full h-full" src="/Resources/Home/home-process.jpg" alt="our-process-img" />
                </div>
            </div>




        </div>
    )
}

export default OurProcess;
