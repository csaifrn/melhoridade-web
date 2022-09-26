export function Main(){
    return(
        <main>
            <div className="container-pesquisa">
                <img className="icon" src="../imagens/commands/lupa.png" alt=""/>
                <input type="text" id="buscar" placeholder="Buscar por pessoa"/>
            </div>
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
                                <img className="seta-baixo" src="../imagens/commands/seta-baixo.png" alt=""/>
                            </button>
                        </li>
                    </ol>
                </nav>
                <section className="container-atv">
                    <ul>
                        <li> <div> <img src="../imagens/icons/dumbell.png" alt=""/>    </div> <p>Musculação 1</p>     </li>
                        <li> <div> <img src="../imagens/icons/dance.png" alt=""/>      </div> <p>Dança 1</p>          </li>
                        <li> <div> <img src="../imagens/icons/microphone.png" alt=""/> </div> <p>Coral 1</p>          </li>
                        <li> <div> <img src="../imagens/icons/yoga.png" alt=""/>       </div> <p>Cons. Corporal 1</p> </li>
                        <li> <div> <img src="../imagens/icons/pencil.png" alt=""/>     </div> <p>Desenho 1</p>        </li>
                        <li> <div> <img src="../imagens/icons/hidro.png" alt=""/>      </div> <p>Hidro 1</p>          </li>
                        <li> <div> <img src="../imagens/icons/swimming.png" alt=""/>   </div> <p>Natação 1</p>        </li>
                        <li> <div> <img src="../imagens/icons/ballet.png" alt=""/>     </div> <p>Ballet 1</p>         </li>
                    </ul>
                </section>
            </div>
        </main>
    )
}