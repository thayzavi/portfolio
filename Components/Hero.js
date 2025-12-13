import styles from '@/app/styles/hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.texts}>
        <p className={styles.oi}>Oi, sou Thayza Silva</p>
        <h1 className={styles.title}>
          DESENVOLVEDORA FULL-STACK
        </h1>
        <p className={styles.desc}>
          Transformando desafios complexos em aplicações elegantes e funcionais.
        </p>
      </div>

      <div className={styles.shapes}>
        <div className={styles.square1}>
          <img
            src="/img/foto.jpg"
            className={styles.img}
            alt="foto"
          />
        </div>
      </div>
    </section>
  );
}
