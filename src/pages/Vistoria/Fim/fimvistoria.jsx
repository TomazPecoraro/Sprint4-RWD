import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import styles from './fim.module.css'

export default function fim() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <section>
                <h1 className={styles.fundobranco}>Até mais</h1>
                </section>
                <section>
                    <p>Nossa jornada acabou aqui!</p>
                </section> 
                <section>
                    <p>Estamos te encaminhando para área Porto</p>
                </section> 
                <section>
                    <Link href="../../../">Voltar para Home</Link>
                </section>
            </main>
        </div>
    )
}