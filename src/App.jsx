import { BrowserRouter } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>컨텐츠</main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
