/* eslint-disable react/jsx-max-depth */
import { Col } from 'react-bootstrap';
import NavigationBar from '../components/footer/NavigationBar';

function About() {
  return (
    <div className="gradient-custom d-flex flex-column vh-100">
      <div
        className="text-white d-flex align-items-center justify-content-center"
        style={ {
          height: '12vh',
          textShadow: '2px 2px 4px #000000',
          textDecoration: 'underline',
          textUnderlineOffset: '0.5rem',
        } }
      >
        <header className="text-center">
          <h1> Sobre mim </h1>
        </header>
      </div>
      <div>
        <body
          className="gradient-custom d-flex flex-wrap justify-content-center
          align-items-start"
          style={ { height: '76vh' } }
        >

          <Col
            xs={ 12 }
            md={ 8 }
            lg={ 6 }
            className="card gradient-custom"
            style={ { overflowY: 'auto', maxHeight: '74vh' } }
          >
            <div className="card-body p-3">
              <h6
                className="card-subtitle text-white text-center"
              >
                Olá, Me chamo Anthony Steffen. 👋
              </h6>
              <p
                className="text-center text-white mb-0"
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

export default About;
