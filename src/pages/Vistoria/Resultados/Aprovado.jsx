import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import styles from './resultados.module.css';

export default function aprovado() {
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
                    <p>Seu resultado: Aprovado!</p>
                    <p>Sua bike é real, e é otima!</p>
                </section> 
                <section>
                    <Link href="../../../">Voltar para Home</Link>
                </section>
            </main>
        </div>
    )
}