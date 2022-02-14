const DreamClients = () => {
	return (
		<div>

			<div className="hidden lg:flex flex-row">
				<div className="bg-home-cap p-6 text-gray-300"><p className="Inter-Regular">Our Dream Clients</p></div>

				<div className="flex flex-1 grow-1 space-x-10 bg-gray-800">
					<div className="py-6 text-gray-500 ml-4"><p className="Inter-Regular px-6 border-r-2 border-gray-700">Architects</p></div>
					<div className="py-6 text-gray-500"><p className="Inter-Regular px-6 border-r-2 border-gray-700">Interior Designers</p></div>
					<div className="py-6 text-gray-500"><p className="Inter-Regular px-6 border-r-2 border-gray-700">Landscapers</p></div>
					<div className="py-6 text-gray-500"><p className="Inter-Regular px-6 border-r-2 border-gray-700">Custom Home Builders</p></div>				<div className="py-6 text-gray-500"><p className="Inter-Regular px-6 border-r-2 border-gray-700">Landscape Architects</p></div>
					<div className="py-6 text-gray-500"><p className="Inter-Regular">Design and Build Firms</p></div>
				</div>
			</div>

			{/* mobile */}
			<div className="lg:hidden flex flex-col ">
				<div className="bg-home-cap p-6"><p className="text-f14 Inter-Regular text-gray-300 text-center p-2">Our Dream Clients</p></div>
				<div className="p-6 bg-mcl-gray"><p className="text-f14 Inter-Regular p-2 text-gray-300 text-center">Architects</p></div>
				<div className="p-6 bg-mcl-gray"><p className="text-f14 Inter-Regular p-2 text-gray-300 text-center">Interior Designers</p></div>
				<div className="p-6 bg-mcl-gray"><p className="text-f14 Inter-Regular p-2 text-gray-300 text-center">Landscapers</p></div>
				<div className="p-6 bg-mcl-gray"><p className="text-f14 Inter-Regular p-2 text-gray-300 text-center">Custom Home Builders</p></div>
				<div className="p-6 bg-mcl-gray"><p className="text-f14 Inter-Regular p-2 text-gray-300 text-center">Landscape Architects</p></div>
				<div className="p-6 bg-mcl-gray"><p className="text-f14 Inter-Regular p-2 text-gray-300 text-center">Design and Build Firms</p></div>
			</div>
			{/* mobile ends */}

		</div>

	)
}


export default DreamClients;
