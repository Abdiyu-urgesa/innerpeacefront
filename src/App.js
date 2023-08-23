import Headernav from "./components/Header";
import Footer from "./components/footer";
import Homepage from "./pages/home";
function App() {
  return (
    <div className="App">
      <Headernav></Headernav>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
