import NextLink from 'next/link';
const Footer = () => {
    return (
        <div className="bg-hero-dark">

            <div className='hidden lg:block container-mcl'>
                <div className="pt-6 mx-24">
                    <div>
                        <p className='Inter-Regular text-f18 text-white'>Interested in working with us? Let’s get to work!</p>
                        <a className="Inter-Regular text-f25 text-white" href="mailto:janithajay.design@gmail.com">janithajay.design@gmail.com</a>
                    </div>
                    <div className='mt-32 flex flex-row border-b-white border-b-2 pb-5'>
                        <div className="mx-2 w-1/2 flex flex-row justify-start items-start text-f18 Inter-Regular text-gray-300 space-x-4">
                            <NextLink href="/case-study"><a href="/case-study">Case Studies</a></NextLink>
                            <NextLink href="/process"><a href="/process">Process</a></NextLink>
                            <NextLink href="/capabilities"><a href="capabilities">Capabilities</a></NextLink>
                            <NextLink href="/about"><a href="/about">About</a></NextLink>
                            <NextLink href="/contact"><a href="/contact">Contact</a></NextLink>
                        </div>
                        <div className='w-1/2 flex flex-row justify-end items-end text-f18 Inter-Regular text-gray-300'>
                            <a rel="noopener noreferrer" className="" target="_blank" href="https://lk.linkedin.com/in/janitha-jay">LinkedIn</a>
                        </div>
                    </div>
                    <div className="pb-6 text-gray-300 text-left mt-4">
                        <p className="Inter-Light text-f16">©2022 MinuteCode Labs. All rights reserved.</p>
                    </div>
                </div>

            </div>

            {/* mobile footer */}
            <div className='lg:hidden'>

                <div className='p-6'>
                    <p className='Inter-Regular text-f14 text-white'>Interested in working with us? Let’s get to work!</p>
                    <a className="Inter-Regular text-f16 text-white" href="mailto:janithajay.design@gmail.com">janithajay.design@gmail.com</a>
                </div>
                <div className='p-6 text-f16 Inter-Regular flex flex-col justify-start items-start space-y-3 text-gray-300 mt-5'>
                    <NextLink href="/capabilities"><a href="capabilities">Capabilities</a></NextLink>
                    <NextLink href="/case-study"><a href="/case-study">Case Studies</a></NextLink>
                    <NextLink href="/about"><a href="/about">About</a></NextLink>
                    <NextLink href="/contact"><a href="/contact">Contact</a></NextLink>
                </div>
                <div className='my-6 p-6'>
                    <div className="flex flex-row justify-start space-x-2">
                        <a className='underline text-gray-300 text-f16' rel="noopener noreferrer" target="_blank" href="https://lk.linkedin.com/in/janitha-jay">LinkedIn</a>
                    </div>
                </div>
                <div className='p-6'>
                    <div className="text-gray-300 text-center border-t-2 border-white">
                        <p className="Inter-Light text-f10 pt-4">©2022 MinuteCode Labs. All rights reserved.</p>
                    </div>
                </div>
            </div>
            {/* mobile footer ends */}

        </div>
    );
}

export default Footer;
