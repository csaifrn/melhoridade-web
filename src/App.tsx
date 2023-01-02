import { Header } from "./shared/components/";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { DrawerProvider } from "./shared/components/MenuLateral/DrawerContext";
import { MenuLateral } from "./shared/components/MenuLateral";

const App = () => {
  return (
    <>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <Header />
            <div className="container">
              <AppRoutes />
            </div>
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </>
  );
};

export default App;
