/* eslint-disable react/jsx-max-depth */
import { Row, Col } from 'react-bootstrap';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineMessage } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import NavigationBar from '../components/footer/NavigationBar';

function Contact() {
  return (
    <div className="d-flex flex-column justify-content-between">
      <Row
        className="gradient-custom text-white"
        style={ {
          height: '10vh',
          textShadow: '2px 2px 4px #000000',
          textDecoration: 'underline',
          textUnderlineOffset: '0.5rem',
        } }
      >
        <header className=" d-flex align-items-center justify-content-center w-100">
          <h1> Entre em contato </h1>
        </header>
      </Row>
      <Row
        className="
        gradient-custom text-white d-flex align-items-center justify-content-center
        "
        style={ { height: '80vh' } }
      >
        <Col xs={ 12 } md={ 4 } className="mt-2 d-flex flex-column align-items-center">
          <Link to="mailto:anthony.steffen@outlook.com.br">
            <AiOutlineMail size={ 50 } className="text-danger" />
          </Link>
          <h4 className="text-white-50">Email</h4>
          <p>anthony.steffen@outlook.com.br</p>
        </Col>

        <Col xs={ 12 } md={ 4 } className="mt-2 d-flex flex-column align-items-center">
          <Link to="https://www.linkedin.com/in/anthony-steffen-dev" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin size={ 50 } className="text-primary" />
          </Link>
          <h4 className="text-white-50">Linkedin</h4>
          <p>linkedin.com/in/anthony-steffen-dev</p>
        </Col>

        <Col xs={ 12 } md={ 4 } className="mt-2 d-flex flex-column align-items-center">
          <Link to="https://wa.me/8491423988" target="_blank" rel="noopener noreferrer">
            <AiOutlineMessage size={ 50 } className="text-success" />
          </Link>
          <h4 className="text-white-50">Chat</h4>
          <p>Disponível para chat em horário comercial.</p>
        </Col>

      </Row>
      <Row
        className="fixed-bottom bg-dark"
        style={ { height: '10vh' } }
      >
        <Col className="d-flex flex-column justify-content-center">
          <NavigationBar />
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
