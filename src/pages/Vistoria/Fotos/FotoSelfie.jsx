import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import Image from "next/image";
import styles from './fotos.module.css';

export default function FotoSelfie() {
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
                    <p>Seu Rostinho, tire uma selfie para comprovar que é você no documento</p>
                    <p>Sem óculos e sem acessórios num ambiente claro</p>
                </section> 
                <section>
                    <Image src="/14.png" width={157}height={206}/>
                </section>
                <section>
                    <Link href="../Cadastros/cadastrobike">Enviar</Link>
                </section>
            </main>
        </div>
    )
}