import '../../app/globals.css'
import Image from "next/image";
import styles from './inicio.module.css'

export default function inicio() {
   return (
  <div>
    <main className={styles.center}>
      <section className={styles.sessao1}>
        <div className={styles.oquee}>
          <h1 className= {styles.titulooquee}>
            O que é Bike Check?
          </h1>
          <p className={styles.texto}>
            O desafio atual consiste em desenvolver uma solução digital para que os clientes do produto Porto Seguro Bike, possam realizar a inspeção online no momento da contratação sem a necessidade de intervenção humana no processo. Para enfrentar esse desafio, foi formado o grupo com o objetivo de criar uma resposta eficaz, e assim surgiu a BikeCheck.
          </p>
        </div>
        <div className={styles.imagem01}>
          <Image src="/01.png" width={420}height={327}/>
        </div>
      </section>
      <section className={styles.sessao2}>
        <div className={styles.imagem02}>
          <Image src = "/02.png" width={563} height={242}/>
        </div>
        <div className={styles.especialidades}>
          <h1 className={styles.tituloespecialidades}>Nossas Especialidades</h1>
          <li className={styles.topicos}>Google Vision Api</li>
          <li className={styles.topicos}>Tipos de Bicicleta</li>
          <li className={styles.topicos}>Questionario Inteligente</li>
          <li className={styles.topicos}>Escolha de Peças</li>
          <li className={styles.topicos}>I.A de Similaridade</li>
        </div>
      </section>
    </main>
  </div> 
  )
}