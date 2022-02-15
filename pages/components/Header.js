import NextLink from 'next/link';

const openNav = (e) => {
	var element = document.getElementById("myNav");
	element.classList.add("heightHigh");
	element.classList.remove("heightLow");
}

const closeNav = (e) => {
	var element = document.getElementById("myNav");
	element.classList.add("heightLow");
	element.classList.remove("heightHigh");
}


const Header = () => {
	return (
		<div>
			<div className="hidden lg:flex flex-row justify-centeir md:pt-12 xl:pt-16 md:mx-36">
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


			<nav className="md:hidden block mx-8">
				<div className="flex justify-between">
					<NextLink href="/"><a href="/" ><img className='w-44 mt-4' id="logo" src="/Resources/About/Logo.png" alt="logo" /></a></NextLink>
					<a href="#" className='mt-4'>
						<img src="/Resources/Mobile/mobile-menu.webp" onClick={openNav} className="cursor-pointer w-8 h-8" alt="mobile-menu" />
					</a>
				</div>
			</nav>


			{/* mobile navbar */}
			<div>
				<div id="myNav" className="overlay">
					<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
					<div className="overlay-content">
						<NextLink href="/"><a href="/">Home</a></NextLink>
						<NextLink href="/about"><a href="/about">About</a></NextLink>
						<NextLink href="/capabilities"><a href="/capabilities">Capabilities</a></NextLink>
						<NextLink href="/case-study"><a href="/case-study">Case Study</a></NextLink>
						<NextLink href="/contact"><a href="/contact">Contact</a></NextLink>
					</div>
				</div>
				{/* <span className="md:hidden flex text-gray-700 hover:text-white rlow"
                    onClick={openNav}>&#9776;</span> */}
			</div>
			{/* mobile navbar end */}
		</div>

	);

}

export default Header;
