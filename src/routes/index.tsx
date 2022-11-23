import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Curso } from "../pages/curso";
import { Participantes } from "../pages/participantes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/curso/:id" element={<Curso />} />
      <Route path="/participantes/:id" element={<Participantes />} />

      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};
