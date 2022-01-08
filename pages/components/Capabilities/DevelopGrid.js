const DevelopGrid = () => {
    return (
        <div className="grid grid-cols-4">

            <div>
                <div>
                    <img className="h-64 w-full" src="/Resources/Capabilities/custom-development.jpg" alt="custom-development" />
                </div>
                <div className="bg-mcl-black p-6 h-60">
                    <h2 className="Inter-Medium text-f20 text-gray-300">Custom Development</h2>
                    <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">From scratch building of a solution without the use of website builders and templates of any kind.</p>
                </div>
            </div>
            <div>
                <div>
                    <img className="h-64 w-full" src="/Resources/Capabilities/migration.jpg" alt="migration" />
                </div>
                <div className="bg-mcl-gray p-6 h-60">
                    <h2 className="Inter-Medium text-f20 text-gray-300">Migration</h2>
                    <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">Taking a website from one place to another place on the internet without harming the good side of the current location.</p>
                </div>
            </div>
            <div>
                <div>
                    <img className="h-64 w-full" src="/Resources/Capabilities/infrastructure.jpg" alt="infrastructure" />
                </div>
                <div className="bg-mcl-black p-6 h-60">
                    <h2 className="Inter-Medium text-f20 text-gray-300">Infrastructure</h2>
                    <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">The basic digital structures and facilities needed for the operation of a website.</p>
                </div>
            </div>
            <div>
                <div>
                    <img className="h-64 w-full" src="/Resources/Capabilities/maintenance.jpg" alt="maintenance" />
                </div>
                <div className="bg-mcl-gray p-6 h-60">
                    <h2 className="Inter-Medium text-f20 text-gray-300">On-Going Support</h2>
                    <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">From maintenance to scaling a built solution with the growth of a brand.</p>
                </div>
            </div>

        </div>
    )
}

export default DevelopGrid;