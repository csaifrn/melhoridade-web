import { useState } from "react";
import { ICurso } from "../../../../types/Curso";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const Filtro = () => {
  const [item, setItem] = useState("");

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

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <Select
          value={item}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">Filtro</MenuItem>
          {listaDeCursos.map((curso) => (
            <MenuItem value={curso.id} key={curso.id}>
              {curso.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
