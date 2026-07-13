import Image from "next/image";
import styles from "@/app/styles/participacoes.module.css";

export default function Participacoes() {
  const participacoes = [
    {
      ano: "2026",
      categoria: "Palestra",
      titulo: "RH do Selo",
      local: "Porto Digital — Recife/PE",
      imagem: "/img/rg.JPG",
      descricao:
        "Fui convidada para compartilhar um pouco da minha trajetória no Embarque Digital, falando sobre experiências, aprendizados e desafios vivenciados durante minha formação na área de tecnologia.",
      destaque: "Trajetória no Embarque Digital",
    },
    {
      ano: "2026",
      categoria: "Apresentação de Projeto",
      titulo: "Bio Lens",
      local: "Faculdade Senac Pernambuco",
      imagem: "/img/senac.png",
      descricao:
        "Apresentação do Bio Lens, uma solução desenvolvida com Inteligência Artificial e Visão Computacional para analisar imagens e auxiliar na identificação de possíveis focos de dengue.",
      destaque: "Inteligência Artificial e impacto social",
    },
    {
      ano: "2026",
      categoria: "Bootcamp",
      titulo: "Bootcamp KPMG",
      local: "Porto Digital",
      imagem: "/img/kp.JPG",
      descricao:
        "Participação em uma jornada de capacitação promovida pela KPMG, com desenvolvimento de conhecimentos em análise de dados, Power Apps e organização de dados em diferentes camadas.",
      destaque: "Power Apps e análise de dados",
    },
    {
      ano: "2026",
      categoria: "Hackathon",
      titulo: "Hackathon SUAPE",
      local: "Porto Digital",
      imagem: "/img/SUAPE.png",
      descricao:
        "Participação no desenvolvimento de uma solução para gestão de licenças e condicionantes ambientais, com foco no controle de prazos, documentos, indicadores e automação de processos.",
      destaque: "Tecnologia aplicada à gestão ambiental",
    },
  ];

  return (
    <section id="participacoes" className={styles.participacoes}>
      <div className={styles.container}>
        <header className={styles.cabecalho}>
          <span className={styles.subtitulo}>
            Experiências além do código
          </span>

          <h2 className={styles.titulo}>
            Participações <span>&</span> Apresentações
          </h2>

          <p className={styles.introducao}>
            Momentos em que tive a oportunidade de apresentar projetos,
            compartilhar minha trajetória e participar de experiências que
            contribuíram para o meu desenvolvimento profissional.
          </p>
        </header>

        <div className={styles.grid}>
          {participacoes.map((item, index) => (
            <article className={styles.card} key={item.titulo}>
              <div className={styles.imagemContainer}>
                <Image
                  src={item.imagem}
                  alt={`${item.titulo} - ${item.local}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.imagem}
                />

                <div className={styles.overlay}></div>

                <span className={styles.numero}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className={styles.imagemInformacoes}>
                  <span className={styles.categoria}>
                    {item.categoria}
                  </span>

                  <span className={styles.ano}>{item.ano}</span>
                </div>
              </div>

              <div className={styles.conteudo}>
                <h3 className={styles.cardTitulo}>{item.titulo}</h3>

                <p className={styles.local}>
                  <span aria-hidden="true"></span>
                  {item.local}
                </p>

                <p className={styles.descricao}>{item.descricao}</p>

                <div className={styles.destaque}>
                  <span>Principal destaque</span>
                  <strong>{item.destaque}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}