import { useState } from "react";
import { ICurso } from "../../../../types/Curso";

export const Filtro = () => {
  const [listaDeCursos, setListaDeCursos] = useState<ICurso[]>([
    {
      id: "1",
      title: "Musculação 1",
      icon: "",
      participantes: {
        listaDeAlunos: [
          {
            id: "1",
            name: "Adeilda",
            cpf: "123.456.789-00",
            url: "",
          },
          {
            id: "2",
            name: "Adeilda",
            cpf: "123.456.789-00",
            url: "",
          },
          {
            id: "2",
            name: "Adeilda",
            cpf: "123.456.789-00",
            url: "",
          },
        ],
      },
    },
    {
      id: "2",
      title: "Musculação 2",
      icon: "",
    },
    {
      id: "3",
      title: "Musculação 3",
      icon: "",
    },
  ]);

  return (
    <select className="select">
      <option className="option">Filtro</option>
      {listaDeCursos.map((curso) => (
        <option className="option">{curso.title}</option>
      ))}
    </select>
  );
};
