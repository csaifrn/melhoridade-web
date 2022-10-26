import { IListaAtv } from "../../../../types/ListaAtv";
import { Atividade } from "../Atividade";
import { Container } from "./styles";

export const ListaAtv = ({ listaAtv }: IListaAtv) => {
  return (
    <Container>
      <ul>
        {listaAtv.map((atv) => (
          <Atividade key={atv.id} atv={atv} />
        ))}
      </ul>
    </Container>
  );
};
