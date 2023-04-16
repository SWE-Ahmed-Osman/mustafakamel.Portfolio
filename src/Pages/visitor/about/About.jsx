import AboutCertifications from './aboutSections/AboutCertifications';
import AboutExperiance from './aboutSections/AboutExperiance';
import AboutHero from './aboutSections/AboutHero';
import WhyMeSection from './aboutSections/WhyMeSection';

import './about.css';


const About = () => {

  return(
    <>
      <AboutHero/>
      <WhyMeSection/>
      <AboutExperiance/>
      <AboutCertifications/>
    </>
  );
};

export default About;