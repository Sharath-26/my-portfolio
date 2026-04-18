import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  techStack,
  Services,
  educationData,
} from "../../content_option";
import { useFadeIn } from "../../hooks/useFadeIn";

export const About = () => {
  const [ref1, vis1] = useFadeIn();
  const [ref2, vis2] = useFadeIn();
  const [ref3, vis3] = useFadeIn();
  const [ref4, vis4] = useFadeIn();
  const [ref5, vis5] = useFadeIn();

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">My Story</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div ref={ref1} className={`fade-in-section ${vis1 ? "is-visible" : ""}`}>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{dataabout.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{dataabout.aboutme}</p>
              </div>
            </Col>
          </Row>
        </div>

        <div ref={ref2} className={`fade-in-section ${vis2 ? "is-visible" : ""}`}>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Work Timeline</h3>
            </Col>
            <Col lg="7">
              <table className="table caption-top">
                <tbody>
                  {worktimeline.map((data, i) => (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </div>

        <div ref={ref3} className={`fade-in-section ${vis3 ? "is-visible" : ""}`}>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Technical Expertise</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div className="tech_badge_grid">
                {techStack.map((tech, i) => (
                  <span key={i} className="tech_badge">
                    {tech}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        <div ref={ref4} className={`fade-in-section ${vis4 ? "is-visible" : ""}`}>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Services</h3>
            </Col>
            <Col lg="7">
              {Services.map((data, i) => (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <ul className="service_desc">
                    {data.description.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Col>
          </Row>
        </div>

        <div ref={ref5} className={`fade-in-section ${vis5 ? "is-visible" : ""}`}>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Education</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
                  {educationData.map((edu, index) => (
                    <li key={index} className="mb-3 d-flex align-items-center">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        style={{
                          width: "100px",
                          height: "60px",
                          objectFit: "contain",
                          marginRight: "15px",
                        }}
                      />
                      <span>
                        <strong>{edu.degree}</strong> from {edu.institution} ({edu.year})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </HelmetProvider>
  );
};
