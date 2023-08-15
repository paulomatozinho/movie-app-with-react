import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Header />
      <Banner image = "home" />
      <Container>
        <h1>teste</h1>
      </Container>

      <Footer />
    </>
  );
}

export default App;
