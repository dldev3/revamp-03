import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import Grow from './components/Grow';

export default function Home() {
	return (
		<div className="container-mcl scroll-smooth">
			<Head>
				<title>Minutecode Labs | Home</title>
				<meta name="description" content="Best web development agency in USA, Canada and Europe" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<div className="relative top-0 z-10">
				<Header></Header>
			</div>

			{/* Landing page */}
			<div>
				<div>
					<div className="hidden lg:block">
						<div className="relative -top-33 landing-section flex flex-row justify-center z-0">
							<div className="w-7/12 bg-hero-dark h-screen">
							</div>
							<div className="w-5/12 h-screen">
								<img src="/Resources/Home/home-hero.jpg" className="object-cover h-screen" />
							</div>
						</div>

						<div className="md:mx-28 relative bottom-102">
							<div className="text-white text-f50 leading-f50 Inter-Medium">
								<h1 className="drop-shadow-md">Creative solutions. For the</h1>
								<h1 className="drop-shadow-md">creators of modern day dream homes.</h1>
							</div>
							<div className="text-white text-f24 Inter-Regular mt-12">
								<p>We are a creative design agency for architects & interior designers.</p>
							</div>
						</div>
					</div>

					{/* mobile */}
					<div className="lg:hidden relative -top-20 landing-section">
						<div className="bg-mcl-black p-12">
							<div className="text-white text-f25 leading-f33 Inter-Regular mt-36">
								<h1 className="drop-shadow-md">Creative solutions. For </h1>
								<h1 className="drop-shadow-md">the creators of modern</h1>
								<h1 className="drop-shadow-md">day dream homes.</h1>
							</div>
							<div className="text-white text-f14 leading-f26 Inter-Regular mt-12">
								<p>We are a creative agency for home </p>
								<p>professionals.</p>
							</div>
						</div>
						<div>
							<img src="/Resources/Home/home-hero.jpg" className="object-cover h-auto w-auto" />
						</div>
					</div>
					{/* mobile end */}
				</div>
			</div>

			<div className="lg:-mt-88 -mt-20">
			</div>

			{/* capabilities section */}
			<div>
				<div>
					<div className="flex lg:flex-row flex-col-reverse">
						<div className="lg:w-5/12">
							<img className="w-full h-768px object-cover" src="/Resources/Home/home-capabilities.jpg" alt="home-capabilities" />
						</div>
						<div className="lg:w-7/12 bg-home-cap">
							<div className="flex flex-col p-12 lg:ml-12 mt-6">
								<div className="Inter-Regular text-f25 lg:text-f50 text-white lg:leading-f50 lg:tracking-wide">
									<h1>We empower the</h1>
									<h1 className="Inter-SemiBold">Designers and Builders</h1>
									<h1>of 21<sup>st</sup> century</h1>
								</div>
								<div className="Inter-Regular lg:text-f24 text-f14 leading-f24 text-white lg:mt-20 mt-12">
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
			</div>

			{/* dream clients */}
			<div className="2xl:block sm:hidden">
				<div>

					<div className="hidden lg:flex flex-row">
						<div className="bg-home-cap p-6 text-gray-300"><p className="Inter-Regular">Our Dream Clients</p></div>

						<div className="flex flex-1 grow-1 bg-gray-800">
							<div className="py-6 text-gray-500 ml-4"><p className="Inter-Regular px-6 border-r-2 border-gray-700">Architects</p></div>
							<div className="py-6 text-gray-500"><p className="Inter-Regular px-6 border-r-2 border-gray-700">Interior Designers</p></div>
							<div className="py-6 text-gray-500"><p className="Inter-Regular px-6 border-r-2 border-gray-700">Landscapers</p></div>
							<div className="py-6 text-gray-500"><p className="Inter-Regular px-6 border-r-2 border-gray-700">Custom Home Builders</p></div>
							<div className="py-6 text-gray-500"><p className="Inter-Regular px-6 border-r-2 border-gray-700">Landscape Architects</p></div>
							<div className="py-6 text-gray-500"><p className="Inter-Regular ml-4">Design and Build Firms</p></div>
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

			</div>

			{/* Vision */}
			<div>
				<div className="bg-hero-dark">
					<div className="lg:p-12 p-6">
						<h1 className="text-white text-f25 lg:text-f50 lg:leading-f50 text-center Inter-Regular">Our Belief - Our Tribute</h1>
					</div>

					<div className="flex lg:flex-row flex-col justify-between lg:py-12 lg:px-24 lg:mx-28 px-12 py-6">
						<div className="text-left text-gray-300 Inter-Regular text-f14 lg:text-f24 leading-f24">
							<p>Here is to the creators,</p>
							<p>The designers,</p>
							<p>And the builders,</p>
							<p>of modern day dream homes.</p>
							<p>The ones who help us ensure</p>
							<p>a home is our best investment</p>
						</div>
						<div className="mt-12 lg:mt-0 text-left text-gray-300 Inter-Regular text-f14 lg:text-f24 leading-f24">
							<p>We can't ignore them because.</p>
							<p>they make hte dream of a home a reality for all</p>
							<p>While the world sees them as just home</p>
							<p>professionals, we see them as the creators of a</p>
							<p>greater life that empowers the human race.</p>
							<p>Because they are th ones that envision</p>
							<p>comfort and healing of a home above all,</p>
							<p>and they are the ones that make it so.</p>
						</div>
					</div>

				</div>
			</div>

			{/* Our process */}
			<div className="lg:mt-24">
				<div className="lg:mx-28">
					<div className="flex lg:flex-row flex-col">
						<div className="lg:w-1/2">
							<img className="w-full h-full" src="/Resources/Home/home-roadmap.jpg" alt="img-roadmap" />
						</div>
						<div className="lg:w-1/2 p-4 mt-12">
							<div className="Inter-Regular leading-f24-high text-f14 lg:text-f24 text-gray-700">
								<p>We envision becoming a full-service creative</p>
								<p>agency that can help the growth of home</p>
								<p>professionals in the connected world</p>
							</div>
							<div className="lg:mt-20 mt-12">
								<NextLink href="/roadmap"><a href="/roadmap" className="Inter-Regular text-f16 uppercase underline underline-offset-4">see our roadmap</a></NextLink>
							</div>
						</div>
					</div>
					<div className="flex lg:flex-row flex-col-reverse">
						<div className="lg:w-1/2 p-4 mt-12">
							<div className="Inter-Regular text-f14 lg:text-f24 leading-f24-high text-gray-700">
								<p>Our clear cut process helps you take a journey</p>
								<p>from mere discovery of a problem to a creative</p>
								<p>solution that delivers results.</p>
							</div>
							<div className="lg:mt-20 mt-12">
								<NextLink href="/process"><a href="/process" className="Inter-Regular text-f16 uppercase underline underline-offset-4">see our process</a></NextLink>
							</div>
						</div>
						<div className="lg:w-1/2">
							<img className="w-full h-full" src="/Resources/Home/home-process.jpg" alt="our-process-img" />
						</div>
					</div>

				</div>
			</div>

			{/* case study */}
			<div className="lg:mt-24 mt-8">
				<div className="lg:mx-2">

					<div><h1 className="text-f25 lg:text-f50 Inter-Regular text-center">Case Study</h1></div>

					<div className="mt-8 grid lg:grid-cols-3 grid-cols-1">
						<div>
							<img className="object-cover w-full lg:h-72 h-auto" src="/Resources/Home/case-1.jpg" alt="case-1" />
							<p className="hidden lg:block mt-2 text-center text-f24 Inter-Regular text-gray-700">Lightin Interiors</p>
						</div>
						<div>
							<img className="object-cover w-full lg:h-72 h-auto" src="/Resources/Home/case-2.jpg" alt="case-1" />
							<p className="hidden lg:block mt-2 text-center text-f24 Inter-Regular text-gray-700">Flexy Archi</p>
						</div>
						<div>
							<img className="object-cover w-full lg:h-72 h-auto" src="/Resources/Home/case-3.jpg" alt="case-1" />
							<p className="hidden lg:block mt-2 text-center text-f24 Inter-Regular text-gray-700">Bloom Beauty</p>
						</div>
					</div>

				</div>
			</div>

			{/* Ready to grow*/}
			<div>
				<Grow></Grow>
			</div>

			{/*Footer*/}
			<div>
				<Footer></Footer>
			</div>

			{/*Empty div*/}
			<div></div>


		</div>
	)
}
