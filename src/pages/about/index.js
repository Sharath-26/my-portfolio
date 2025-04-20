import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  Services,
  educationData,
} from "../../content_option";

export const About = () => {
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
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Technical Expertise</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {Services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  {/* <p className="service_desc">{data.description}</p> */}
                  <ul className="service_desc">
                    {data.description.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                  {/* <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}></ul>
                    {data.description.map((point, j) => (
              <li key={j} style={{ marginBottom: '10px', fontSize: '1rem', color: '#333' }}>
                {point}
              </li>
            ))} */}
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <ul className="list-unstyled" style={{ paddingLeft: 0 }}>
                {educationData.map((edu, index) => (
                  <li
                    key={index}
                    className="mb-3 d-flex align-items-center"
                  >
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      style={{
                        width: "100px",
                        height: "60px",
                        objectFit: "contain",
                        marginright: "15px",
                      }}
                    />
                    <strong>{edu.degree}</strong> &nbsp;from {edu.institution} (
                    {edu.year})
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
