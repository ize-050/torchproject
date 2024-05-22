
import Script from 'next/script'
import React, { useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from '../../components/layouts/header';
import Footer from '../../components/layouts/footer'
const inter = Inter({ subsets: ["latin"] });
import "./../../public/assets/pages/css/animate.css"
import "./../../public/assets/pages/css/components.css"
import "./../../public/assets/corporate/css/custom.css"
import "./../../public/assets/corporate/css/style.css"
import "./../../public/assets/corporate/css/style-responsive.css"
import "./../../public/assets/corporate/css/themes/red.css"
import "./../../public/assets/pages/css/slider.css"
import "./../../public/assets/pages/css/style-shop.css"
import "./../../public/assets/corporate/css/style.css"
import "./../../public/assets/plugins/bootstrap/css/bootstrap.min.css"
import "./../../public/assets/plugins/font-awesome/css/font-awesome.min.css"
import "./../../public/assets/plugins/fancybox/source/jquery.fancybox.css"
import "./../../public/assets/plugins/owl.carousel/assets/owl.carousel.css"
import Head from 'next/head';

import MyComponent from './_document';
import axios from 'axios'
const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <html lang="en">
      <body className="ecommerce">
        <div className="header">
          <div className="pre-header">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6 additional-shop-info">

                </div>
                <div className="col-md-6 col-sm-6 additional-nav">
                  <ul className="list-unstyled list-inline pull-right">
                    <li><a href="/">หน้าแรก</a></li>
                    <li><a href="#">สินค้า</a></li>
                    <li><a href="contact">ติดต่อเรา</a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <a className="site-logo" href="/"
            >
              <img src="/logo.png" style={{ width: '100px', height: '50px' }} alt="Metronic Shop UI" /></a>

            <a href="javascript:void(0);" className="mobi-toggler"><i className="fa fa-bars"></i></a>

            <HeaderComponent  ></HeaderComponent>

          </div>
        </div>
        {children}

        <Footer></Footer>
      </body>

      <Script src="assets/plugins/jquery.min.js" />
      <Script src="assets/plugins/jquery-migrate.min.js" />
      <Script src="assets/plugins/fancybox/source/jquery.fancybox.js" />
      <Script src="assets/plugins/fancybox/source/helpers/jquery.fancybox-buttons.js" />
      <Script src="assets/plugins/fancybox/source/helpers/jquery.fancybox-media.js" />
      <Script src="assets/plugins/fancybox/source/helpers/jquery.fancybox-thumbs.js" />
      <Script src="assets/plugins/bootstrap/js/bootstrap.min.js" />
      <Script src="assets/corporate/scripts/back-to-top.js" />
      <Script src="assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js" />
      <Script src="assets/plugins/owl.carousel/owl.carousel.min.js" />
      <Script src="assets/plugins/zoom/jquery.zoom.min.js" />
      <Script src="assets/plugins/bootstrap-touchspin/bootstrap.touchspin.js" />
      <Script src="assets/plugins/uniform/jquery.uniform.min.js" />
      <Script src="assets/plugins/rateit/src/jquery.rateit.js" />
      <Script src="assets/corporate/scripts/layout.js" />
      <Script src="assets/pages/scripts/bs-carousel.js" />


    </html>
  );
}


export default RootLayout;