import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {dataportfolio.map((data, index) => (
          <div key={index} className="po_item">
            <img
              src={data.your_img}
              alt={data.title}
              className="w-full h-48 object-cover"
            />
            <div className="content p-6">
              <h2 className="service__title text-2xl font-bold mb-2 text-gray-900">
                {data.title}
              </h2>
              <p className="service_desc text-gray-700 mb-4">
                {data.description}
              </p>

              <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
                {data.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <p className="text-sm text-gray-500 mb-4">
                <strong>Tech Stack:</strong> {data.techStack}
              </p>

              {data.link && (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-200 rounded mt-auto"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}


      </Container>
    </HelmetProvider>
  );
};
