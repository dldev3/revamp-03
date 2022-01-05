import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import Header from './components/Header';


export default function Home() {
  return (
    <div className="container-mcl">
      <Head>
        <title>Minutecode Labs | Home</title>
        <meta name="description" content="Best web development agency in USA, Canada and Europe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

	  <div className="relative top-0 z-10">
		<Header></Header>
	  </div>

	<div className="relative -top-36 landing-section flex flex-row justify-center z-0">
		<div className="w-7/12 bg-hero-dark h-screen">
	  	</div>
	  	<div className="w-5/12 h-screen">
	  		<img src="/Resources/Home/home-hero.jpg" className="object-cover h-screen" />
		</div>
	</div>

	<div className="md:mx-36 relative bottom-hero-tagline-spacing">
		<div className="text-white text-f50 leading-f50 Inter-Medium tracking-wide">
	  		<h1 className="drop-shadow-md">Creative solutions. For the</h1>
	  		<h1 className="drop-shadow-md">creators of modern day dream homes.</h1>
	  	</div>
	  	<div className="text-white text-f24 Inter-Regular mt-12">
	  		<p>We are a creative agency for home porfessionals.</p>
	  	</div>
	</div>



	  	<div className="-mt-temp">
		</div>
	  	
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
