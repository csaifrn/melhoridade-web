import { SetaEsquerda } from "../../shared/components"
import { Container } from "../../shared/Container"
import './style.css'

export const PerfilAluno = () => {
    return (
        <>
        <SetaEsquerda />
        <Container>
            <div className="container-dados">
                    <ol>
                        <li className="recolher"><img src="" /></li>
                        <li><h1 className="dados">Dados pessoais</h1></li>
                    </ol>
            </div>
            
            <div className="container-idoso">
                <ol>
                    <li className="foto-idoso"><img src="" /></li>
                    <li className="nome-idoso"><p>Adeilda Conceição Gomes da Silva</p></li>
                </ol>
            </div>

            <div className="container-infoidoso">
                <ul className="infoidoso">
                    <li className="dado-idoso"><p>CpF: 123.456.789-00</p></li>
                    <li className="dado-idoso"><p>Idade: 61</p></li>
                    <li className="dado-idoso"><p>Data de Nascimento: 06/12/1960</p></li>
                    <li className="dado-idoso"><p>Tel. Contato: (84) 9 9999-9999</p></li>
                    <h2 className="contato-emergencia">Contato de Emergência</h2>
                    <li className="dado-idoso"><p>Nome: Kamila</p></li>
                    <li className="dado-idoso"><p>Vínculo: Filha</p></li>
                    <li className="dado-idoso"><p>Tel. Contato: (84) 8 8888-8888</p></li>
                </ul>
            </div>
            <div className="container-conteudo">
                <div className="atv-ttl">
                    <ol>
                        <li className="recolher"><img src="" /></li>
                        <li><h1 className="dados">Atividades</h1></li>
                    </ol>
                </div>
            </div>

            <div>
                <nav className="menu-atv">
                    <ol>
                        <li>
                            <button className="btn extensao-button" type="button">Extensão</button>
                            <button className="btn ensino-button" type="button">Ensino</button>
                        </li>
                    </ol>
                </nav>
            </div>
            
            <div>
                <table className="extensao-table">
                        <tr>
                            <th><p className="cabecalho">ATIVIDADE</p></th>
                            <th><p className="cabecalho">TURMA</p></th>
                            <th><p className="cabecalho">pROFESSOR</p></th>
                        </tr>
                        <tr>
                            <td><p className="atividade">DANÇA</p></td>
                            <td><p className="turma">TERÇA-FEIRA</p><p className="horario">7:00-7:45</p><p className="sala">SALA 1</p></td>
                            <td><p className="professor">GUSTAVO BRITO</p></td>
                        </tr>
                        <tr>
                            <td><p className="atividade">CORAL</p></td>
                            <td><p className="turma">TERÇA-FEIRA</p><p className="horario">7:45-8:00</p><p className="sala">SALA 3</p></td>
                            <td><p className="professor">JOÃO</p></td>
                        </tr>
                        <tr>
                            <td><p className="atividade">MUSCULAÇÃO</p></td>
                            <td><p className="turma">QUARTA-FEIRA</p><p className="horario">7:00-7:45</p><p className="sala">SALA 1</p></td>
                            <td><p className="professor">MARIA</p></td>
                        </tr>
                    </table>
            </div>

            <div className="container-conteudo">
                <div className="documentacao-ttl">
                        <ol>
                            <li className="recolher"><img src="" /></li>
                            <li><h1 className="dados">Documentação</h1></li>
                        </ol>
                </div>
                <table className="documentos-table">
                    <tr>
                        <td className="situacao"><img src="" /></td>
                        <td><p className="documento">FOTO 3X4</p></td>
                    </tr>
                    <tr>
                        <td className="situacao"><img src="" /></td>
                        <td><p className="documento">CÓpIA DO RG (FRENTE)</p></td>
                    </tr>
                    <tr>
                        <td className="situacao"><img src="" /></td>
                        <td><p className="documento">CÓpIA DO RG (VERSO)</p></td>
                    </tr>
                    <tr>
                        <td className="situacao"><img src="" /></td>
                        <td><p className="documento">COMpROVANTE DE RESIDÊNCIA</p></td>
                    </tr>
                    <tr>
                        <td className="situacao"><img src="" /></td>
                        <td><p className="documento">pASSApORTE VACINAL</p></td>
                    </tr>
                    <tr>
                        <td className="situacao"><img src="" /></td>
                        <td><p className="documento">ATESTADO CARDIOLOGISTA</p></td>
                    </tr>
                    <tr>
                        <td className="situacao"><img src="" /></td>
                        <td><p className="documento">ATESTADO DERMATOLOGISTA</p></td>
                    </tr>
                </table>
            </div>
        </Container>
        </>
    )
}