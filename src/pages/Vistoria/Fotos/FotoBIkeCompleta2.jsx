import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import Image from "next/image";
import styles from './fotos.module.css';

export default function fotobikecompleta() {
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
                    <p>Okay, agora do outro lado!</p>
                </section> 
                <section>
                    <p>Foto da Bike Completa:</p>
                </section> 
                <section>
                    <Image src="/16.png" width={219}height={292}/>
                </section>
                <section>
                    <Link href="../Instrucoes/instrucoesanalise">Enviar</Link>
                </section>
            </main>
        </div>
    )
}