import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import event1Image from "../assets/events/inaugration2.png";
import event2Image from "../assets/events/blogstar.png";
import event3Image from "../assets/events/workshop.jfif";
import event4Image from "../assets/events/gateMock.png";
import event5Image from "../assets/events/mockInterview.png";

function RecentEvents() {
  const events = [
    {
      image: event1Image,
      title: "DIEMS IETE Student Forum Inauguration Program",
      details: "Join us on 27th Oct 2023 for the IETE Forum Inauguration.",
    },
    {
      image: event2Image,
      title: "IETE BlogStar Challenge",
      details: "Submit your tech-related blog for a chance to win!",
    },
    {
      image: event3Image,
      title: "Micromaster Workshop",
      details: "Attend our two-day workshop on the 8051 microcontroller.",
    },
    {
      image: event4Image,
      title: "Mock GATE Exam",
      details: "Simulate the GATE exam environment and assess your readiness.",
    },
    {
      image: event5Image,
      title: "Mock Interviews",
      details: "Refine your interview skills with insights from industry experts.",
    },
  ];

  return (
    <section>
      <Container fluid className="recent-section">
        <Container>
          <Row className="home-about-description">
            <h2 className="heading-name-recent">Check out our recent events!</h2>
            <Carousel className="carousel-container" slide={true}>
              {events.map((event, index) => (
                <Carousel.Item key={index} style={{ textAlign: "center" }}>
                  <img
                    className="d-block mx-auto"
                    src={event.image}
                    alt={event.title}
                    style={{ width: "80%", height: "auto" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>

            <p className="recent-para" style={{ textAlign: "center", fontSize: "1.3em", padding: "20px" }}>
              Here's a sneak peek into our recent events. Click the button below to explore more.
            </p>
            <Link to="/events">
              <button className="button-core-team" style={{ padding: '15px', color: 'white', borderRadius: '5px' }} target="_blank">Go to Events</button>
            </Link>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default RecentEvents;
