import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import DreamClients from './components/Home/DreamClients';
import Capabilities from './components/Home/Capabilities';
import Landing from './components/Home/Landing';
import Vision from './components/Home/Vision';
import OurProcess from './components/Home/OurProcess';
import CaseStudy from './components/Home/Case-Study';
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
				<Landing></Landing>
			</div>

			<div className="lg:-mt-88 -mt-20">
			</div>

			{/* capabilities section */}
			<div>
				<Capabilities></Capabilities>
			</div>

			{/* dream clients */}
			<div className="2xl:block sm:hidden">
				<DreamClients></DreamClients>
			</div>

			{/* Vision */}
			<div>
				<Vision></Vision>
			</div>

			{/* Our process */}
			<div className="lg:mt-24">
				<OurProcess></OurProcess>
			</div>

			{/* case study */}
			<div className="lg:mt-24 mt-8">
				<CaseStudy></CaseStudy>
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
