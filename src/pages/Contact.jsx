/* eslint-disable react/jsx-max-depth */
import { Col } from 'react-bootstrap';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineMessage } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import NavigationBar from '../components/footer/NavigationBar';

function Contact() {
  const clamp = 'clamp(0.8rem, 1.5vw, 1rem)';
  return (
    <div className="gradient-custom d-flex flex-column vh-100">
      <div
        className="text-white d-flex align-items-center justify-content-center"
        style={ {
          height: '12vh',
          textShadow: '2px 2px 4px #000000',
          textDecoration: 'underline',
          textUnderlineOffset: '0.5rem',
          borderBottom: '1px solid #1B2C3F',
        } }
      >
        <header className="text-center">
          <h1> Entre em contato </h1>
        </header>
      </div>
      <div>
        <body
          className="gradient-custom d-flex flex-wrap justify-content-center
          align-items-center"
          style={ { height: '76vh' } }
        >

          <Col xs={ 12 } md={ 4 } className="mt-2 d-flex flex-column align-items-center">
            <Link to="mailto:anthony.steffen@outlook.com.br">
              <AiOutlineMail size={ 50 } className="text-danger" />
            </Link>
            <h4 className="text-white-50">Email</h4>
            <p
              className="text-white fw-bold"
              style={ { fontSize: clamp } }
            >
              anthony.steffen@outlook.com.br
            </p>
          </Col>
          <Col xs={ 12 } md={ 4 } className="mt-2 d-flex flex-column align-items-center">
            <Link to="https://www.linkedin.com/in/anthony-steffen-dev" target="_blank" rel="noopener noreferrer">
              <AiOutlineLinkedin size={ 50 } className="text-primary" />
            </Link>
            <h4 className="text-white-50">Linkedin</h4>
            <p
              className="text-white fw-bold"
              style={ { fontSize: clamp } }
            >
              linkedin.com/in/anthony-steffen-dev
            </p>
          </Col>
          <Col xs={ 12 } md={ 4 } className="mt-2 d-flex flex-column align-items-center">
            <Link to="https://wa.me/8491423988" target="_blank" rel="noopener noreferrer">
              <AiOutlineMessage size={ 50 } className="text-success" />
            </Link>
            <h4 className="text-white-50">Chat</h4>
            <p
              className="text-white fw-bold text-center"
              style={ { fontSize: clamp } }
            >
              Disponível para chat em horário comercial.
            </p>
          </Col>
        </body>
      </div>

      <div
        className="
        fw-bold fixed-bottom bg-dark rounded-1
        d-flex flex-column justify-content-center"
        style={ { height: '12vh' } }
      >
        <NavigationBar />
      </div>
    </div>
  );
}

export default Contact;
