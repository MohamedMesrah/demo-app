// import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/register/register";
import Home from "./components/home/home";

// import { AppContext } from "./context/appContext";

function App() {
  // const { registered } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        {/* {registered && <Route path="/home" element={<Home />} />} */}
        <Route path="/" element={<Register />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
