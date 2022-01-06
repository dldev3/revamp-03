import NextLink from 'next/link';
const Footer = () => {
    return (
        <div className="bg-hero-dark">

            <div className="flex flex-row justify-between pt-6 mx-24">
                <div className="w-1/3">
                    <NextLink href="/"><a href="/"><img className="object-cover w-48 h-12" src="Resources/About/Logo.png" alt="logo" /></a></NextLink>
                </div>
                <div className="w-1/3 text-f18 Inter-Regular text-gray-300 flex flex-row justify-center space-x-6">
                    <NextLink href="/capabilities"><a href="capabilities">Capabilities</a></NextLink>
                    <NextLink href="/works"><a href="/works">Works</a></NextLink>
                    <NextLink href="/about"><a href="/about">About</a></NextLink>
                    <NextLink href="/contact"><a href="/contact">Contact</a></NextLink>
                </div>
                <div className="w-1/3 flex flex-row justify-end space-x-2">
                    <a rel="noopener noreferrer" className="" href="#"><img className="w-8 h-8" src="/Resources/Home/SMI/fb.svg" alt="facebook" ></img></a>
                    <a rel="noopener noreferrer" className="" href="#"><img className="w-8 h-8" src="/Resources/Home/SMI/ig.svg" alt="instagram"></img></a>
                    <a rel="noopener noreferrer" className="" href="#"><img className="w-8 h-8" src="/Resources/Home/SMI/in.svg" alt="linkedin"></img></a>
                    <a rel="noopener noreferrer" className="" href="#"><img className="w-8 h-8" src="/Resources/Home/SMI/be.svg" alt="behance"></img></a>
                </div>
            </div>
            <div className="pb-6 text-gray-300 text-center">
                <p className="Inter-Light text-f16">©2021 MinuteCode Labs. All rights reserved.</p>
            </div>
            

        </div>
    );
}

export default Footer;
