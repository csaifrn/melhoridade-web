import { Container } from "./styles";
import { MenuAtividades } from "../MenuAtividades";
import { ListaAtv } from "../ListaAtv";
import { IListAtv } from "../../types/ListaAtv";



export function ContainerAtv({listaAtv}: IListAtv) {
  return (
    <Container>
      <MenuAtividades />
      <ListaAtv listaAtv={listaAtv} />
    </Container>
  );
}