import styles from '@/app/styles/sobre.module.css';

export default function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
      <h1 className={styles.titulo}>SOBRE</h1>

      <div className={styles.card}>
        <div className="bubble"></div>
        <img src="/img/foto2.png" className={styles.img} alt="foto2" />
         <div className={styles.text}>
        <p>

        Sou Thayza Silva, uma desenvolvedora de software em formação apaixonada por transformar ideias em soluções digitais.
        Atualmente curso Análise e Desenvolvimento de Sistemas e venho construindo minha experiência criando aplicações completas, do front ao back-end,
        utilizando tecnologias como HTML, CSS, JavaScript, React, Node.js, Java e Python.
        Gosto de ir além do código: entender o problema, 
        pensar na melhor solução e criar experiências que realmente façam sentido para quem usa. Também tenho explorado Inteligência Artificial para desenvolver aplicações mais inteligentes e eficientes.
        Sou movida por desafios, aprendizado constante e pela vontade de evoluir todos os dias. Aqui no meu portfólio, você vai encontrar projetos que refletem minha jornada, minhas habilidades e minha paixão por tecnologia.
        </p>
      </div>
      </div>

    </section>
  );
}
