const Landing = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <div className="relative -top-33 landing-section flex flex-row justify-center z-0">
                    <div className="w-7/12 bg-hero-dark h-screen">
                    </div>
                    <div className="w-5/12 h-screen">
                        <img src="/Resources/Home/home-hero.jpg" className="object-cover h-screen" />
                    </div>
                </div>

                <div className="md:mx-36 relative bottom-102">
                    <div className="text-white text-f50 leading-f50 Inter-Medium tracking-wide">
                        <h1 className="drop-shadow-md">Creative solutions. For the</h1>
                        <h1 className="drop-shadow-md">creators of modern day dream homes.</h1>
                    </div>
                    <div className="text-white text-f24 Inter-Regular mt-12">
                        <p>We are a creative agency for home professionals.</p>
                    </div>
                </div>
            </div>

            {/* mobile */}
            <div className="lg:hidden relative -top-20 landing-section">
                <div className="bg-mcl-black p-12">
                    <div className="text-white text-f25 leading-f33 Inter-Regular mt-16">
                        <h1 className="drop-shadow-md">Creative solutions. For </h1>
                        <h1 className="drop-shadow-md">the creators of modern</h1>
                        <h1 className="drop-shadow-md">day dream homes.</h1>
                    </div>
                    <div className="text-white text-f14 leading-f26 Inter-Regular mt-12">
                        <p>We are a creative agency for home </p>
                        <p>professionals.</p>
                    </div>
                </div>
                <div>
                    <img src="/Resources/Home/home-hero.jpg" className="object-cover h-auto w-auto" />
                </div>
            </div>
            {/* mobile end */}
        </div>

    )
}

export default Landing;