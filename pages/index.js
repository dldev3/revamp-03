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
				<link rel="icon" href="/fav.png" />
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
							<div className="w-5/12">
								<img src="/Resources/Home/hero-image.png" className="h-full w-full object-fill" />
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
								<p>We are a creative design agency for</p>
								<p>architects & interior designers.</p>
							</div>
						</div>
						<div>
							<img src="/Resources/Home/hero-image.png" className="object-cover h-auto w-auto" />
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
							<div className="flex flex-col p-12 lg:ml-12 mt-14">
								<div className="Inter-Regular text-f25 lg:text-f50 text-white lg:leading-f50 lg:tracking-wide">
									<h1>We empower the</h1>
									<h1 className="Inter-SemiBold">Designers and Builders</h1>
									<h1>of 21<sup>st</sup> century</h1>
								</div>
								<div className="Inter-Regular lg:text-f24 text-f14 leading-f24 text-white lg:mt-20 mt-12">
									<p>We solve business problems for architects &</p>
									<p>interior designers through creative designs</p>
									<p>helping them to build awareness, gain happier</p>
									<p>customers and drive revenues.</p>

								</div>
								<div className="lg:mt-24 mt-12 Inter-Bold">
									<NextLink href="/capabilities"><a href="/capabilities" className="text-gray-200 lg:text-f16 text-f14 uppercase underline underline-offset-2">see our capabilities</a></NextLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>



			{/* Vision */}
			<div>
				<div className="bg-hero-dark lg:block hidden vision-section">
					<div className="p-16">
						<h1 className="text-white text-f50 leading-f50 text-center Inter-Regular">Our Belief - Our Tribute</h1>
					</div>

					<div className="flex flex-row justify-between py-12 px-24 mx-28">
						<div className="text-left text-gray-300 Inter-Regular text-f14 lg:text-f24 leading-f24">
							<p>Here is to the creators,</p>
							<p>The designers,</p>
							<p>And the builders,</p>
							<p>of modern day dream homes.</p>
							<p>The ones who help us ensure</p>
							<p>a home is our best investment</p>
						</div>
						<div className="text-left text-gray-300 Inter-Regular text-f14 lg:text-f24 leading-f24">
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
				<div className='bg-hero-dark lg:block hidden p-12'></div>

				{/* mobile */}
				<div className="bg-hero-dark lg:hidden">
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
				{/* mobile end */}
			</div>

			{/* Our process */}
			<div className="lg:mt-24">
				<div className="lg:mx-14">
					<div className="flex lg:flex-row flex-col">
						<div className="lg:w-1/2">
							<img className="w-full h-full" src="/Resources/Home/home-roadmap.jpg" alt="img-roadmap" />
						</div>
						<div className="lg:w-1/2 py-4 px-8 mt-12 lg:ml-4 ml-0">
							<div className="Inter-Regular leading-f24-high text-f14 lg:text-f24 text-gray-700">
								<p>From a boutique design agency, we envision</p>
								<p>becoming a full-service creative agency that</p>
								<p>can help the growth of architects & interior</p>
								<p>designers in the connected world.</p>
							</div>

							<div className="lg:mt-20 mt-12">
								<NextLink href="/roadmap"><a href="/roadmap" className="Inter-Bold text-f16 uppercase underline underline-offset-4">see our roadmap</a></NextLink>
							</div>
						</div>
					</div>
					<div className="flex lg:flex-row flex-col-reverse">
						<div className="lg:w-1/2 py-4 px-8 mt-12 lg:mr-4 mr-0">
							<div className="Inter-Regular text-f14 lg:text-f24 leading-f24-high text-gray-700">
								<p>Our clear cut process helps you understand your</p>
								<p>problems and helps us deliver results focused</p>
								<p>solutions that solves problems.</p>
							</div>
							<div className="lg:mt-20 mt-12">
								<NextLink href="/process"><a href="/process" className="Inter-Bold text-f16 uppercase underline underline-offset-4">see our process</a></NextLink>
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

					<div><h1 className="text-f25 lg:text-f50 Inter-Medium text-center">Case Studies</h1></div>

					<div className="mt-8">
						<div className='flex flex-col justify-center items-center'>
							{/* <img className="object-cover w-auto lg:h-72 h-auto" src="/Resources/Home/case-study-1-cover.png" alt="case-1" /> */}
							<div className="container">
								<div className="content">
									<NextLink href="/case-study"><a href="/case-study">
										<div className="content-overlay"></div>
										<img className="content-image" src="/Resources/Home/case-study-1-cover.png" alt="case-1" />
										<div className="content-details fadeIn-top">
											<h3>Gensler:Reimagining the digital</h3>
											<h3>forefront in 2022</h3>
										</div>
									</a></NextLink>
								</div>
							</div>


							{/* <p className="hidden lg:block mt-2 text-center text-f24 Inter-Regular text-gray-700">Gensler</p> */}
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


		</div >
	)
}
