import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Turma } from "../pages/turma";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/turma" element={<Turma />} />

      <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};
