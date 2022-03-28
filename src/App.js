import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EntidadesList } from "./components/Entidad/EntidadesList";
import { Layout } from "./components/shared/Layout";
import { EntidadForm } from "./components/Entidad/EntidadForm";
import { Entidad } from "./pages/Entidad";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout></Layout>}>
          <Route index element={<EntidadesList></EntidadesList>}></Route>
          <Route
            path="/entidadform"
            element={<EntidadForm></EntidadForm>}
          ></Route>
        </Route>
        <Route path="/entidad/" element={<Layout></Layout>}>
          <Route path=":id" element={<Entidad></Entidad>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
