import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pesquisa, SetaEsquerda } from "../../shared/components";
import { Menu } from "../../shared/components/Menu";
import { Container } from "../../shared/Container";
import { database } from "../../services/firebase";
import { ref, get } from "firebase/database";
import { ListaDeAlunos } from "./components/ListaDeAlunos";

export const Participantes = () => {
  // pegar o id da url e retornar o curso correspondente
  // o curso terá a lista de participantes

  const { id = 0 } = useParams<"id">();

  const [listaDeAlunos, setlistaDeAlunos] = useState([]);

  // const pessoasRef = ref(database, `pessoas/`);

  // useEffect(() => {
  //   const getPessoas = async () => {
  //     await get(pessoasRef).then((snapshot) => {
  //       if (snapshot.exists()) {
  //         setlistaDeAlunos(snapshot.val());
  //       } else {
  //         console.log("No data available");
  //       }
  //     });
  //   };
  //   getPessoas();
  // }, []);

  return (
    <>
      <SetaEsquerda />
      <Pesquisa />
      <Container>
        <Menu
          item1="Dados gerais"
          onclick1={() => {}}
          item2="Participantes"
          onclick2={() => {}}
        />
        <hr />
        <ListaDeAlunos listaDeAlunos={listaDeAlunos} />
      </Container>
    </>
  );
};
