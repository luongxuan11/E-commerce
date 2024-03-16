import { Route, Routes } from "react-router-dom";
import { Home, Authen } from "./pages";
import path from "./routes/router";

function App() {
   return (
      <>
         <Routes>
            <Route path={path.HOME} element={<Home />}></Route>
         </Routes>
      </>
   );
}

export default App;
