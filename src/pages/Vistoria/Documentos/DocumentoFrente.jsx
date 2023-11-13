import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import Image from "next/image";
import styles from './documento.module.css'

export default function DocumentoFrente() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <section>
                <h1 className={styles.fundobranco}>Confirme sua Identidade</h1>
                </section>
                <section>
                    <p>Agora, precisamos que você tire uma foto da frente do documento!</p>
                    <p>Evite reflexos e mantenhas as mãos estaveis!</p>
                </section> 
                <section>
                    <Image src="/12.png" width={213}height={292}/>
                </section>
                <section>
                <Link href="./documentoverso">Próximo</Link>
                </section>
            </main>
        </div>
    )
}