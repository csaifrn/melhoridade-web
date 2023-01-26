import { Header } from "./shared/components/";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { DrawerProvider } from "./shared/components/MenuLateral/DrawerContext";
import { MenuLateral } from "./shared/components/MenuLateral";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

const App = () => {
  const [loading,setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAuth().onAuthStateChanged(user => {
      if (user){
        console.log('User detecteed')
      }else {
        console.log('no user detected')
      }
      setLoading(false)
    })
  })
  if(loading)
    return console.log('loading...')
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
