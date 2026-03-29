import styles from '@/app/styles/formacao.module.css';

export default function Formacao() {
  const items = [
  {
    ano: "Jun 2023 - Mar 2025",
    titulo: "Formação em Design Gráfico",
    descricao: "Desenvolvimento de habilidades em UI/UX, identidade visual e prototipação de interfaces, com foco em criação de layouts modernos e centrados no usuário.",
    lado: "left",
  },
  {
    ano: "2024 - Atual",
    titulo: "Graduação em Análise e Desenvolvimento de Sistemas",
    descricao: "Formação pela Faculdade Senac - PE, com foco em desenvolvimento Full Stack, criação de APIs REST, banco de dados e boas práticas de engenharia de software.",
    lado: "right",
  },
  {
    ano: "Mar 2024 - Jun 2024",
    titulo: "Residência Tecnológica - Porto Digital",
    descricao: "Criação de protótipo no Figma voltado a soluções climáticas para Recife, atuando em pesquisa, ideação e desenvolvimento de interfaces responsivas com foco em acessibilidade e experiência do usuário.",
    lado: "left",
  },
  {
    ano: "Ago 2024 - Set 2024",
    titulo: "Residência em Quality Assurance - CESAR",
    descricao: "Atuação em testes manuais e exploratórios, identificação de bugs e validação de funcionalidades, contribuindo para a qualidade do software e melhoria contínua do processo de entrega.",
    lado: "right",
  },
  {
    ano: "Mar 2025 - Jun 2025",
    titulo: "Residente em Tecnologia - Deloitte",
    descricao: "Atuação em SAP MM, executando processos de compras (requisição, pedido, MIGO e MIRO), integração com fornecedores e aplicação de conceitos de Inteligência Artificial no contexto corporativo.",
    lado: "left",
  },
   {
    ano: "Jun 2025 - Mar 2026",
    titulo: "Formação Back-end com Java - Alura + Oracle",
    descricao: "Capacitação em desenvolvimento back-end utilizando Java, com foco em Programação Orientada a Objetos, APIs REST, integração com banco de dados e boas práticas de desenvolvimento com o ecossistema Oracle.",
    lado: "right",
  },
];

  const TimelineItem = ({ data }) => (
    <div
      className={`${styles.linhaItem} ${
        data.lado === "left" ? styles.leftItem : styles.rightItem
      }`}
    >
      <div className={styles.linhaContent}>
        <div
          className={`${styles.anoBox} ${
            data.lado === "left" ? styles.leftAno : styles.rightAno
          }`}
        >
          {data.ano}
        </div>
        <div className={styles.description}>
          <p className={styles.title}>{data.texto}</p>
          <p className={styles.title}>{data.titulo}</p>
          <p className={styles.text}>{data.descricao}</p>
        </div>
      </div>

      <span className={styles.linhaCirculo }></span>
    </div>
  );

  return (
    <section id="formacao" className={styles.formacao}>
      <div className={styles.Container}>
        <h1 className={styles.titulo}> Experiência & Formação</h1>

        <div className={styles.linha}>
          {items.map((data, index) => (
            <TimelineItem data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
