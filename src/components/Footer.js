import {FaFacebook, FaYoutube, FaInstagram, FaTwitter} from 'react-icons/fa';
export default function Footer(){
    return(
        <div className="rodape">

             <div className="endereco" >
                 <p>Av. Cangaiba 1153 - Cangaiba - São Paulo <br/>
                 Contato: (11) 95534-4387 | (11) 2453-0987<br/> 
                 E-mail: cafeteria@contato.com.br </p>       
            </div>    

            < div className="redes" >   
                <nav>
                  <ul>
                      <li><a href="http://www.facebook.com">  <FaFacebook/>   </a> </li>
                      <li><a href="http://www.youtube.com"> <FaYoutube/> </a> </li>
                      <li><a href="http://www.instagram.com"><FaInstagram/></a> </li>
                      <li><a href="http://www.twitter.com"><FaTwitter/></a> </li>


                  </ul>

                </nav>    
            </div>      
        </div>
    )
}