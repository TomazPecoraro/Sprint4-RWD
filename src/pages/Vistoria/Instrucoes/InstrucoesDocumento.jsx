import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import styles from './instrucoes.module.css';

export default function InstruçõesDocumento() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <section>
                <h1 className={styles.fundobranco}>Vistoria</h1>
                </section>
                <section>
                    <p>Olá você entrou na Vistoria Bike Check!</p>
                    <p>Mas antes da parte divertida precisamos de algumas informações</p>
                </section> 
                <section>
                    <p>Confirme sua Identidade</p>
                </section>
                <section>
                    <button>RG</button>
                </section>
                <section>
                    <button>CPF</button>
                </section>
                <section>
                <Link href="../Documentos/documentofrente">Próximo</Link>
                </section>
            </main>
        </div>
    )
}