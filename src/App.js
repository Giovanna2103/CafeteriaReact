import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

 
function App() {
  const [pagina, setPagina] = useState(corpo[0].home);
   return (
    <div className="App">
      <Header>
        {document.getElementById("btnhome").onclick=()=>setPagina(corpo[0].home)}
        {document.getElementById('btnhistoria').onclick=()=>setPagina(corpo[0].historia)}
        {document.getElementById('btncardapio').onclick=()=>setPagina(corpo[0].cardapio)}
        {document.getElementById('btncontato').onclick=()=>setPagina(corpo[0].contato)}
        {document.getElementById('btnlocalizacao').onclick=()=>setPagina(corpo[0].localizacao)}
      </Header>

      <Main paginas={pagina}/>

      <Footer/>
    </div>
  );
}

const corpo = [
  {
    home:{
    id:1,
    titulo:"Bem vindo a nossa pagina",
    blocotxt: `Rock na hora de acordar, Rock no café da manhã, 
    rock saindo de casa, andando na rua, chegando na escola,
    rock na aula de matemática, voltando pra casa, no almoço, 
    na tarefa, no banho, na hora de dormir.. enfim, rock toda hora.
    Rock é felicidade e deve ser incluído em todos os momentos da vida. 
    Da hora em que acordamos, com uma boa xícara de café fumegante, 
    até o momento em que nos deitamos. Rock para nos lembrar que estamos vivos!`
    },

    historia:{
      id:2,
      titulo:"Historia",
      blocotxt:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis
      doloribus, rem eos consequuntur minus similique repudiandae exercitationem incidunt reiciendis optio
      culpa voluptates alias at sint impedit.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis
      doloribus, rem eos consequuntur minus similique repudiandae exercitationem incidunt reiciendis optio
      culpa voluptates alias at sint impedit.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis
      doloribus, rem eos consequuntur minus similique repudiandae exercitationem incidunt reiciendis optio
      culpa voluptates alias at sint impedit.`,
      imagens:{
        foto1:"img/cafeteria1.jpg",
        foto2:"img/cafeteria2.jpg",
        foto3:"img/cafeteria3.jpg"
      }
    },
      cardapio:{
        id:3,
        titulo:"Confira nosso Cardapio",
        imagens:{
          cafes:{
            foto1:'img/cafe1.jpg',
            texto1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis',
            foto2:'img/cafe2.jpg',
            texto2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis',
            foto3:'img/cafe3.jpg',
            texto3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis',
            foto4:'img/cafe4.jpg',
            texto4: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis'
          },
          salgados:{
            foto1:'img/salgado1.jpg',
            texto1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis',
            foto2:'img/salgado2.jpg',
            texto2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis',
            foto3:'img/salgado3.jpg',
            texto3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis',
            foto4:'img/salgado4.jpg',
            texto4: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis'
          },
          doces:{
            foto1:'img/doce1.jpg',
            texto1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis',
            foto2:'img/doce2.jpg',
            texto2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis',
            foto3:'img/doce3.jpg',
            texto3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis',
            foto4:'img/doce4.jpg',
            texto4: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti minima veniam qui facilis'
          }
        }

    },
    contato:{
      id:4,
      titulo:"Entre em contato conosco",
      blocotxt:"Formulario para contato",
      },

    localizacao:{
      id:5,
      titulo:"Onde estamos",
      blocotxt:"mapa do google",
    }
  }

]


export default App;
