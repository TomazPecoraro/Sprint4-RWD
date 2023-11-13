import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import styles from './instrucoes.module.css';

export default function DocumentoVerso() {
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
                    <p>Aviso! A partir do primeiro envio as fotos teram um prazo de validade e devem ser enviadas em até 24 horas</p>
                </section> 
                <section>
                    <p>Também existe um limite de tentativas para o envio de fotos, então faça questão de enviar com a melhor qualidade possível!</p>
                </section>
                <section>
                   <p>Se entende e deseja prosseguir, clique o botão abaixo</p>
                </section>
                <section>
                <Link href="../Instrucoes/instrucoesfotonumeroserie">Entendo</Link>
                </section>
            </main>
        </div>
    )
}