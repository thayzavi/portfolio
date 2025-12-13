import styles from '@/app/styles/formacao.module.css';

export default function Formacao() {
  const items = [
    {
      ano: "2019 a 2021",
      texto: "Erem Luiz Delgado - Ensino Médio completo",
      lado: "right",
    },
    {
      ano: "2023 a 2025",
      texto: "Design Gráfico - Grau Profissionalizante",
      lado: "left",
    },
    {
      ano: "2024 a 2026",
      texto: "ADS - Faculdade Senac - PE - Em andamento",
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
        </div>
      </div>

      <span className={styles.linhaCirculo }></span>
    </div>
  );

  return (
    <section id="formacao" className={styles.formacao}>
      <div className={styles.Container}>
        <h1 className={styles.titulo}>Formação</h1>

        <div className={styles.linha}>
          {items.map((data, index) => (
            <TimelineItem data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
