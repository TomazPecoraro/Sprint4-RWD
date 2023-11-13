import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import styles from './cadastro.module.css';

export default function CadastroBike2() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <section>
                <h1 className={styles.fundobranco}>hmmm... E sobre isso aqui:</h1>
                </section>
                <section>
                    <p>Essa informações são obrigatórias</p>
                </section> 
                <section>
                    <h4>Sua bike possui modificações?</h4>
                    <button>Sim</button>
                    <button>Não</button>
                </section>
                <section>
                    <form>
                        <div>
                            <p>Digite o Modelo da respectiva peça, caso seja original, deixe em branco</p>
                        </div>
                        <div>
                            <label>Aro:</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Banco:</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Guidão:</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Transmissão:</label>
                            <input type="text" name="name" />
                        </div>
                    </form>
                    </section>
                <section>
                <Link href="../Instrucoes/instrucoesfotobike">Próximo</Link>
                </section>
            </main>
        </div>
    )
}