import { IAtividade } from "../../types/Atividade";
import { IListAtv } from "../../types/ListaAtv";
import { Atividade } from "../Atividade";

export const ListaAtv = ({listaAtv}: IListAtv) => {
  return (
    <ul>
      {listaAtv.map( (atv: IAtividade) => <Atividade atv={atv}/> )}
    </ul>
  );
};