import React from 'react';
import { Helmet } from 'react-helmet';
import ProgressScroll from '../../components/Common/ProgressScroll';
import Cursor from '../../components/Common/cusor';
import LoadingScreen from '../../components/Common/loader';
import ContactUs from '../../components/dark/contact/ContactUs';
import Nav from '../../components/dark/blogs/nav';
import ProjectView from '../../components/dark/works/single-project/project-view';
import Footer from '../../components/dark/home/footer';
import Lines from '../../components/Common/Lines';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function SingleProject({ projects }) {
  const params = useParams();
  const [singleProject, setSingleProject] = useState({});

  useEffect(() => {
    if (projects) {

      const sorted = [...projects].sort((a, b) => a.sequence - b.sequence);


      let prev = "", next = "";
      const project = sorted.filter((item, index) => {

        if (item._id === params.id) {

          // checking the index for previous id to navigate prev and next project.
          if (index > 0) {
            prev = sorted[index - 1]._id;
          }
          if (index < sorted.length - 1) {
            next = sorted[index + 1]._id;
          }
          return true;
        }
        return false;

      });

      setSingleProject({ ...project[0], prev, next });

    }
  }, [projects, params.id]);
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
      <Nav />
      <main className="container">
        <ProjectView singleProject={singleProject} />
      </main>
      <Footer />
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

export default SingleProject;
