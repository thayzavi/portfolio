import styles from '@/app/styles/sobre.module.css';

export default function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className={styles.card}>
        <img src="/img/foto2.jpg" className={styles.img} alt='foto2' />
      </div>

      <div className={styles.text}>
        <h2>Sobre</h2>
        <p>
          Sou Thayza Vitória, desenvolvedora full-stack em formação,
          graduanda em Análise e Desenvolvimento de Sistemas pela Faculdade Senac.
        </p>
        <p>
          Atuo no desenvolvimento de aplicações web, 
          com experiência em HTML, CSS, JavaScript,
          React e Node.js, participando de todo o ciclo de desenvolvimento da construção de 
          interfaces à implementação de APIs REST e integração com o back-end. Tenho foco em qualidade de código, escalabilidade e experiência do usuário, aplicando boas práticas, organização e versionamento.

          Mantenho uma postura orientada a resultados, aprendizado contínuo e colaboração em equipe,
          buscando contribuir de forma consistente para projetos e soluções de negócio.
        </p>
      </div>
    </section>
  );
}
