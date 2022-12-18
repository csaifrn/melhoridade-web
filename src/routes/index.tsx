import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/pagina-inicial";
import { Curso } from "../pages/curso";
import { Participantes } from "../pages/participantes";
import { PerfilAluno } from "../pages/perfil-aluno";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/cursos/:id" element={<Curso />} />
      <Route path="/cursos/:id/participantes" element={<Participantes />} />
      {/* <Route path="/alunos" element={<ListaAlunos />} /> */}
      <Route path="/alunos/:id" element={<PerfilAluno />} />

      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};
