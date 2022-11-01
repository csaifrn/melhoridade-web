import { Container } from "../../shared/Container";
import { SetaEsquerda } from "../../shared/components/SetaEsquerda";
import { TurmaNome } from "./components/TurmaNome";
import { MenuAtv } from "../turma/components/MenuAtv";
import { Professor } from "./components/Professor";
import { Cronograma } from "./components/Cronograma";
export const Turma = () => {

  return (
    <>
    <SetaEsquerda/>
      <Container>
         <TurmaNome />
         <MenuAtv />
         <hr/>
         <Professor />
         <Cronograma /> 
      </Container>
    </>
  );
};
