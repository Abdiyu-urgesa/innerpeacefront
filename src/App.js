import { Route, Routes } from "react-router-dom";
import Headernav from "./components/Header";
import Footer from "./components/footer";
import Homepage from "./pages/home";
function App() {
  return (
    <div className="App">
      <Headernav></Headernav>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
