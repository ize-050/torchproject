'use client'
import React from 'react';

const Contact = () => {
    return (
   <>
        <div className="main">
            <div className="title-wrapper">
                <div className="container"><div className="container-inner">
                    <h1><span>ติด</span> ต่อเรา</h1>
                </div></div>
            </div>
            <div className="container">
                <ul className="breadcrumb">
                    <li><a href="#">หน้าแรก</a></li>
                    <li><a href="">ติดต่อเรา</a></li>
                    <li className="active"></li>
                </ul>
            </div>

            <section className="bg-blue-20" id="contact">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-base font-semibold uppercase tracking-wide text-blue-80"
                               style={{
                                fontSize: '24px',
                            }}
                            >

                                ติดต่อเรา
                            </p>
                        </div>
                    </div>
         
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                            <img src="/logo.png" width="200"></img>
                            <br></br>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path
                                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        
                                        <div className="ml-4 mb-4">

                                            <h3 className="mb-4  text-lg font-medium leading-6 text-gray-90"
                                               style={{
                                                fontSize: '16px',
                                            }}
                                            >ที่อยุ่
                                            </h3>
                                            <p className="text-gray-600 ">ปลั๊กไฟแอมบอส
</p>
                                            <p className="text-gray-600 ">76/1 ศิริเกษม ซอย 2 แขวงบางไผ่ เขตบางแค กรุงเทพมหานคร 10160</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                </path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg  font-medium leading-6 text-gray-900"
                                            style={{
                                                fontSize: '16px',
                                            }}
                                            >ช่องทางการติดต่อ 
                                            </h3>
                                            <p className="text-gray-600 "><b>MOBILE</b>: 089-961-4778</p>
                                            <p className="text-gray-600 "><b>LINE: </b> 089-961-4778</p>
                                            <p className="text-gray-600 "><b>FACEBOOK:</b> rutchanee.sinphiban </p>
                                        </div>
                                    </li>
                            
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                              
                                <form id="contactForm">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6173157524972!2d100.3733132!3d13.7416036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e297a65641e71b%3A0x35f7a01baf124a87!2z4Lib4Lil4Lix4LmK4LiB4LmE4Lif4LmB4Lit4Lih4Lia4Lit4Liq!5e0!3m2!1sth!2sth!4v1716215046802!5m2!1sth!2sth" width="600" height="450" allowFullScreen loading="lazy"></iframe>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
        </div>
   </>
          
    )
}

export default Contact;
