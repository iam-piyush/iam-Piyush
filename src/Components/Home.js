import React from 'react'
import BG from "./BG";
import Navbar from "./Navbar";
// import Certficates from './Certificates';
import Achievement from './Achievement';
import Projects from './Projects';
import ProjectHeading from './ProjectHeading';
import Footer from './Footer';
import Freelancing from './Freelancing';
import FreelancingHeading from './FreelancingHeading';
import Grid from './Grid';
import Certificates from './Certificates';


const Home = () => {
  return (
    <div>
        <BG />
        <Navbar />
        <Achievement />
        <Certificates />
        <ProjectHeading />
        <Projects />
        <FreelancingHeading />
        <Freelancing />
        <Grid />
        <Footer />
    </div>
  )
}

export default Home