import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import styles from './resultados.module.css';

export default function Reprovado() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <section>
                <h1 className={styles.fundobranco}>Conclusão</h1>
                </section>
                <section>
                    <p>Seu resultado: Reprovado!</p>
                    <button>Tente Novamente</button>
                </section> 
                <section>
                    <Link href="../../../">Voltar para Home</Link>
                </section>
            </main>
        </div>
    )
}