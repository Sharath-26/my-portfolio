import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { useFadeIn } from "../../hooks/useFadeIn";

export const Portfolio = () => {
  const [titleRef, titleVis] = useFadeIn();
  const [gridRef, gridVis] = useFadeIn(0.05);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div
          ref={gridRef}
          className={`po_grid fade-in-section ${gridVis ? "is-visible" : ""}`}
        >
          {dataportfolio.map((data, index) => (
            <div key={index} className="po_card">
              <div className="po_card_img">
                <img src={data.your_img} alt={data.title} />
              </div>
              <div className="po_card_body">
                <h2 className="po_card_title">{data.title}</h2>
                <p className="po_card_desc">{data.description}</p>
                <ul className="po_points">
                  {data.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <p className="po_tech">
                  <strong>Tech Stack:</strong> {data.techStack}
                </p>
                {data.link && (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="po_link"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
