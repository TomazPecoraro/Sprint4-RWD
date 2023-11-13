import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import Image from "next/image";
import styles from './instrucoes.module.css';

export default function instrucoesanalise() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <section>
                <h1 className={styles.fundobranco}>Concluído</h1>
                </section>
                <section>
                    <p>Pronto! Enviado</p>
                </section> 
                <section>
                    <p>Suas fotos estão em análise!</p>
                </section> 
                <section>
                    <Image src="/23.png" width={246}height={8}/>
                    <p>99%</p>
                </section>
                <section>
                    <Link href="../Fim/fimvistoria">Próximo</Link>
                </section>
            </main>
        </div>
    )
}