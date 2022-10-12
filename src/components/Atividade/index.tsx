import { IAtividade } from "../../types/Atividade";
import { Container } from "./styles";

type Props = {
    atv: IAtividade
}

export function Atividade({atv}: Props) {
    return(
        <Container>
            <div> <img src={atv.url}/> </div> <p>{atv.title}</p>
        </Container>
    )
}