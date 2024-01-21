import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function LandingPage() {
  return (
    <div className='mt-5'>
      {/* Header */}
      <header className="bg-dark text-white text-center py-5 mb-5" style={{zIndex:1000}}>
        <Container>
          <h1 className="display-4">Car Management System</h1>
          <p className="lead">Efficiently manage your car inventory and details</p>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="hero-section text-center">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4">
              <img
                src="https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/i-series/i4/2023/1680x756.jpg"
                alt="Car Management"
                className="img-fluid"
              />
            </Col>
            <Col md={6}>
              <h2 className="mb-4">Welcome to the Best Car Management System</h2>
              <p className="mb-4">
                Easily manage your car inventory, track details, and optimize your operations with our advanced car management system.
              </p>
              <Button variant="primary" size="lg" href="/login" className="me-2">Login</Button>
              <Button variant="secondary" size="lg" href="/signup">Sign Up</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
