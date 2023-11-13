import '../../../app/globals.css'
import Header from '../../../components/Cabecalho/cabecalho';
import Link from 'next/link';
import styles from './cadastro.module.css';

export default function cadastrobike() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <section>
                <h1 className={styles.fundobranco}>Me conte sobre esse Bike</h1>
                </section>
                <section>
                    <p>Essa informações são obrigatórias</p>
                </section> 
                <section>
                    <h4>Tipo:</h4>
                    <button>Urbana</button>
                    <button>Esportes</button>
                    <button>Elétrica</button>
                </section>
                <section>
                    <form>
                        <div>
                            <label>Modelo:</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Cor:</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Ano:</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Número de Série:</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Fabricante:</label>
                            <input type="text" name="name" />
                        </div>
                    </form>
                    </section>
                <section>
                <Link href="./cadastrobike2">Próximo</Link>
                </section>
            </main>
        </div>
    )
}