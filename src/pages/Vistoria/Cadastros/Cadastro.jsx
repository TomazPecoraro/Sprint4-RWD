import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import styles from './cadastro.module.css';

export default function Vistoria() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <section>
                    <h1 className={styles.fundobranco}>Cadastro</h1>
                </section>
                <section>
                    <form>
                        <div>
                            <label>Ei! Qual é o seu nome?</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Seu número é</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Email para contato:</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Por último seu CPF:</label>
                            <input type="text" name="name" />
                        </div>
                    </form>
                    <section>
                    <Link href="../Instrucoes/instrucoesdocumento">Finaliza</Link>
                    </section>
                </section>
            </main>
        </div>
    )
}