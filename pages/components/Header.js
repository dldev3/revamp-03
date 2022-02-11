import NextLink from 'next/link';

const Header = () => {
	return (

		<div className="flex flex-row justify-centeir md:pt-12 xl:pt-16 md:mx-36">
			<div className="w-5/12">
				<div className="w-72 h-auto">
					<NextLink href="/"><a href="/"><img src="/Resources/About/Logo.png" alt="logo" /></a></NextLink>
				</div>
			</div>

			<div className="w-7/12 text-f18 Inter-Regular text-gray-200">
				<ul className="flex flex-row justify-center space-x-6 ml-24">
					<li className=""><NextLink href="/capabilities"><a href="/capablities">Capabilities</a></NextLink></li>
					<li className=""><NextLink href="/case-study"><a href="/case-study">Case Studies</a></NextLink></li>
					<li className=""><NextLink href="/about"><a href="/about">About</a></NextLink></li>
					<li className=""><NextLink href="/contact"><a href="/contact">Contact</a></NextLink></li>
				</ul>
				<div></div>
			</div>

		</div>

	);

}

export default Header;


