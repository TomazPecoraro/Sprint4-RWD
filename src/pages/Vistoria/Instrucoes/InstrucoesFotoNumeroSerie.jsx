import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import Image from "next/image";
import styles from './instrucoes.module.css';

export default function InstrucoesFotoNumeroSerie() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <section>
                <h1 className={styles.fundobranco}>Hora da Foto!</h1>
                </section>
                <section>
                    <p>Tire uma foto do numero de serie</p>
                </section> 
                <section>
                    <p>O numero de serie pode estar localizado em um desses locais:</p>
                </section>
                <section>
                    <Image src="/15.png" width={249}height={146}/>
                </section>
                <section>
                    <Link href="../Fotos/fotonumeroserie">Prosseguir para Captura</Link>
                </section>
            </main>
        </div>
    )
}