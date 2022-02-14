import NextLink from 'next/link';

const Capabilities = () => {
	return (

		<div>
			<div className="flex lg:flex-row flex-col-reverse">
				<div className="lg:w-5/12">
					<img className="w-full h-screen object-cover" src="/Resources/Home/home-capabilities.jpg" alt="home-capabilities" />
				</div>
				<div className="lg:w-7/12 bg-home-cap">
					<div className="flex flex-col p-12 lg:ml-12 mt-6">
						<div className="Inter-Regular text-f25 lg:text-f50 text-white lg:leading-f50 lg:tracking-wide">
							<h1>We empower the</h1>
							<h1 className="Inter-SemiBold">Designers and Builders</h1>
							<h1>of 21<sup>st</sup> century</h1>
						</div>
						<div className="lg:text-f24 text-f14 leading-f24 text-white lg:mt-20 mt-12">
							<p>We help home professionals build awareness,</p>
							<p>gain happier customers and drive revenues by</p>
							<p>designing strategic and engaging websites.</p>
						</div>
						<div className="lg:mt-24 mt-12 Inter-Regular">
							<NextLink href="/capabilities"><a href="/capabilities" className="text-gray-200 lg:text-f16 text-f14 uppercase underline underline-offset-2">see our capabilities</a></NextLink>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Capabilities;
