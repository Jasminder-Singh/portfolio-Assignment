import React from 'react';
import { Helmet } from 'react-helmet';
import ProgressScroll from '../../components/Common/ProgressScroll';
import Cursor from '../../components/Common/cusor';
import LoadingScreen from '../../components/Common/loader';
import Blog from '../../components/dark/home/blog';
import ContactUs from '../../components/dark/contact/ContactUs';
import Info from '../../components/dark/contact/info';
import Footer from '../../components/dark/home/footer';
import NavTop from '../../components/dark/home/nav-top';
import Navbar from '../../components/dark/home/navbar';
import Portfolio from '../../components/dark/home/portfolio';
import Price from '../../components/dark/home/price';
import Profile from '../../components/dark/home/profile';
import Services from '../../components/dark/home/services';
import Skills from '../../components/dark/home/skills';
import Testimonials from '../../components/dark/home/testimonials';
import Lines from '../../components/Common/Lines';
function HomeDark({ data }) {
  return (
    <div>
      <Helmet>
        <title>Gavi - Dark</title>
        <link rel="icon" href="/assets/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/assets/imgs/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/assets/css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
      </Helmet>
      <Cursor />
      <ContactUs />
      <Lines />
      <LoadingScreen />
      <ProgressScroll />
      <div>
        <NavTop />
        <main className="container">
          <Profile about={data?.user?.about} />
          <Navbar />
          <section className="in-box">
            <Services services={data?.user?.services} />
            <Skills skills={data?.user?.skills} />
            <Portfolio projects={data?.user?.projects} />
            <Testimonials testimonials={data?.user?.testimonials} />
            <Price />
            <Info user={data?.user} />
            <Blog />
          </section>
        </main>
        <Footer />
      </div>
      <script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />
      <script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

export default HomeDark;
