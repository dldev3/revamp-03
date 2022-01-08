const DesignGrid = () => {
    return (
        <div className="grid grid-cols-4">

            <div>
                <div>
                    <img className="h-64 w-full" src="/Resources/Capabilities/research.jpg" alt="research" />
                </div>
                <div className="bg-mcl-black p-6 h-60">
                    <h2 className="Inter-Medium text-f20 text-gray-300">Discovery & Research</h2>
                    <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">A design is a solution to a problem. To create a design that solves, identifying the problems and needs are is and must be the first step.</p>
                </div>
            </div>
            <div>
                <div>
                    <img className="h-64 w-full" src="/Resources/Capabilities/wireframing.jpg" alt="wireframing" />
                </div>
                <div className="bg-mcl-gray p-6 h-60">
                    <h2 className="Inter-Medium text-f20 text-gray-300">Wireframes & Prototypes</h2>
                    <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">A wireframe displays the structure while a prototype displays the interactions within. Collectively, they make the decision making and the effectiveness of a solution optimum.</p>
                </div>
            </div>
            <div>
                <div>
                    <img className="h-64 w-full" src="/Resources/Capabilities/design-system.jpg" alt="design-system" />
                </div>
                <div className="bg-mcl-black p-6 h-60">
                    <h2 className="Inter-Medium text-f20 text-gray-300">Design Systems</h2>
                    <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">A design system lays the foundations for a good design as it sets the standards and the patterns of a specific design.</p>
                </div>
            </div>
            <div>
                <div>
                    <img className="h-64 w-full" src="/Resources/Capabilities/responsive.jpg" alt="responsive" />
                </div>
                <div className="bg-mcl-gray p-6 h-60">
                    <h2 className="Inter-Medium text-f20 text-gray-300">Responsive Designing</h2>
                    <p className="Inter-Regular text-f14 leading-f24-low text-gray-300 mt-4">From a desktop to tablets and mobiles, responsive designs adapt smoothly to any and all device screens perfectly.</p>
                </div>
            </div>

        </div>
    )
}

export default DesignGrid;