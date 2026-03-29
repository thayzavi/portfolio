import styles from '@/app/styles/habilidades.module.css';

export default function Habilidades() {

  const habilidades = [
    {
      categoria: "Front-end",
      itens: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "React Native",
        "Next.js",
        "Bootstrap"
      ]
    },
    {
      categoria: "Back-end",
      itens: [
        "Node.js",
        "Java",
        "Python",
        "Spring Boot"
      ]
    },
    {
      categoria: "Banco de Dados",
      itens: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Neo4j"
      ]
    },
    {
      categoria: "Inteligência Artificial",
      itens: [
        "Gemini",
        "ChatGPT",
        "Prompt Engineering",
        "Assistentes virtuais"
      ]
    },
    {
      categoria: "Ferramentas & Outros",
      itens: [
        "Git/GitHub",
        "Figma",
        "Scrum/Kanban",
        "Jira/Trello",
        "Swagger",
        "CI/CD"
        
      ]
    }
  ];

  return (
    <section id="habilidades" className={styles.habilidades}>
      <h1>Habilidades</h1>

      <div className={styles.cardsContainer}>
        {habilidades.map((grupo, index) => (
          <div key={index} className={styles.card}>
            <h2>{grupo.categoria}</h2>

            <div className={styles.lista}>
              {grupo.itens.map((item, i) => (
                <div key={i} className={styles.item}>
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}