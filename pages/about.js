import Head from 'next/head';
import Landing from './components/About/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import Grow from './components/Grow';
import WhoWeAre from './components/About/WhoWeAre';
import OurCoreValues from './components/About/OurCoreValues';
import OurProcess from './components/About/OurProcess';

export default function About() {
    return (
        <div className="container-mcl">
            <Head>
                <title>Minutecode Labs | About</title>
                <meta name="description" content="Best web development agency in USA, Canada and Europe" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>

            {/* Header */}
            <div className="relative -top-5 z-10">
                <Header></Header>
            </div>

            {/* Landing page */}
            <div>
                <Landing></Landing>
            </div>

            <div className="-mt-56">
            </div>

            <div className=''>
                <WhoWeAre />
            </div>

            <div className=''>
                <OurCoreValues />
            </div>

            <div>
                <OurProcess />
            </div>


            <div>
                <Grow />
            </div>

            <div>
                <Footer />
            </div>

        </div>
    );
}
