import '../../app/globals.css'
import Image from 'next/image';
import Header from '../../components/Cabecalho/cabecalho';
import Rodape from '@/components/Rodape/rodape';

export default function Tecnologias() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <section>
          <h2>Tecnologias</h2>
          <p>Após pesquisas e entrevistas, essas são as tecnologias atuais que podem nos ajudar</p>
          <ul>
          < Image src = "/07.png" width={72}height={72}/>
            <li>Google Vision API: O recurso encapsula modelos avançados de machine learning em uma API fácil de usar. Com o Google Vision é possível extrair contúdos de imagens, reconhecer padrões, detectar objetos, reconhecer formar geométricas e rostos, classificar objetos e transcrever palavras contidas em imagens</li>
          </ul>
          <ul>
          < Image src = "/08.png" width={72}height={72}/>
            <li>Escolha de peças: Algumas peças são muito pequenas e muito díficeis de serem dicernidas com clareza por inteligëncias artificiais, mas pelo sue preço não deviam ser ignoradas, por isso usando as informações previamente coletadas os usuários podem escolher as peças adicionais que a bicicleta possui</li>
          </ul> 
          <ul>
          < Image src = "/09.png" width={72}height={72}/>
            <li>Tipos de Bicicleta: Existem alguns tipos principais de bicicletas que compõe a grande maioria delas como: Mountain Bike, Speed, Grave. Sabendo disso, algumas bicicletas possuem certas peculiaridades, criando nichos específicos</li>
          </ul>
          <ul>
          < Image src = "/10.png" width={72}height={72}/>
            <li>Questionario Inteligente: Por perguntas bem pensadas é possível diminuir as bicicletas que um pode ter, junto com uma inteligência artificial isso pode diminuir as falhas, por exemplo, se sua bicicleta é do ano XXXX e da marca Y é possível checar os certos modelos lançados aquele ano e no que cada um deles pode ser alterado</li>
          </ul>
          <ul>
          < Image src = "/11.png" width={72}height={72}/>
            <li>I.A de Similaridade: Certas bicicletas possuem características visuais que conseguem identificar, por exemplo, a largura da roda, a marca no quadro ou o tipo de material. Usando esses e outros pontos é possível desenvolver uma Inteligência Artificial que ajude no processo</li>
          </ul>
        </section>
      </main>
      <footer>
        <Rodape/>
      </footer>
    </div>
  );
};
