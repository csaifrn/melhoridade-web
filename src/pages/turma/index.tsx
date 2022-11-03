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
         <TurmaNome title='Dança 1'/>
         <MenuAtv />
         <hr/>
         <Professor title='Marina da Silva' url='../images/commands/professora-perfil.png'/>
         <Cronograma dia='Terça/Quinta' hora='07:00 - 07:45' sala='Sala 1' /> 
      </Container>
    </>
  );
};
