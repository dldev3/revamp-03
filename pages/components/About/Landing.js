const Landing = () => {
    return (
        <div>
            <div className="relative -top-33 z-0">
                <div className="">
                    <img src="/Resources/About/about-hero.jpg" className="object-cover w-full h-screen" />
                </div>
            </div>

            <div className="md:mx-36 relative bottom-100">
                <div className="text-white text-f24 Inter-Regular mt-12">
                    <p>Our work ethic</p>
                </div>
                <div className="text-white text-f50 leading-f50 Inter-Regular tracking-wide mt-4">
                    <h1 className="drop-shadow-md">A prescription without diagnosis</h1>
                    <h1 className="drop-shadow-md">is a malpractice</h1>
                </div>

            </div>

        </div>
    )
}

export default Landing;

