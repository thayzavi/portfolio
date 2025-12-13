'use client';

import { useState } from 'react';
import styles from '@/app/styles/header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        THAYZA <span>SILVA</span>
      </h1>

      {/* Botão Hambúrguer */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
        <a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a>
        <a href="#formacao" onClick={() => setMenuOpen(false)}>Formação</a>
        <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>

        <a
          href="/curriculo/Currículo.pdf"
          download
          className={styles.curriculoMobile}
        >
          Baixar currículo
        </a>
      </nav>

      <a
        href="/curriculo/Currículo.pdf"
        download
        className={styles.curriculo}
      >
        Baixar currículo
      </a>
    </header>
  );
}
