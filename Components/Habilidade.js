import styles from '@/app/styles/habilidades.module.css';

import { FaJs, FaNodeJs, FaBootstrap, FaReact, FaGitAlt, FaJava, FaPython, FaHtml5, FaRobot } from "react-icons/fa";
import { SiNextdotjs, SiFigma } from "react-icons/si";

export default function Habilidades() {
  const icons = [
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React Native" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaHtml5 />, name: "HTML5"},
    { icon: <FaRobot />, name: "IA"},
  ];

  return (
    <section id="habilidades" className={styles.habilidades}>
      <h1>Habilidades</h1>

      <div className={styles.circles}>
        {icons.map((item, index) => (
          <div key={index} className={styles.circle}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
