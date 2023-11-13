import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import Image from "next/image";
import styles from './fotos.module.css';

export default function fotonumeroserie() {
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
                    <p>Deixe sua bike estável para tirar a foto, tenha cuidado com você e sua bicicleta!</p>
                </section> 
                <section>
                    <p>Foto do Numero de Serie:</p>
                </section> 
                <section>
                    <Image src="/16.png" width={219}height={292}/>
                </section>
                <section>
                    <Link href="../Fotos/FotoNumeroSerie2">Enviar</Link>
                </section>
            </main>
        </div>
    )
}