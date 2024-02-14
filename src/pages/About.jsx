import NavigationBar from '../components/footer/NavigationBar';

function About() {
  return (
    <div className="gradient-custom text-center text-white vh-100">
      <div className="card bg-dark col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto">
        <div className="card-header bg-primary py-3">
          <NavigationBar />
        </div>
        <div className="card-body px-2 py-1">
          <p className="card-text text-white">
            Olá! 👋 Me chamo Anthony Steffen, um entusiasta do desenvolvimento
            front-end com uma paixão especial por React.
            {' '}
            <br />
            Ao longo da minha jornada, mergulhei fundo no mundo do desenvolvimento web,
            explorando e implementando soluções inovadoras para criar
            experiências de usuário envolventes.
            <br />

            Tudo começou com um fascínio pela interseção entre design e código,
            e desde então tenho trabalhado incansavelmente para aprimorar minhas
            habilidades em React, uma biblioteca
            que considero incrivelmente poderosa e flexível.
            <br />

            Com uma abordagem centrada no usuário, meu objetivo é traduzir
            ideias criativas em interfaces elegantes e funcionais.
            <br />
            {' '}
            Estou constantemente atualizado com as melhores práticas de desenvolvimento
            e busco incorporar as últimas tendências e tecnologias em meus projetos.
            <br />

            Se você está em busca de um desenvolvedor front-end comprometido, com
            habilidades sólidas em React e um olhar atento para detalhes de design,
            estou pronto para contribuir para o sucesso do seu projeto.
            Vamos construir algo incrível juntos!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
