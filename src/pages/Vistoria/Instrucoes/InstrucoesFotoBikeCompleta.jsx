import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import Image from "next/image";
import styles from './instrucoes.module.css';

export default function instrucoesfotobikecompleta() {
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
                    <p>Foto Bike Completa</p>
                </section> 
                <section>
                    <p>Alguma instruções:</p>
                        <ul>
                            <li>Evite angulos baixos</li>
                            <li>Evite lugares com pouca iluminosidade</li>
                            <li>Apareça na foto apenas se indicado!</li>
                        </ul>
                </section> 
                <section>
                    <p>Exemplos Positivos:</p>
                    <Image src="/17.png" width={132}height={99}/>
                    <Image src="/18.png" width={144}height={94}/>
                </section>
                <section>
                    <p>Exemplos Negativos:</p>
                    <Image src="/19.png" width={101}height={134}/>
                    <Image src="/20.png" width={126}height={107}/>
                </section>
                <section>
                    <Link href="../Fotos/fotobikecompleta">Próxima</Link>
                </section>
            </main>
        </div>
    )
}