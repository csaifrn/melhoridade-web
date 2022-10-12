import { IListAtv } from "../../types/ListaAtv";
import { Atividade } from "../Atividade";

export const ListaAtv = ({listaAtv}: IListAtv) => {
  return (
    <ul>
      {listaAtv.map(atv => <Atividade key={atv.id} atv={atv}/>)}
    </ul>
  );
};