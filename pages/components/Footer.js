import NextLink from 'next/link';
const Footer = () => {
    return (
        <div className="bg-hero-dark">
            <div className='hidden lg:block'>
                <div className="flex flex-row justify-between pt-6 mx-24">
                    <div className="w-1/3">
                        <NextLink href="/"><a href="/"><img className="object-cover w-187px h-46px" src="Resources/About/Logo.png" alt="logo" /></a></NextLink>
                    </div>
                    <div className="w-1/3 text-f18 Inter-Regular text-gray-300 flex flex-row justify-center space-x-4">
                        <NextLink href="/capabilities"><a href="capabilities">Capabilities</a></NextLink>
                        <NextLink href="/case-study"><a href="/case-study">Case Studies</a></NextLink>
                        <NextLink href="/about"><a href="/about">About</a></NextLink>
                        <NextLink href="/contact"><a href="/contact">Contact</a></NextLink>
                    </div>
                    <div className="w-1/3 flex flex-row justify-end space-x-2">
                        <a rel="noopener noreferrer" className="" target="_blank" href="https://lk.linkedin.com/in/janitha-jay"><img className="w-8 h-8" src="/Resources/Home/SMI/in.svg" alt="linkedin"></img></a>
                    </div>
                </div>
                <div className="pb-6 text-gray-300 text-center mt-4">
                    <p className="Inter-Light text-f16">©2022 MinuteCode Labs. All rights reserved.</p>
                </div>
            </div>
            {/* mobile footer */}
            <div className='lg:hidden'>
                <div className='flex flex-col justify-center items-center p-6'><NextLink href="/"><a href="/"><img className="object-cover w-187px h-46px" src="Resources/About/Logo.png" alt="logo" /></a></NextLink></div>
                <div className='Inter-Regular flex flex-col justify-center items-center space-y-6 text-gray-300 mt-5'>
                    <NextLink href="/capabilities"><a href="capabilities">Capabilities</a></NextLink>
                    <NextLink href="/case-study"><a href="/case-study">Case Studies</a></NextLink>
                    <NextLink href="/about"><a href="/about">About</a></NextLink>
                    <NextLink href="/contact"><a href="/contact">Contact</a></NextLink>
                </div>
                <div className='my-6'>
                    <div className="flex flex-row justify-center space-x-2">
                        <a rel="noopener noreferrer" target="_blank" href="https://lk.linkedin.com/in/janitha-jay"><img className="w-8 h-8" src="/Resources/Home/SMI/in.svg" alt="linkedin"></img></a>
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
