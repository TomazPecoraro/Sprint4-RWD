import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import Image from "next/image";
import styles from './documento.module.css'

export default function documentoverso() {
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
                    <p>Só mais uma! Agora, tire uma foto do verso documento </p>
                    <p>Sem Reflexos + Objeto Estáveis = Confirmado</p>
                </section> 
                <section>
                    <Image src="/13.png" width={211}height={295}/>
                </section>
                <section>
                <Link href="../Fotos/fotoselfie">Próximo</Link>
                </section>
            </main>
        </div>
    )
}