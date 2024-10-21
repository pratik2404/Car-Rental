import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              
              <h2 className="section__title mb-4">Customer <span className="text-danger">Suport </span>Center</h2>
              <p className="section__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis iusto dolorum placeat incidunt quos, reprehenderit perferendis, dolor harum ipsam corporis tenetur architecto sed enim. Eum exercitationem deleniti esse veniam animi?</p>

            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
