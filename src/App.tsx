import Footer from "./components/Footer";
import Header from "./components/Header/Index";
import ScrollToTop from "./components/Hooks/ScrollToTop";
import Routes from "./routes/routes";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
