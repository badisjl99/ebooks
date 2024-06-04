import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Ebook = ({ ebook }) => {
  const { title, author, image, scraped } = ebook;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px', textAlign: 'center' }}>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <img src={image} alt={`${title} cover`} style={{ maxWidth: '100%', height: 'auto' }} />
            <h4>Download Links:</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {scraped.downloadLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.format}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Ebook;
