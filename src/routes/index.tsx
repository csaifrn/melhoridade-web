import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/pagina-inicial";
import { Curso } from "../pages/curso";
import { Participantes } from "../pages/participantes";
import { PerfilAluno } from "../pages/perfil-aluno";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/curso/:id" element={<Curso />} />
      <Route path="/curso/:id/participantes" element={<Participantes />} />
      <Route path="/aluno/:id" element={<PerfilAluno />} />
      {/* <Route path="/alunos" element={<ListaAlunos />} /> */}

      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};
