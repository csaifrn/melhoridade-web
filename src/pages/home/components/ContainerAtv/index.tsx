import { Container } from "./styles";
import { MenuAtv } from "../MenuAtv";
import { ListaAtv } from "../ListaAtv";
import { IListAtv } from "../../shared/types/ListaAtv";

export function ContainerAtv({ listaAtv }: IListAtv) {
  return (
    <Container>
      <MenuAtv />
      <ListaAtv listaAtv={listaAtv} />
    </Container>
  );
}
