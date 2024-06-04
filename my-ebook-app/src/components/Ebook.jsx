import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

const Ebook = ({ ebook }) => {
  const { title, author, image, scraped } = ebook;
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  const handleShowModal = (url) => {
    setModalUrl(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalUrl('');
  };

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
                  <Button variant="link" onClick={() => handleShowModal(link.url)}>
                    {link.format}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Download Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={modalUrl}
            style={{ width: '100%', height: '400px', border: 'none' }}
            title="Download Link"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Ebook;
