"use client";
import { useState, useEffect } from "react";
import styles from '@/app/styles/projetos.module.css';
import Link from "next/link";

export default function Projetos() {
  const projetos = [
    {
      img: "/img/crud-medico.jpg",
      titulo: "CRUD de Médicos API",
      desc: "API REST desenvolvida com Java e Spring Boot para gerenciamento de médicos, com operações de cadastro, listagem, atualização e exclusão (CRUD), utilizando boas práticas como DTO, validação e integração com banco de dados.",
      link: "https://github.com/thayzavi/crud-medicos"
    },
    {
      img: "/img/forum-hub.jpg",
      titulo: "Fórum Hub",
      desc: "Sistema backend desenvolvido com Java e Spring Boot inspirado em fóruns de discussão, com autenticação, gerenciamento de tópicos e respostas, aplicando conceitos de API REST, segurança e arquitetura em camadas.",
      link: "https://github.com/thayzavi/forum-Hub"
    },
    {
      img: "/img/tpf.png",
      titulo: "Projeto Agente De IA - TPF",
      desc: "Este projeto é uma aplicação de chat interativo com Inteligência Artificial (IA) desenvolvida para otimizar a interação e o processamento de documentos.",
      link: "https://tpf-ai.netlify.app/auth/login"
    },
    {
      img: "/img/anime.png",
      titulo: "Portal Anime Web",
      desc: "Portal Anime Web é um projeto desenvolvido como parte de um trabalho acadêmico, criado para exibir um site de animes. Desenvolvido com foco em integração de APIs",
      link: "https://portalanimewebof.netlify.app/"
    },
    {
      img: "/img/pi.png",
      titulo: "Dashboard ProAlert",
      desc: "Sistema desenvolvido em Python para monitoramento dos níveis da água, com autenticação multifator (MFA).",
      link: "https://github.com/thayzavi/dashboard_PI"
    },
    {
      img: "/img/proalert.png",
      titulo: "ProAlert",
      desc: "Página web desenvolvida com Next.js para o projeto acadêmico ProAlert, focada em desempenho, responsividade e boa experiência do usuário.",
      link: "https://github.com/thayzavi/proalert"
    },
    {
      img: "/img/catalogo.png",
      titulo: "Catálogo Virtual - Moda",
      desc: "Este é um projeto simples de uma página web que simula um catálogo de roupas.",
      link: "https://thayzavi.github.io/roupa/"
    },
    {
      img: "/img/salao.png",
      titulo: "Salão Senac",
      desc: "Este projeto é um sistema de agendamento de serviços desenvolvido para o salão SENAC, utilizando as tecnologias HTML, CSS e JavaScript.",
      link: "https://thayzavi.github.io/Salao-Senac/"
    },
    {
      img: "/img/evo.png",
      titulo: "Assistente Evo",
      desc: "Assistente Evo é um chat integrado com IA, desenvolvido com React Native. Com o propósito de auxiliar pessoas com questões relacionadas à saúde mental.",
      link: "https://github.com/thayzavi/evo"
    },
    {
      img: "/img/gg-obra.png",
      titulo: "GG - Obra",
      desc: "Sistema desenvolvido em React Native para gerenciamento de obras e fiscalizações, com suporte de um assistente de IA.",
      link: "https://github.com/thayzavi/GG-Obras"
    },
    {
      img: "/img/doa.png",
      titulo: "DoaPe",
      desc: "DoaPE é um aplicativo desenvolvido em React Native com foco exclusivo em promover e facilitar a doação de sangue no estado de Pernambuco.",
      link: "https://github.com/thayzavi/DoaPe?tab=readme-ov-file"
    },
    {
      img: "/img/bioLens.png",
      titulo: "DoaPe",
      desc: "O Bio Lens foi desenvolvido para auxiliar pesquisadores, estudantes e profissionais da área ambiental na identificação e classificação de organismos por meio de imagens. Utilizando Inteligência Artificial e Visão Computacional, o sistema analisa fotografias enviadas pelos usuários",
      link: "https://biolens-v01.netlify.app/login"
    }
  ];

  const [index, setIndex] = useState(0);
  const [cardsVisiveis, setCardsVisiveis] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCardsVisiveis(window.innerWidth < 768 ? 1 : 3);
      setIndex(0); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = projetos.length - cardsVisiveis;
  const deslocamento = 100 / cardsVisiveis;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section id="projetos" className={styles.projetos}>
      <h1>Projetos</h1>

      <div className={styles.carouselContainer}>
        <button className={styles.btn} onClick={prev}>◄</button>

        <div className={styles.carousel}>
          <div
            className={styles.inner}
            style={{ transform: `translateX(-${index * deslocamento}%)` }}
          >
            {projetos.map((p, i) => (
              <div className={styles.card} key={i}>
                <img src={p.img} alt={p.titulo} className={styles.imagem} />

                <h3>{p.titulo}</h3>
                <p>{p.desc}</p>

                <Link href={p.link} target="_blank" className={styles.btnLink}>
                  Ver Projeto
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.btn} onClick={next}>►</button>
      </div>
    </section>
  );
}
             