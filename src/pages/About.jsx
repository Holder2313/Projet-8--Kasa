import aboutBanner from "../assets/images/about-banner.jpeg";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import {collapseAboutTextInfo } from "../data/collapseTextInfo";

export default function About() {
  const text = collapseAboutTextInfo
  console.log(text);



  return (
    <section className="about">
      <Banner img={aboutBanner} />

      <div className="about__collapse">
        {text.map((collapse, index) => (
        <Collapse
          key={index}
          title={collapse.title}
          info={collapse.info}
        />
      ))}
      </div>
      
      
    </section>
  );
}
