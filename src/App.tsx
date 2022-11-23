import { Header } from "./shared/components/";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
