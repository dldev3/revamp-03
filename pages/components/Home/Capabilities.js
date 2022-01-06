import NextLink from 'next/link';

const Capabilities = () => {
	return (

		<div>
			<div className="flex flex-row">
				<div className="w-5/12">
					<img className="w-full h-screen object-cover" src="/Resources/Home/home-capabilities.jpg" alt="home-capabilities" />
				</div>
				<div className="w-7/12 bg-home-cap">
					<div className="flex flex-col p-12 ml-12 mt-6">
						<div className="Inter-Regular text-f50 text-white leading-f50 tracking-wide">
							<h1>We empower the</h1>
							<h1 className="Inter-SemiBold">Designers and Builders</h1>
							<h1>of 21<sup>st</sup> century</h1>
						</div>
						<div className="text-f24 leading-f24 text-white mt-20">
							<p>We help home professionals build awareness,</p>
							<p>gain happier customers and drive revenues by</p>
							<p>designing strategic and engaging websites.</p>
						</div>
						<div className="mt-24 Inter-Regular">
							<NextLink href="/capabilities"><a href="/capabilities" className="text-gray-200 text-f16 uppercase underline underline-offset-2">see our capabilities</a></NextLink>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Capabilities;
