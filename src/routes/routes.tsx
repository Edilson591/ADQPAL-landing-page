import { Route, Routes as RouterRoutes } from "react-router-dom";
import Home from "../pages/Home";
import PageTransparencia from "../pages/Transparencia/prestacaoDeContas";
import PageDocumentosInstituicao from "../pages/Transparencia/DocumentoInstitucional";
import PageQuemSomos from "../pages/Institucional/QuemSomos";
import PageOQueFazemos from "../pages/Institucional/OqueFazemos";
import PageDiretoria from "../pages/Institucional/GestaoEAdministração";
import PageServices from "../pages/Comunicação/Serviços";
import PageProgramas from "../pages/Comunicação/Programas";
import PageAssistenciaFamiliar from "../pages/Comunicação/Programas/PAF";

function Routes() {
  return (
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
        <Route path="/institucional/quemsomos" element={<PageQuemSomos />} />
        <Route path="/institucional/oquefazemos" element={<PageOQueFazemos />} />
        <Route path="/institucional/gestaoeadministracao" element={<PageDiretoria />} />
        <Route path="/comunicacao/programas" element={<PageProgramas />} />
        <Route path="/comunicacao/programas/PAF" element={<PageAssistenciaFamiliar />} />
        <Route path="/comunicacao/servicos" element={<PageServices />} />
      </RouterRoutes>
  );
}

export default Routes;
