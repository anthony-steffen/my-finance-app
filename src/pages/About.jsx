/* eslint-disable react/jsx-max-depth */
import { Row, Col } from 'react-bootstrap';
import NavigationBar from '../components/footer/NavigationBar';

function About() {
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
        <header className="d-flex align-items-center justify-content-center w-100">
          <h1> Sobre Mim </h1>
        </header>
      </Row>
      <Row
        className="
        vh-100 gradient-custom d-flex justify-content-center align-items-start py-3"
      >
        <Col xs={ 12 } md={ 6 }>
          <div
            className="card gradient-custom"
            style={ { overflowY: 'auto', maxHeight: '75vh' } }
          >
            <div className="card-body">
              <h6
                className="card-subtitle text-white text-center"
              >
                Olá, Me chamo Anthony Steffen. 👋
              </h6>
              <p
                className="text-center text-white mb-4"
              >
                <br />
                Programador e entusiasta do desenvolvimento front-end
                com uma paixão especial por React.
                <br />
                Ao longo da minha jornada profissional, mergulhei fundo
                no mundo do desenvolvimento web, explorando e implementando
                soluções inovadoras para criar experiências de usuário envolventes.
                <br />
                Minha jornada começou com um fascínio pela interseção entre
                design e código, e desde então tenho trabalhado para aprimorar
                minhas habilidades em React, uma biblioteca que considero
                incrivelmente poderosa e flexível.
                <br />
                Estou constantemente atualizado com as melhores práticas de
                desenvolvimento e busco incorporar as últimas tendências e
                tecnologias em meus projetos.
                <br />
                Além da programação, sou apaixonado por resolver problemas,
                aprender continuamente e colaborar em equipe.
                Acredito que a colaboração é a chave para o sucesso, e
                adoro trabalhar em ambientes que valorizam a inovação e o
                compartilhamento de conhecimento.
                <br />
                Se você está em busca de um desenvolvedor front-end comprometido,
                com habilidades sólidas em React e um olhar atento para detalhes de
                design, estou pronto para contribuir para o sucesso do seu projeto.
                Vamos construir algo incrível juntos!
              </p>
            </div>
          </div>
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

export default About;
