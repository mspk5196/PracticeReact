import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavLinks from "./components/navLinks/NavLinks";

function App() {
  // const [state, setState] = useState("my app");

  // const handleButtonClick = () => {
  //   setState("button clicked");
  // }
  return (
    <div className="App">
      {/* <div onClick={handleButtonClick}><Button1 text={"Click me"}/></div>
      <Button1 text={state}/>
      <p>{state}</p> */}
      <NavLinks/>
      
        <Routes>
          <Route path="/PracticeReact" element={<Home/>} />
          <Route path="/PracticeReact/home" element={<Home/>} />
          <Route path="/PracticeReact/about" element={<About/>} />
          <Route path="/PracticeReact/contact" element={<Contact/>} />
        </Routes>
      
    </div>
  );
}

export default App;
