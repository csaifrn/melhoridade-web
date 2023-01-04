import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/pagina-inicial";
import { Curso } from "../pages/curso";
import { Participantes } from "../pages/participantes";
import { PerfilAluno } from "../pages/perfil-aluno";
import { useDrawerContext } from '../shared/components/MenuLateral';
import { Login } from "../pages/login/index";
import { Cadastro } from "../pages/cadastro";

export const AppRoutes = () => {

  const {toggleDrawerOpen, setDrawerOptions} = useDrawerContext();

  // useEffect(() => {
  //   setDrawerOptions([
  //     {
  //       icon: 'home',
  //       path: '/pagina-inicial',
  //       label: 'Página inicial',
  //     },
  //   ]);
  // }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cursos/:id" element={<Curso />} />
      <Route path="/cursos/:id/participantes" element={<Participantes />} />
      {/* <Route path="/alunos" element={<ListaAlunos />} /> */}
      <Route path="/alunos/:id" element={<PerfilAluno />} />
      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};
