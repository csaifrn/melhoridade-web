import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/pagina-inicial";
import { Curso } from "../pages/curso";
import { Participantes } from "../pages/participantes";
import { PerfilAluno } from "../pages/perfil-aluno";
import { useDrawerContext } from '../shared/components/MenuLateral';
import { Login } from "../pages/login/index";
import { Cadastro } from "../pages/cadastro";
import { useEffect } from "react";
import {initializeApp} from 'firebase/app'
import {config} from '../config/config'
import AuthRoute from "../pages/login/components/AuthRoute";
import ForgotPasswordPage from '../pages/login/components/ForgotPassword'
import { ResetPassword } from "../pages/login/components/ResetPassword";
initializeApp(config.firebase);

export const AppRoutes = () => {

  const {setDrawerOptions} = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial',
      },
      {
        icon: 'personIcon',
        path: '/login',
        label: 'Login',
      },
      {
        icon: 'personIcon',
        path: '/cadastro',
        label: 'cadastro',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/Forgot" element={<ForgotPasswordPage/>} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<AuthRoute><Home /> </AuthRoute>} />
      <Route path="/cursos/:id" element={<AuthRoute><Curso /></AuthRoute>} />
      <Route path="/cursos/:id/participantes" element={<AuthRoute><Participantes /></AuthRoute>} />
      {/* <Route path="/alunos" element={<ListaAlunos />} /> */}
      <Route path="/alunos/:id" element={<AuthRoute><PerfilAluno /></AuthRoute>} />
      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};
