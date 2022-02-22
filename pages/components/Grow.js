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
        <div data-scroll className="flex flex-col items-center my-24">
            <h1 className="Inter-Medium lg:text-f40 text-f25">Ready to Talk?</h1>
            <div className="bg-home-cap mt-6 py-5 px-8 ">
                <NextLink href="/contact">
                    <a href="/contact" className="Inter-Regular text-gray-300">Start a Project</a>
                </NextLink>
            </div>
        </div>
    );
}

export default Grow;
