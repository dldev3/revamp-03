import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from 'next/head';
import ScrollOut from "scroll-out";
import $ from "jquery";


import General from './components/email/general';
import StartProject from './components/email/start-project';
import DiscoveryCall from './components/email/discovery-call';


const Contact = () => {

    useEffect(() => {

        $('#their-thinking').on('change', function () {
            if (this.value === "start-a-project") {
                $("#business01").addClass('block');
                $("#business01").removeClass('hidden');
                $("#business02").addClass('hidden');
                $("#business02").removeClass('block');
                $("#business03").addClass('hidden');
                $("#business03").removeClass('block');
            }
            else if (this.value == "book-a-call") {
                $("#business02").addClass('block');
                $("#business02").removeClass('hidden');
                $("#business01").addClass('hidden');
                $("#business01").removeClass('block');
                $("#business03").addClass('hidden');
                $("#business03").removeClass('block');
            } else {
                $("#business03").addClass('block');
                $("#business03").removeClass('hidden');
                $("#business02").addClass('hidden');
                $("#business02").removeClass('block');
                $("#business01").addClass('hidden');
                $("#business01").removeClass('block');
            }
        });

        // back to top
        var btn = $('#button');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });
        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });
        // back to top end
        ScrollOut({
            threshold: .8,
            once: true
        });

        ScrollOut();
    }, []);

    return (
        <div className=''>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Say hello" />
                <meta property="og:title" content="Contact Us" />
                <meta property="og:description" content="What we do" />
                <meta property="og:keywords" content="Web Design,Web Development,USA,Architects,Interior Designers, Washington DC, DC, Web design agency for architects in Washington DC, Web design agency for interior designers in Washington DC" />
                <meta property="og:author" content="minutecodelabs" />
                <meta property="og:url" content="https://minutecodelabs.com/contact" />
                <link rel="icon" href="/fav.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />

            </Head>

            <div className='bg-hero-dark lg:pb-14 lg:pt-0 pb-6 pt-2'>
                <div className=''>
                    <Header />
                </div>
            </div>

            <div data-scroll className='flex flex-col justify-center items-center lg:my-24 my-12'>
                <p className='lg:text-f16 text-f14 Inter-Regular'>Say Hello</p>
                <h1 className='Inter-Medium lg:text-f40 text-f25'>Let's work together</h1>
            </div>


            {/* form */}
            <div className="px-12 py-6 container-mcl">
                <div className='grid gap-y-2'>
                    <label data-scroll for="their-thinking" className="lg:text-f16 text-f12 Inter-Regular" htmlFor='thinking'>What are you thinking?</label>
                    <select name="their-thinking" id="their-thinking" className="w-full border-2 lg:h-16 h-14 p-2 hover:cursor-pointer">
                        <option value="start-a-project">Start a project</option>
                        <option value="book-a-call">Book a Discovery call</option>
                        <option value="general-inquiry">General Inquiry</option>
                    </select>
                </div>
            </div >

            <div className="container-mcl px-12 py-6" id="business01">
                <StartProject />
            </div>
            <div className="container-mcl px-12 py-6 hidden" id="business02">
                <DiscoveryCall />
            </div>
            <div className="container-mcl px-12 py-6 hidden" id="business03">
                <General />
            </div>




            {/* form-end */}



            <div className='mt-60' >
                <Footer />
            </div>




            {/* back to top button */}
            <a id="button" ></a>

        </div >
    )
};

export default Contact;
