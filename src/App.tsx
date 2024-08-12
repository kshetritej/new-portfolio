import Nav from "@/components/Nav";
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="sm:w-1/2 m-auto">
        <Nav />
        <Header />
        <Services />
      </div>
      <div className="border-b-2"></div>
      <div className="sm:w-1/2 m-auto">

      <Footer />
      </div>
    </>
  );
}

export default App;
