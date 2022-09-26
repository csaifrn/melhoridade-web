import { Atividade } from "./Atividade";
import { Pesquisa } from "./Pesquisa";

export function Home(){
    return(
        <main>
            <Pesquisa></Pesquisa>
            <div className="container-conteudo">
                <nav className="menu-atv">
                    <ol>
                        <li>
                            <button className="btn extensao-button" type="button">Extensão</button>
                            <button className="btn ensino-button" type="button">Ensino</button>
                        </li>
                        <li>
                            <button className="filtro-button">
                                Filtro
                                <img className="seta-baixo" src="../images/commands/seta-baixo.png" alt=""/>
                            </button>
                        </li>
                    </ol>
                </nav>
                <section className="container-atv">
                    <ul>
                        <Atividade></Atividade>
                        <li> <div> <img src="../images/icons/dumbell.png" alt=""/>    </div> <p>Musculação 1</p>     </li>
                        <li> <div> <img src="../images/icons/dance.png" alt=""/>      </div> <p>Dança 1</p>          </li>
                        <li> <div> <img src="../images/icons/microphone.png" alt=""/> </div> <p>Coral 1</p>          </li>
                        <li> <div> <img src="../images/icons/yoga.png" alt=""/>       </div> <p>Cons. Corporal 1</p> </li>
                        <li> <div> <img src="../images/icons/pencil.png" alt=""/>     </div> <p>Desenho 1</p>        </li>
                        <li> <div> <img src="../images/icons/hidro.png" alt=""/>      </div> <p>Hidro 1</p>          </li>
                        <li> <div> <img src="../images/icons/swimming.png" alt=""/>   </div> <p>Natação 1</p>        </li>
                        <li> <div> <img src="../images/icons/ballet.png" alt=""/>     </div> <p>Ballet 1</p>         </li>
                    </ul>
                </section>
            </div>
        </main>
    )
}