import NextLink from 'next/link';

const Grow = () => {
    return (
        <div className="flex flex-col items-center my-24">
            <h1 className="Inter-Medium lg:text-f50 text-f25">Ready to Talk?</h1>
            <div className="bg-home-cap mt-6 py-5 px-8 ">
                <NextLink href="/contact">
                    <a href="/contact" className="Inter-Regular text-gray-300">Start a Project</a>
                </NextLink>
            </div>
        </div>
    );
}

export default Grow;
