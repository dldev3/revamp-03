import NextLink from 'next/link';
import ScrollOut from "scroll-out";
import { useEffect } from 'react';

const Grow = () => {
    useEffect(() => {
        ScrollOut({
            threshold: .8,
            once: true
        });

        ScrollOut();
    }, []);
    return (
        <div data-scroll className="flex flex-col items-center my-20">
            <h1 className="Inter-Medium lg:text-f40 text-f25">Ready to become a lead magnet?</h1>
            <div className="bg-home-cap mt-6 md:py-5 md:px-8 py-3 px-4">
                <NextLink href="/contact">
                    <a href="/contact" className="Inter-Regular text-gray-100 md:text-f20 text-f12">Book your Discovery call</a>
                </NextLink>
            </div>
        </div>
    );
}

export default Grow;
