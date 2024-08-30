import Nav from "@/components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "@/components/contact";
import Homepage from "./pages/homepage";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
