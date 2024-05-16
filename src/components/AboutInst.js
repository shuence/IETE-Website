import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import diems1 from "../assets/diemslogoiete.png";
import naac from "../assets/nacclogo.png";
import nba from "../assets/nba.png";
import director from "../assets/Director.png";
import hod from "../assets/Hod.png";
import dean from "../assets/dean.png";

class AboutInst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorityData: [
        {
          imageSrc: hod,
          title: "Dr. R. M. Autee",
          description: "Head of E&TC Department",
        },
        {
          imageSrc: dean,
          title: "Dr. S. V. Lahane",
          description: "Dean Academics",
        },
        {
          imageSrc: director,
          title: "Dr. Ulhas Shiurkar",
          description: "Director",
        },
      ],
      slideshowImages: [diems1, naac, nba],
    };
  }

  render() {
    const { authorityData, slideshowImages } = this.state;

    return (
      <Container fluid className="about-section-one">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <h1
              className="diems-heading"
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
            >
              About Deogiri Institute of Engineering and Management Studies
            </h1>
            <Col
              md={8}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <blockquote className="blockquote">
                <p style={{ textAlign: "justify", paddingTop: "50px" }}>
                  <span className="purple">
                    Deogiri Institute of Engineering and Management Studies{" "}
                  </span>
                  is affiliated to the Dr. Babasaheb Ambedkar Technological
                  University, Lonere and is developed as per the norms of the
                  All India Council of Technical Education (A.I.C.T.E.),
                  Government of India. The Institute is consistently among the
                  top institutes of Dr. B.A.M. University in examination
                  results. The student-centric teaching learning environment,
                  state of the art infrastructure, well-equipped laboratories,
                  library stacked with a good number of books, experienced and
                  dedicated team of faculties are the key features of the
                  Institute.
                  <br />
                  <br />
                </p>
              </blockquote>
              <Button
                className="button-core-team"
                target="_blank"
                href={"https://www.dietms.org/"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "30%",
                  marginRight: "30%",
                }}
              >
                Visit Official DIEMS page
              </Button>
            </Col>
            <Col
              style={{ paddingTop: "20px", paddingBottom: "50px" }}
              className="myAvtar"
            >
              <Carousel showArrows={true} showIndicators={true} slide={true}>
                {slideshowImages.map((image, index) => (
                  <Carousel.Item key={index} style={{ textAlign: "center" }}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="img-fluid main-iete-logo"
                      style={{ maxHeight: "300px" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
          <Row>
            {authorityData.map((authority, index) => (
              <Col key={index}>
                <Card className="authority-card">
                  <Card.Img
                    variant="top"
                    style={{
                      display: "block",
                      marginInline: "auto",
                      marginTop: "20px",
                      width: "50%",
                    }}
                    src={authority.imageSrc}
                    alt="card-img"
                  />
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                      {authority.title}
                    </Card.Title>
                    <Card.Text style={{ textAlign: "center" }}>
                      {authority.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default AboutInst;
