import styles from '@/app/styles/hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.texts}>
        <p className={styles.oi}>Oi, sou Thayza Silva</p>
        <h1 className={styles.title}>
          DESENVOLVEDORA DE SOFTWARE
        </h1>
        <p className={styles.desc}>
          Transformo ideias em aplicações completas, 
          unindo front-end e back-end para criar soluções eficientes, escaláveis e centradas no usuário.
        </p>
      </div>

      <div className={styles.shapes}>
        <div className={styles.square1}>
          <img
            src="/img/perfilP.jpg"
            className={styles.img}
            alt="foto"
          />
        </div>
      </div>
    </section>
  );
}
