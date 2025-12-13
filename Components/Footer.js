import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import styles from '@/app/styles/footer.module.css';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <h2 className={styles.logo}>
                        THAYZA <span>SILVA</span>
                    </h2>
                    <p className={styles.role}>Desenvolvedora Full-Stack</p>
                    <p className={styles.email}>@Thayzasilva88@gmail.com</p>
                </div>

                <div className={styles.right}>
                    <p>Redes Sociais</p>
                    <div className={styles.social}>
                        <Link
                            href="https://github.com/thayzavi"
                            target="_blank"
                            className={styles.link}
                        >
                            <FaGithub />
                        </Link>

                        <Link
                            href="https://www.linkedin.cóm/in/thayza-silva-b01474203"
                            target="_blank"
                            className={styles.link}
                        >
                            <FaLinkedin />
                        </Link>

                        <Link
                            href="mailto:thayzasilva88@gmail.com"
                            target="_blank"
                            className={styles.link}
                        >
                            <FaRegEnvelope />   
                        </Link>
                    </div>

                </div>
            </div>

            {/* Barra inferior */}
            <div className={styles.bottom}>
                Desenvolvido por <span>Thayza Silva</span>
            </div>
        </footer>
    );
}
