const Landing = () => {
    return (
        <div>
            <div className="relative -top-33 z-0">
                <div className="h-screen">
                    <img src="/Resources/Capabilities/capabilities-hero.jpg" className="object-fill w-full lg:block hidden" />
                    <img src="/Resources/Mobile/Capabilities-mobile-hero.png" className="object-fill w-full lg:hidden" />
                </div>
            </div>

            <div className="lg:mx-36 relative bottom-100">
                <div className="text-white text-f14 lg:text-f24 Inter-Regular mt-12">
                    <p>What we do</p>
                </div>
                <div className="lg:block hidden text-white text-f50 leading-f50 Inter-Regular tracking-wide mt-4">
                    <h1 className="drop-shadow-md">We create simple designs, meaningful</h1>
                    <h1 className="drop-shadow-md">journeys and converting experience.</h1>
                </div>

                <div className="lg:hidden text-f25 text-white Inter-Regular">
                    <p>We create simple</p>
                    <p>designs, meaningful</p>
                    <p>journeys and converitng</p>
                    <p>experiences</p>
                </div>

            </div>

        </div>
    )
}

export default Landing;

