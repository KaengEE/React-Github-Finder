import { BrowserRouter } from "react-router-dom";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title="GitHub Finder" />
        <main>컨텐츠</main>
      </div>
    </BrowserRouter>
  );
}

export default App;
