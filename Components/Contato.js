import styles from '@/app/styles/contato.module.css';
import Link from "next/link";

export default function Contato() {
  return (
    <section id="contato" className={styles.contato}>
      <h2>Contato</h2>

      <div className={styles.card}>
        <Link
          href="https://github.com/thayzavi"
          target="_blank"
          className={styles.link}
        >
          GitHub
        </Link>

        <Link
          href="mailto:thayzasilva88@gmail.com"
          className={styles.link}
        >
          E-mail
        </Link>

        <Link
          href="https://www.linkedin.com/in/thayza-silva-b01474203 "
          target="_blank"
          className={styles.link}
        >
          LinkedIn
        </Link>
      </div>

      <p className={styles.text}>Tem um projeto em mente ?</p>

      <Link
        href="mailto:thayzasilva88@gmail.com"
        className={styles.cta}
      >
        Vamos conversar!
      </Link>
    </section>
  );
}
