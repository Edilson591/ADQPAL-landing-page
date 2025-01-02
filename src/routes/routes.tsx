import { Route, Routes as RouterRoutes } from "react-router-dom";
import Home from "../pages/Home";
import PageTransparencia from "../pages/Transparencia/prestacaoDeContas";
import PageDocumentosInstituicao from "../pages/Transparencia/DocumentoInstitucional";
import ScrollToTop from "../components/Hooks/ScrollToTop";
import PageQuemSomos from "../pages/Institucional/QuemSomos";

function Routes() {
  return (
    <>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route
          path="/transparencia/prestacao-de-contas"
          element={<PageTransparencia />}
        />
        <Route
          path="/transparencia/documentos-institucionais"
          element={<PageDocumentosInstituicao />}
        />
        <Route path="/institucional/quemsomos"
        element={<PageQuemSomos/>}/>
      </RouterRoutes>
    </>
  );
}

export default Routes;
