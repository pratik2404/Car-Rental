import React from "react";
import ServicesList from "../components/UI/Features";
import { Container,Row, Col } from "reactstrap";
import OurMembers from "../components/UI/OurMembers";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import driveImg from '../assets/all-images/drive.jpg'
export default function Service(){

    return(

        <>
            
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5 text-center">
              
                            <h1 className="section__title">Cental <span className="text-danger">Services</span></h1>
                        </Col>

                            <ServicesList />
                            
                    </Row>
                </Container>
            </section>

            <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We  <span className="text-danger">Provides Safe Ride</span>  Solutions
                </h2>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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
                
        </>
    )
}