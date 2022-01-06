const Landing = () => {
    return (
        <div>
            <div className="relative -top-36 landing-section flex flex-row justify-center z-0">
                <div className="w-7/12 bg-hero-dark h-screen">
                </div>
                <div className="w-5/12 h-screen">
                    <img src="/Resources/Home/home-hero.jpg" className="object-cover h-screen" />
                </div>
            </div>

            <div className="md:mx-36 relative bottom-hero-tagline-spacing">
                <div className="text-white text-f50 leading-f50 Inter-Medium tracking-wide">
                    <h1 className="drop-shadow-md">Creative solutions. For the</h1>
                    <h1 className="drop-shadow-md">creators of modern day dream homes.</h1>
                </div>
                <div className="text-white text-f24 Inter-Regular mt-12">
                    <p>We are a creative agency for home porfessionals.</p>
                </div>
            </div>
        </div>


    )
}

export default Landing;