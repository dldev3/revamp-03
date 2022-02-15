import NextLink from 'next/link';
const Footer = () => {
    return (
        <div className="bg-hero-dark">
            <div className='hidden lg:block'>
                <div className="flex flex-row justify-between pt-6 mx-24">
                    <div className="w-1/3">
                        <NextLink href="/"><a href="/"><img className="object-cover w-48 h-12" src="Resources/About/Logo.png" alt="logo" /></a></NextLink>
                    </div>
                    <div className="w-1/3 text-f18 Inter-Regular text-gray-300 flex flex-row justify-center space-x-6">
                        <NextLink href="/capabilities"><a href="capabilities">Capabilities</a></NextLink>
                        <NextLink href="/case-study"><a href="/case-study">Case Study</a></NextLink>
                        <NextLink href="/about"><a href="/about">About</a></NextLink>
                        <NextLink href="/contact"><a href="/contact">Contact</a></NextLink>
                    </div>
                    <div className="w-1/3 flex flex-row justify-end space-x-2">
                        <a rel="noopener noreferrer" className="" href="#"><img className="w-8 h-8" src="/Resources/Home/SMI/in.svg" alt="linkedin"></img></a>
                    </div>
                </div>
                <div className="pb-6 text-gray-300 text-center">
                    <p className="Inter-Light text-f16">©2022 MinuteCode Labs. All rights reserved.</p>
                </div>
            </div>
            {/* mobile footer */}
            <div className='lg:hidden'>
                <div className='flex flex-col justify-center items-center p-4'><NextLink href="/"><a href="/"><img className="object-cover w-48 h-12" src="Resources/About/Logo.png" alt="logo" /></a></NextLink></div>
                <div className='flex flex-col justify-center items-center space-y-4 text-gray-300'>
                    <NextLink href="/capabilities"><a href="capabilities">Capabilities</a></NextLink>
                    <NextLink href="/case-study"><a href="/case-study">Case Study</a></NextLink>
                    <NextLink href="/about"><a href="/about">About</a></NextLink>
                    <NextLink href="/contact"><a href="/contact">Contact</a></NextLink>
                </div>
                <div className='my-4'>
                    <div className="flex flex-row justify-center space-x-2">
                        <a rel="noopener noreferrer" className="" href="#"><img className="w-8 h-8" src="/Resources/Home/SMI/in.svg" alt="linkedin"></img></a>
                    </div>
                </div>
                <div>
                    <div className="pb-6 text-gray-300 text-center">
                        <p className="Inter-Light lg:text-f16 text-f10">©2022 MinuteCode Labs. All rights reserved.</p>
                    </div>
                </div>
            </div>
            {/* mobile footer ends */}
        </div>
    );
}

export default Footer;
