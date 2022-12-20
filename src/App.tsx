import { Header } from "./shared/components/";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { database } from "./services/firebase";
import { ref, get } from "firebase/database";

const App = () => {
  const pessoas = ref(database, 'pessoas/0');

  get(pessoas).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val().nome);
    } else {
      console.log("No data available");
    }
  })

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
