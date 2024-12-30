import { Route, Routes  as RouterRoutes} from "react-router-dom";
import Home from "../pages/Home";
import PageTransparencia from "../pages/Transparencia/prestacaoDeContas";
import PageDocumentosInstituicao from "../pages/Transparencia/DocumentoInstitucional";

function Routes() {
  return (
    <>
      <RouterRoutes>
        <Route path="/" element={<Home/>}/>
        <Route path="/transparencia/prestacao-de-contas"  element={<PageTransparencia/>}/>
        <Route path="/transparencia/documentos-institucionais"  element={<PageDocumentosInstituicao/>}/>
        <Route  />
      </RouterRoutes>
    </>
  );
}

export default Routes;
