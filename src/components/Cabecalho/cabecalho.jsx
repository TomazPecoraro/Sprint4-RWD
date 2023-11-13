import Link from "next/link";
import  styles from './cabecalho.module.css';

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <nav>
        <div class={styles.cabecalho}>
          <h1 class={styles.bikecheck}>
            Bike Check
          </h1>
          <div className={styles.botao}>
            <Link href="/">Home</Link>
          </div>
          <div className={styles.botao}>
            <Link href="/Vistoria/Cadastros/cadastro">Vistoria</Link>
          </div>
          <div className={styles.botao}>
            <Link href="/Tecnologias/tecnologias">Tecnologias</Link>
          </div>
          <div className={styles.botao}>
            <Link href="/Membros/membros">Membros</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}